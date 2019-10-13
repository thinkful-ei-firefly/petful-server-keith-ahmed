const express = require('express');
const cors = require('cors');
const CatsRouter = require('./cats/CatsRouter');
const DogsRouter = require('./dogs/DogsRouter');
const AdoptersRouter = require('./adopters/AdoptersRouter');
const {PORT} = require('./config');
const app = express();
app.use(cors());

app.use('/api/cats', CatsRouter);
app.use('/api/dogs', DogsRouter);
app.use('/api/adopters', AdoptersRouter);


app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

app.listen(PORT,()=>{
  console.log('Serving on 8080');
});