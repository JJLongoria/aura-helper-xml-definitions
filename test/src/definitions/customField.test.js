describe('Testing src/definitions/customField.js', () => {
    test('Testing Definition', () => {
        const CustomField = require('../../../src/definitions/customField');
        CustomField.relationshipOrder.validate(1);
    });
});