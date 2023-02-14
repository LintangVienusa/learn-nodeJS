const { hello, world } = require('./module');
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json')
    res.write(JSON.stringify({
        status: 'OK',
        message: 'You are using nodeJS to write this JSON'
    }));
    res.end();
}) 

server.listen(3000, () => console.log("Server running as http://127.0.0.1:3000 "))