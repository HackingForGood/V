const express = require('express');
const app = express();

app.get('/test', (req, res) => res.sendStatus(200));

app.listen(8888, () => {
  console.log('listening');
});
