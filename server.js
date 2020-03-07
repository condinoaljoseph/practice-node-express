const http = require('http');
const dt = require('./date');
const url = require('url');
const fs = require('fs');

http.createServer((req, res) => {
    /* @req url */
    // if(req.url === '/') {
    //     res.writeHead(200, { 'Content-Type': 'text/plain' });
    //     res.end('Hello World');
    // } else if (req.url === '/date') {
    //     res.writeHead(200, { 'Content-Type': 'text/plain' });
    //     res.end(`today's date is ${dt.myDateTime()}`);
    // }

    /* @url module */
    // let adr = 'http://localhost:8080/default.htm?year=2017&month=february';
    // const q = url.parse(adr, true);
    // console.log(q.query);

    /* @fs module */
    // fs.readFile('index.html', (err, data) => {
    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     res.end();
    // });

    // fs.appendFile('newfiletxt', 'Hello content', (err) => {
    //     if(err) throw err;
    //     console.log('saved!')
    // })

    // fs.open('newfiletxt2', 'w', (err, file) => {
    //     if(err) throw err;
    //     console.log('saved');
    // })

    // fs.writeFile('newfiletxt3', 'hello hekhekek ', err => {
    //     if(err) throw err;
    //     console.log('saved');
    // })

    // fs.unlink('newfiletxt3', err => {
    //     if(err) throw err;
    //     console.log('file deleted')
    // })

    // fs.rename('hahaha', 'hekhek', err => {
    //     if(err) throw err,
    //     console.log('file renamed')
    //     res.end();
    // })

    // let q = url.parse(req.url, true);
    // let filename = `.${q.pathname}.html`;

    // fs.readFile(filename, (err, data) => {
    //     if(err) {
    //         res.writeHead(400, {'Content-Type': 'text/html'});
    //         return res.end('404 Not Found');
    //     }

    //     res.writeHead(200, {'Content-Type': 'text/html'});
    //     res.write(data);
    //     return res.end();
    // })

    let rs = fs.createReadStream('./demofile.txt');
    rs.on('open', () => {
        console.log('The file is open')
    })

}).listen(8080);