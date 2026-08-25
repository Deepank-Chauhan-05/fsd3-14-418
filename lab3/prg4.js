
import http from "http";

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.end(`
            <h1>Home Page</h1>
            <p>Welcome to our store</p>
            <a href="/product">View Product</a>
            <br>
            <a href="/cart">Cart</a>
        `);

    } else if (req.url == '/about') {
        res.end(`
            <h1>About Us Page</h1>
            <p>Welcome to our online store.</p>
            <a href="/">Home</a>
        `);

    } else if (req.url == '/product') {
        res.end(`
            <h1>Mobile Phone</h1>
            <h2>Price: ₹2000</h2>
            <p>Discount: 5%</p>
            <p>Final Price: ₹1900</p>
            <a href="/cart">Add to Cart</a>
        `);

    } else if (req.url == '/cart') {
        res.end(`
            <h1>Cart Page</h1>
            <h2>Mobile Phone</h2>
            <p>Price: ₹1900</p>
            <p>Quantity: 1</p>
            <h2>Total: ₹1900</h2>
            <a href="/product">Continue Shopping</a>
            <br><br>
            <a href="/checkout">Proceed to Checkout</a>
        `);

    } else if (req.url == '/checkout') {
        res.end(`
            <h1>Checkout Page</h1>
            <h2>Order Summary</h2>
            <p>Product: Mobile Phone</p>
            <p>Total Amount: ₹1900</p>

            <h3>Enter Details</h3>

            <form>
                <input type="text" placeholder="Name">
                <br><br>
                <input type="text" placeholder="Address">
                <br><br>
                <input type="text" placeholder="Phone Number">
                <br><br>
                <button type="submit">Place Order</button>
            </form>

            <br>
            <a href="/cart">Back to Cart</a>
        `);

    } else {
        res.statusCode = 404;

        res.end(`
            <h1>404, Not Found</h1>
            <p>Page not found</p>
            <a href="/">Home</a>
        `);
    }
});

server.listen(4444, () => console.log("Server is running on http://localhost:4444"));