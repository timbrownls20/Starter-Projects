import express from 'express';

const app = express();
var server = require('http').createServer(app);
const port = 3000;

app.get('/', (req, res) => {
  
  res.status(200).send('Node with TypeScript!!');
});

server.listen(port, (err?: any) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});


module.exports = {
  app,
  server
};