require('dotenv').config();
const express = require('express');
const app = express();


app.use(require('./routes')); 

app.get('/test', (req, res) => res.sendStatus(200));

app.listen(process.env.PORT, () => {
  console.log('listening');
});
