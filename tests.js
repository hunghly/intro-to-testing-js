// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function 1', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called 2', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed 3', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called 4", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe ("sayHello", function() {
    it('should be a defined function 5', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called 6', function(){
        expect(typeof sayHello(name)).toBe("string");
    });
    it('should return the string "Hello, {name}!" when executed 7', function(){
       expect(sayHello(name)).toBe(`Hello, ${name}!`);
    });
    it("should never return 'undefined' when called 8", function(){
        expect(sayHello(name)).not.toBe(undefined);
    });
    it('should return the string "Hello, Alex!" when Alex is passed in 9', function(){
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when Pat is passed in 10', function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when nothing is passed in 11', function(){
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when true is passed in 12', function(){
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when false is passed in 12', function(){
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return undefined when "null" is passed in 13', function(){
        expect(sayHello(null)).toBe(undefined);
    });
    it('should return undefined when a number type is passed in 14', function(){
        expect(sayHello(Number)).toBe(undefined);
    });
});
describe("isFive", function() {
    it('should be a type of function if isFive exists', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should always return a boolean', function () {
       expect(typeof isFive()).toBe('boolean');
    });
    it('should return true if 5 is passed', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return true if 5 as a string is passed', function () {
        expect(isFive("5")).toBe(true);
    });
});
describe('isEven', function () {
    it('should be a type of function if isEven exists', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should always return a boolean', function () {
        expect(typeof isEven()).toBe('boolean');
    });
    it('should return true when 2 is passed in', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when -4 is passed in', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when 3 is passed in', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when "banana" is passed in', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when 8 is passed in', function () {
        expect(isEven(8)).toBe(true);
    });
    it('should return false when Infinity is passed in', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when true or false is passed in', function () {
        expect(isEven(true)).toBe(false);
        expect(isEven(false)).toBe(false);
    });
    it('should return false when no argument is passed in', function () {
        expect(isEven()).toBe(false);
    });
});
describe('isVowel', function () {
    it('should be a type of function if isVowel exists', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should always return a boolean', function () {
        expect(typeof isVowel()).toBe('boolean');
    });
    it('should return true if "a" is passed', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true if "A" is passed', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false if "y" is passed', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false if "4" is passed', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when true or false is passed in', function () {
        expect(isVowel(true)).toBe(false);
        expect(isVowel(false)).toBe(false);
    });
    it('should return false if "banana" is passed', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false if no argument is passed', function () {
        expect(isVowel()).toBe(false);
    });
});
describe('add', function () {
    it('should be a type of function if add exists', function () {
        expect(typeof add).toBe('function');
    });
    it('should return 5 if 2 and 3 are passed as arguments', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should return -12 if -3 and -9 are passed as arguments', function () {
        expect(add(-3,-9)).toBe(-12);
    });
    it('should return 11 if "5" and 6 are passed as arguments', function () {
        expect(add("5",6)).toBe(11);
    });
    it('should return 6 if "-4" and "10" are passed as arguments', function () {
        expect(add("-4","10")).toBe(6);
    });
    it('should return NaN if "banana" and "split" are passed as arguments', function () {
        expect(add("banana","split")).toBe(Number.NaN);
    });
});