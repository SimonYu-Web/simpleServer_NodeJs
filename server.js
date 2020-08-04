// 1. Create an api server provide following endpoints
// GET /people            get all people
// POST /people           post a new person (must include name property)
// GET /people?name=xxx   filter response by name
//
// 2. In the response header, include a custom header, X-time, shows the time of the request received.

const express = require('express');
const app = express();
//body-parser
app.use(express.json());

const people = [];

// answer 2 add X-time
app.use((req, res, next) => {
  res.setHeader('X-time', new Date());
  next();
});

//route handler
app.get('/people', (req, res) => {
  const { name } = req.query;  
  if (name) {
    const filtered = people.filter((i) => i.name.includes(name));
    return res.json(filtered);
  }
  return res.json(people);
});

app.post('/people', (req, res) => {
  const { name, age } = req.body;
  const person = { name, age };
  people.push(person);
  return res.status(201).json(person);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000!');
});


// npm init -y
// npm i express
// npm i -D nodemon
// npm run dev
// express