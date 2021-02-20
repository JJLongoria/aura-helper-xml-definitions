const ApprovalActionType = require('../../../../src/definitions/types/approvalAction');

describe('Testing src/definitions/types/approvalAction.js', () => {
    test('Testing Definition', () => {
        let result = ApprovalActionType('test', 'test', 42);
    });
});