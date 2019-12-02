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

