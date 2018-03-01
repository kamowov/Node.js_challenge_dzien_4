// Zadanie dnia 1: Hello, World from back-end!

const http = require('http');

const srv = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end('Hello World!');
});

const srvListener = srv.listen(3000, () => {
    console.log('Port:3000');
});