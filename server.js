const express = require('express');
const app = express();
const port = 3000;

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

app.use((req, res, next) => {
  console.log('<h1>Hi</h1>');
  next();
});

app.get('/', (req, res) => {
  res.send('getting root');
});

app.get('/profile', (req, res) => {
  res.send('getting profile');
});

app.post('/profile', (req, res) => {
  const user = {
    name: 'John',
    hobby: 'skating',
  };
  res.send(user);
});

app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});

// const http = require('http');

// const server = http.createServer((request, response) => {
//   const user = {
//     name: "John",
//     hobby: "skating"
//   }
//   response.setHeader('Content-Type', 'application/json');
//   response.end(JSON.stringify(user));
// });

// server.listen(3000);
