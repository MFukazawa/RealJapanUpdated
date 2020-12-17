const express = require('express');
const app = express();
const fs = require('fs');
const port = 3000;

fs.readFile('./hello.txt', (err, data) => {
  if (err) {
    console.log('error');
  }

  console.log(data.toString());
})

// const file = fs.readFileSync('./hello.txt');
// console.log(file.toString());

// fs.appendFile('./hello.txt', 'this is so coooool', err => {
//   if (err) {
//     console.log(err);
//   }
// })

// fs.writeFile('bye.txt', 'sad to see u go nerd', err => {
//   if (err) {
//     console.log(err);
//   }
// })

// fs.unlink('./bye.txt', err => {
//   if (err) {
//     console.log(err);
//   }
// })

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use((req, res, next) => {
  console.log('<h1>Hi</h1>');
  next();
});

// app.get('/:id', (req, res) => {
//   console.log(req.params)
//   res.send('getting root');
// });

// app.get('/profile', (req, res) => {
//   res.send('getting profile');
// });

// req.headers

// app.post('/profile', (req, res) => {
//   console.log(req.body)
//   // const user = {
//   //   name: 'John',
//   //   hobby: 'skating',
//   // };
//   res.send('Success');
// });

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
