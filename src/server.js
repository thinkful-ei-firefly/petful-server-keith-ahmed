  
const app = require('./app');
const { PORT } = require('./config');

app.listen(PORT || 8080, ()=> {
  console.info('Server Listening on port: ' + PORT);
});