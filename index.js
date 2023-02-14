const { hello, world } = require('./module');
const http = require('http');

const moment = require('moment')

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/welcome': welcome(res); break
        case '/': home(res); break
        default: page404(res); break
    }
    
}) 

const welcome = res => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json')
    res.write(JSON.stringify({
        status: 'OK',
        message: 'You are using nodeJS to write this JSON',
        timehit: moment(),
        info: 'You are in welcome page'
    }));
    res.end();
}

const home = res => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/json')
    // res.write(JSON.stringify({
    //     status: 'OK',
    //     message: 'You are using nodeJS to write this JSON',
    //     timehit: moment(),
    //     info: 'You are in home page'
    // }));
    res.end("<h1>You are in Home Page</h1>");
}

const page404 = res => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/json')
    res.write(JSON.stringify({
        status: 'FAIL',
        message: 'Result not found',
        timehit: moment(),
        info: 'notfound'
    }));
    res.end();
}
server.listen(3000, () => console.log("Server running as http://127.0.0.1:3000 "))