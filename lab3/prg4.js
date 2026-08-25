
import http from "http";

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.end(`
            <h1>Home Page</h1>
        `);

    } else if (req.url == '/about') {
        res.end(`
            <h1>About Us Page</h1>
        `);

    } else if (req.url == '/product') {
        res.end(`
            <h1>Product Page</h1>
        `);

    } else if (req.url == '/cart') {
        res.end(`
            <h1>Cart Page</h1>
        `);

    } else if (req.url == '/checkout') {
        res.end(`
            <h1>Checkout Page</h1>
        `);

    } else {
        res.statusCode = 404;

        res.end(`
            <h1>404, Not Found</h1>
        `);
    }
});

server.listen(4444, () => console.log("Server is running..."));