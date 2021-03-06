import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import apiRoutes from './routes-api';
import staticRoutes from './routes-static';

const app = express();

if (process.env.DEVELOPMENT) {
  console.log('RUNNING IN DEVELOPMENT MODE.');
}

app.use(logger(process.env.DEVELOPMENT ? 'dev' : 'combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', apiRoutes);

if (!!process.env.DEVELOPMENT) {
  app.use('/', (req, res) => {
    res.send('There are no static assets in a development environment.');
  });
} else {
  app.use('/', staticRoutes);
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = !!process.env.DEVELOPMENT ? err : {};

  res.status(err.status || 500);
  res.send('404 Not found');
});

export default app;
