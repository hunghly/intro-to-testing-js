// helloWorld function 
const helloWorld = function () {
    return "Hello, World!";
};
const sayHello = function(name='World') {
/*    const errMsg = "Name is not a string. Should return a string when called.";
    console.assert((typeof name === 'string'), errMsg);
    return `Hello, ${name}!`;
    if (name === true) {
        console.log(name + "this is true");
    }*/

    return (typeof name === 'boolean') ? "Hello, World!" :
        (typeof name === 'string') ? `Hello, ${name}!` :
        console.assert((typeof name === 'string'), "Name is not a string. Should return a string when called.");
};

/*
console.assert((sayHello("Jane") === "Hello, Jane!"), "Didn't return 'Hello, Jane!'");

console.log(sayHello("Hung"));
console.log(sayHello("Jane"));
console.log(sayHello("Alex"));
console.log(sayHello("Pat"));
console.log(sayHello(1));
console.log(sayHello());
console.log(sayHello(true));
console.log(sayHello(false));
console.log(sayHello(null));
console.log(sayHello(""));
console.log(sayHello(2.3));
sayHello(2.3);*/

const isFive = function(number) {
    return Number(number) === 5;
};

const isEven = function(number) {
    return (typeof number === 'boolean') ? false : ((number % 2) === 0);
};


