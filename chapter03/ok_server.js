const http = require("http")  // http 객체 생성

const server = http.createServer( (req, res) => {
  res.setHeader("Content-Type", "text/plain");
  res.end("OK");
});

server.listen( 8000, () => console.log("OK 서버 시작!"));
