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
    it('should return the string "Hello, name!" when executed 7', function(){
       expect(sayHello(name)).toBe(`Hello, ${name}!`);
    });
    it("should never return 'undefined' when called 8", function(){
        expect(sayHello(name)).not.toBe(undefined);
    });
});

