// Write a function to take your name and print it with hello
function sayHello(name)
{
    console.log(`Hello ${name}`);
}

const sayHi = (name) =>
{
    console.log(`Hi ${name}`);
};

sayHello("Deepank");
sayHi("Deepank");

// Take 2 arguments and return their sum
function sum(num1, num2)
{
    console.log(num1 + num2);
}

const findsum = (a, b) =>
{
    return a + b;
};

sum(20, 40);
console.log(findsum(20, 60));

