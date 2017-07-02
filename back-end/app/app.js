// @flow
import express from 'express';
import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import api from './routes/api';
import applications from './routes/applications';

const app: any = express();
const development = !!process.env.DEVELOPMENT;

app.use(logger(development ? 'dev' : 'combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'apps')));

app.use('/api', api);

const applicationsRoutes = development
  ? (req, res) => {
      res.send('There are no static assets in a development environment.');
    }
  : applications;
app.get('*', applicationsRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err: any = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = development ? err : {};

  res.status(err.status || 500);
  res.send('404 Not found');
});

export default app;
