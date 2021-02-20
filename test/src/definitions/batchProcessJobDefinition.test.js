describe('Testing src/definitions/batchProcessJobDefinition.js', () => {
    test('Testing Definition', () => {
        const BatchProcessJobDefinition = require('../../../src/definitions/batchProcessJobDefinition');
        BatchProcessJobDefinition.masterLabel.validate('Hola');
        BatchProcessJobDefinition.description.validate('Hola');
    });
});