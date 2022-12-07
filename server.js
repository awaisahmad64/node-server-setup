const { createSecretKey } = require('crypto');
const http = require('http');
const fs = require('fs');
const homepage = fs.readFileSync('./index.html');
const about = fs.readFileSync('about.html');
const contact = fs.readFileSync('contact.html');
const error = fs.readFileSync('error.html');
const PORT = 2000;
const localHost = 'localhost';
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    return res.end(homepage);
  }
  if (req.url === '/contact') {
    return res.end(contact);
  }
  if (req.url === '/about') {
    return res.end(about);
  } else {
    return res.end(error);
  }
});
server.listen(PORT, localHost, () => {
  console.log(`Server is working at http:${localHost}:${PORT}`);
});
