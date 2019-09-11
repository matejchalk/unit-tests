const {hello} = require("./index");



describe('test hello', () => {
    test('should return world', () => {
        const result = hello();
        expect(result).toBe('world')
    });
})
