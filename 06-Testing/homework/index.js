const express = require('express');
const app = express();

app.use(express.json()); // for parsing application/json

app.get('/', (req, res) => {
  res.status(200).send({
    message: 'hola',
  });
});

app.get('/test', (req, res) => {
  res.status(200).send({
    message: 'test',
  })
})

app.post('/sum', (req, res) => {
  const {a, b} = req.body

  res.status(200).send({
    result: a + b //es lo mismo que: req.body.a + req.body.b, sin usar destructuring
  })
})

app.post('/product', (req, res) => {
  const {a, b} = req.body

  res.status(200).send({
    result: a * b, //es lo mismo que: req.body.a * req.body.b, sin usar destructuring
  });
});

const sumArray = (array, num) => {
  for (const num1 of array) {
    for (const num2 of array) {
      if(num1 === num2) continue;
      if(num1 + num2 === num) return true;
    }
  }
  return false
}

app.post('/sumArray', (req, res) => {
  const {array, num} = req.body
  const result = sumArray(array, num)

  res.status(200).send({
    result: result
  });
})

app.post('/numString', (req, res) => {
  const { str } = req.body;

  if(!str || typeof str === 'number') return res.sendStatus(400);

  else{
    const result = str.length;

    return res.status(200).send({ result: result })
  }
})

app.post('/pluck', (req, res) => {
  const { array, name } = req.body;

  if(!Array.isArray(array) || !name) return res.sendStatus(400);

  else{
    const result = array.map(obj => obj.name)

    return res.status(200).send({ result: result })
  }
})

module.exports = app; // Exportamos app para que supertest session la pueda ejecutar
