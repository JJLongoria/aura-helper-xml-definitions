const Index = require('../index');

describe('Testing index.js', () => {
    test('Testing Definition', () => {
        //let getDefinitionResult = Index.getDefinition('Profile', 13);
        let getDefinitionResult3 = Index.getDefinition('QuickAction', 28);
        let getDefinitionResult4 = Index.getDefinition('QuickAction', 51);
        console.log(JSON.stringify(getDefinitionResult3, null, 2));
        console.log(JSON.stringify(getDefinitionResult4, null, 2));
        /*let getRawDefinitionResult = Index.getRawDefinition('Profile');
        let getAllDefinitionsResult = Index.getAllDefinitions(45);
        let getAllRawDefinitionsResult = Index.getAllRawDefinitions();*/
    });
});