import http from "http";

const server = http.createServer((req, res) => {
  console.log(req)
});

server.listen(6565, () => {
  console.log("server is started");
});