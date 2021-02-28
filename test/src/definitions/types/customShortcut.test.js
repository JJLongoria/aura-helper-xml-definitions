const CustomShortcutType = require('../../../../src/definitions/types/customShortcut');
const { ArrayXMLField } = require('@ah/core').Types;

describe('Testing src/definitions/types/customShortcut.js', () => {
    test('Testing Definition', () => {
        let result = CustomShortcutType(ArrayXMLField, 'test', 'test', 42);
    });
});