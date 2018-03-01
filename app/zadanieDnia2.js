// Zadanie dnia 2: Cześć, przeglądarko

const http = require('http');

const srv = http.createServer((req, res) => {

    const userAgent = req.headers['user-agent'];

    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(userAgent);
});

const srvListener = srv.listen(3000, () => {
    console.log('Port:3000');
});