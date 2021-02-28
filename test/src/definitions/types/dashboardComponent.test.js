const DashboardComponentType = require('../../../../src/definitions/types/dashboardComponent');
const { ArrayXMLField } = require('@ah/core').Types;

describe('Testing src/definitions/types/dashboardComponent.js', () => {
    test('Testing Definition', () => {
        let result = DashboardComponentType(ArrayXMLField, 'test', 'test', 42);
    });
});