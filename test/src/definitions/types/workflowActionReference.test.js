const WorkflowActionReference = require('../../../../src/definitions/types/workflowActionReference');

describe('Testing src/definitions/types/workflowActionReference.js', () => {
    test('Testing Definition', () => {
        let result = WorkflowActionReference('test', 'Test', 42);
    });
});