// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function1', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called2', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed3', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined4' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});


