// @flow
import express from 'express';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import api from './routes/api';
import login from './routes/login';
import daysOff from './routes/days-off';

const app: any = express();

app.use(logger(!!process.env.DEVELOPMENT ? 'dev' : 'combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', api);

if (!!process.env.DEVELOPMENT) {
  app.use('*', (req, res) => {
    res.send('There are no static assets in a development environment.');
  });
} else {
  app.use('/login', login);
  app.use('/days-off', daysOff);
}

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
  res.locals.error = !!process.env.DEVELOPMENT ? err : {};

  res.status(err.status || 500);
  res.send('404 Not found');
});

export default app;
