// create web server
const express = require('express');
const app = express();

// create route
app.get('/comments', (req, res) => {
  res.send('This is a GET request');
});

// create route
app.post('/comments', (req, res) => {
  res.send('This is a POST request');
});

// create route
app.put('/comments', (req, res) => {
  res.send('This is a PUT request');
});

// create route
app.delete('/comments', (req, res) => {
  res.send('This is a DELETE request');
});

// start web server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000/comments');
});