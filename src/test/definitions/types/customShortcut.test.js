const CustomShortcutType = require('../../../definitions/types/customShortcut');
const { ArrayXMLField } = require('@aurahelper/core').Types;

describe('Testing src/definitions/types/customShortcut.js', () => {
    test('Testing Definition', () => {
        let result = CustomShortcutType(ArrayXMLField, 'test', 'test', 42);
    });
});