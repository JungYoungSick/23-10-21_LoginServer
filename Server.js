//경로 변수 작성.
const http = require('http')
const fs = require('fs')
const qureyString = require('querystring')

// HTTP모듈과 콜백을 사용한 서버 생성.
const server = http.createServer((req, res) => {
  function serverErrerLog() {
    res.writeHead(500)
    return res.end("서버가 안돼요! 수정하세요");
  }
  //? join.html 페이지 활성화를 위한 GET방식 페이지 가져오기[구동 확인]
  if(req.url === '/' && req.method === 'GET') {
    fs.readFile('./static/onepage/join.html',(err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(200, {'Content-Type':'text/html', 'charset':'utf-8'});
      res.end(data);
    });
  }
  //? join.css 페이지 활성화를 위한 GET방식 페이지 가져오기[구동 확인]
  else if(req.url ==='/join.css' && req.method === 'GET') {
    fs.readFile('./static/onepage/join.CSS',(err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(200, {'Content-Type':'text/css;', 'charset':'utf-8'});
      res.end(data)
    });
  //? join.js 페이지 활성화를 위한 GET방식 페이지 가져오기[구동 확인] 
  }else if (req.url === '/join.js' && req.method === 'GET') {
    fs.readFile('./static/onepage/join.js', (err,data) => {
      if(err) {
        serverErrerLog();
      }
      res.writeHead(200, {'content-type':'application/javascript', 'charset':'utf-8'});
      res.end(data)
    }); 
    //! Titlepage.html 페이지 활성화를 위한 post방식 페이지 불러오기[구동 실패]
    }else if(req.url === '/Titlepage.html' && req.method === 'POST') {
      let none = "";
      req.on('data', (chenk) => {
        none += chenk.toString();
      })
      //! 아이디 작성 시 값 추가 작동 확인이 어려움.
      req.on('end', ()=> {
        const queryParseNone=qureyString.parse(none);
        const {UserID} = queryParseNone
        console.log(UserID);
        fs.readFile('/static/twopage/Titlepage.html', (err, data) => {
          if(err) {
            console.log(err)
          } else {
          res.writeHead(200, {'Content-Type':'text/html', 'charset':'utf-8'})
          res.end(data)
          }
      })
      })
    } else {
    res.writeHead(404);
    res.end('Not found')
  }  
});


const port = 8080;
server.listen(port, () => {});

