import http from "http";

const requestLogs = [];
const server = http.createServer((req, res) => {
  requestLogs.push({ url: req.url, array: new Array(100000).join("*") });

  res.end(JSON.stringify(requestLogs));
});

server.listen(3000);
