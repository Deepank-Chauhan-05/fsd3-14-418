import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  res.write("<h1>Welcome to server side programming</h1>");
  res.write("<h2>It is tracking the files</h2>");
  res.end("welcome to http server");
});

server.listen(5000, () => {
  console.log("server is running on port 5000");
});