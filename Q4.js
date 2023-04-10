const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  const { x, y, z } = req.body;
  const result = generateOutput(x, y, z);
  res.json(result);
});

function generateOutput(x, y, z) {
  const output = ['hello'];
  output.push(x);
  if (x ** y > z) {
    output.push('higher than expected');
  } else {
    output.push(x ** y);
  }
  output.push('done');
  return output;
}

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
