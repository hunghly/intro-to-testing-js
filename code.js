// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
};
const sayHello = function(name) {
    // const errMsg = "Name is not a string. Should return a string when called.";
    // console.assert((typeof name === 'string'), errMsg);
    // return `Hello, ${name}!`;
    return (typeof name === 'string') ? `Hello, ${name}!` : console.assert((typeof name === 'string'), "Name is not a string. Should return a string when called.");
};

console.assert((sayHello("Jane") === "Hello, Jane!"), "Didn't return 'Hello, Jane!'");

console.log(sayHello("Hung"));
console.log(sayHello("Jane"));
console.log(sayHello("Alex"));
console.log(sayHello("Pat"));
console.log(sayHello(1));

