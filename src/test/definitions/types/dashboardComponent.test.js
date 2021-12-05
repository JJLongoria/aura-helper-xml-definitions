const DashboardComponentType = require('../../../definitions/types/dashboardComponent');
const { ArrayXMLField } = require('@aurahelper/core').Types;

describe('Testing src/definitions/types/dashboardComponent.js', () => {
    test('Testing Definition', () => {
        let result = DashboardComponentType(ArrayXMLField, 'test', 'test', 42);
    });
});