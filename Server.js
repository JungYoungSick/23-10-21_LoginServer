const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  function serverErrerLog() {
    res.writeHead(500)
    return res.end("서버가 안돼요! 수정하세요");
  }
//파일들 경로 수정 필요.
  console.log(req.url ,req.method);
  if(req.url === '/' && req.method === 'GET') {
    fs.readFile('./app_T_11_1.html',(err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(200, {'Content-Type':'text/html', 'charset':'utf-8'});
      res.end(data);
    });
  }
  else if(req.url ==='/app_T_11_1.CSS' && req.method === 'GET') {
    fs.readFile('./app_T_11_1.CSS',(err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(200, {'Content-Type':'text/css;', 'charset':'utf-8'});
      res.end(data)
    });
  }else if (req.url === '/app_T_11_1.js' && req.method === 'GET') {
    fs.readFile('./app_T_11_1.js', (err,data) => {
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

