const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    // lodash example
    const num = _.random(0, 20);
    console.log(num);   
    const greet = _.once(() => {
        console.log('Hello, World!');
    });
    greet();

    // set header content type
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200; // OK
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200; // OK
            break;
        case '/about-us':
            res.statusCode = 301; // Moved Permanently
            res.setHeader('Location', '/about');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404; // Not Found
            break;
    }

    // send response
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            //res.write( data );
            res.end(data);
        }
    })

});
server.listen(3000, 'localhost', () => {
    console.log("Server is running on port 3000");
});