const DefaultShortcutType = require('../../../../src/definitions/types/defaultShortcut');
const { ArrayXMLField } = require('../../../../src/factory/xmlFactory');

describe('Testing src/definitions/types/defaultShortcut.js', () => {
    test('Testing Definition', () => {
        let result = DefaultShortcutType(ArrayXMLField, 'test', 'test', 42);
    });
});