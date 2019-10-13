const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const { CLIENT_ORIGIN, PORT, NODE_ENV } = require('./config');
const CatsRouter = require('./cats/CatsRouter');
const DogsRouter = require('./dogs/DogsRouter');
const AdoptersRouter = require('./adopters/AdoptersRouter');

const app = express();
const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(
  cors({
    origin: CLIENT_ORIGIN
  })
);

app.get('/', (req, res) => {
  res.send('Petful API!');
});

app.use('/api/cats', CatsRouter);
app.use('/api/dogs', DogsRouter);
app.use('/api/adopters', AdoptersRouter);


app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT, () => {
  console.log(`Serving listening at http://localhost:${PORT} `);
});