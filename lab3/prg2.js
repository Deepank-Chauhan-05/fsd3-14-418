import http from "http"

const server = http.createServer((req, res) => {
    res.writeHeader(404,{
        "content-type":"text/plain",
    });
    res.end("<h1>Welcome to the Server<h1>");
});
server.listen(4444, () => console.log("Server is running"));