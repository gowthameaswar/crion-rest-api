const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render("index", { input: [] });
})

app.post('/', (req, res) => {
  const { x, y, z } = req.body;
  console.log(req.body);
  const result = generateOutput(x, y, z);
  console.log(result);
  res.render("index", { input: result });
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

app.listen(5000, () => {
  console.log(`Listening at 5000`);
});
