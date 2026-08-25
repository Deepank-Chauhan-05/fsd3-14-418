// JavaScript is synchronous and single-threaded.

// For asynchronous operations, JavaScript uses the Event Loop
// to manage the Call Stack and execute callback functions.

// Common asynchronous methods:
// 1. setTimeout()
// 2. setImmediate()      // Node.js
// 3. process.nextTick()  // Node.js
// 4. setInterval()


const f1 = () => {
    console.log('f1');
};
const f2 = () => {
    console.log('f2');
};
const f3 = () => {
    console.log('f3');
};

const main = () => {
    console.log("main");
    setTimeout(f1, 5000);
    f2();
    console.log("end");
};

main();
