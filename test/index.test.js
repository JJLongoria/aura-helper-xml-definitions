const Index = require('../index');

describe('Testing index.js', () => {
    test('Testing Definition', () => {
        let getDefinitionResult1 = Index.getDefinition('Profile', 13);
        let getDefinitionResult2 = Index.getDefinition('Profiles', 13);
        let getRawDefinitionResult1 = Index.getRawDefinition('Profile');
        let getRawDefinitionResult2 = Index.getRawDefinition('Profiles');
        let getAllDefinitionsResult = Index.getAllDefinitions(45);
        let getAllRawDefinitionsResult = Index.getAllRawDefinitions();
    });
});