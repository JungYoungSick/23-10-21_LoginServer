const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  function serverErrerLog() {
    res.writeHead(500)
    return res.end("서버가 안돼요! 수정하세요");
  }

  if(req.url === '/' && req.method === 'GET') {
    fs.readFile('./static/onepage/join.html',(err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(200, {'Content-Type':'text/html', 'charset':'utf-8'});
      res.end(data);
    });
  }
  else if(req.url ==='/join.css' && req.method === 'GET') {
    fs.readFile('./static/onepage/join.CSS',(err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(200, {'Content-Type':'text/css;', 'charset':'utf-8'});
      res.end(data)
    });
  }else if (req.url === '/join.js' && req.method === 'GET') {
    fs.readFile('./static/onepage/join.js', (err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(200, {'content-type':'application/javascript', 'charset':'utf-8'});
      res.end(data)
    });
  } else {
    res.writeHead(404);
    res.end('Not found')
  }
})


const port = 8080;
server.listen(port, () => {});


