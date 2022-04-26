import http from "http";
import { memoryUsage } from 'process';

const requestLogs = [];
const server = http.createServer((req, res) => {
  requestLogs.push({ url: req.url, array: new Array(100000).join("*") });

  console.log(parseInt(memoryUsage.rss() / (1024*1024)));

  res.end(JSON.stringify(requestLogs));
});

server.listen(3000);
