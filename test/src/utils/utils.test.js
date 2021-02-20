const Utils = require("../../../src/utils/utils");

describe('Testing src/utils/utils.js', () => {
    describe('Testing forceArray method', () => {
        test('Testing with not array value', () => {
            let result = Utils.forceArray('nonArrayValue');
            let expected = ['nonArrayValue'];
            expect(result).toEqual(expected);
        });
        test('Testing with array value', () => {
            let result = Utils.forceArray(['arrayValue']);
            let expected = ['arrayValue'];
            expect(result).toEqual(expected);
        });
    });
});