const CriteriaItemType = require('../../../definitions/types/criteriaItem');

describe('Testing src/definitions/types/criteriaItem.js', () => {
    test('Testing Definition', () => {
        let result = CriteriaItemType('testCriteriaItemType', 'Test Criteria Item Type', 42);
    });
});