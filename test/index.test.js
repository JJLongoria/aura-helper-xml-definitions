const Index = require('../index');

describe('Testing index.js', () => {
    test('Testing Definition', () => {
        let getDefinitionResult = Index.getDefinition('Profile', 13);
        let getRawDefinitionResult = Index.getRawDefinition('Profile');
        let getAllDefinitionsResult = Index.getAllDefinitions(45);
        let getAllRawDefinitionsResult = Index.getAllRawDefinitions();
    });
});