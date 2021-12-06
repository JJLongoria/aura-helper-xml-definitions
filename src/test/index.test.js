const
const { DataTypes } = require('@aurahelper/core').Values;

describe('Testing index.js', () => {
    test('Testing Definition', () => {
        let getDefinitionResult1 = Index.getDefinition('Profile', 50);
        let getDefinitionResult2 = Index.getDefinition('Profiles', 13);
        let getRawDefinitionResult1 = Index.getRawDefinition('Profile');
        let getRawDefinitionResult2 = Index.getRawDefinition('Profiles');
        let getAllDefinitionsResult = Index.getAllDefinitions(45);
        let getAllRawDefinitionsResult = Index.getAllRawDefinitions();
        let metadataTypes = Index.getMetadataTypes(getRawDefinitionResult1);
        console.log(metadataTypes);
        for (const definitionType of Object.keys(getAllRawDefinitionsResult)) {
            const XMLDefinition = getAllRawDefinitionsResult[definitionType];
            for (const fieldKey of Object.keys(XMLDefinition)) {
                try {
                    validateDefinition(XMLDefinition[fieldKey], fieldKey, fieldKey);
                } catch (error) {
                    throw error.message += ' ' + definitionType;
                }
            }
        }
    });
});

// TODO
function validateDefinition(definition, parentKey, fieldKey) {
    if (!definition.key)
        throw new Error('Not key found on definition with key => ' + parentKey + '.');
    if (definition.key !== fieldKey)
        throw new Error('The fieldKey (' + fieldKey + ') and the defitinion.key (' + definition.key + ') must be the same. => ' + parentKey + '.');
    if (!definition.label)
        throw new Error('Not label found on definition with key => ' + parentKey + '.');
    if (definition.datatype === DataTypes.OBJECT || definition.datatype === DataTypes.ARRAY) {
        if (definition.fields) {
            if (!definition.fieldKey && !definition.definitionRef)
                throw new Error('Not fieldKey found on definition with key => ' + parentKey + '.');
            else if (definition.fieldKey && !Array.isArray(definition.fieldKey) && !definition.definitionRef && !definition.fields[definition.fieldKey])
                throw new Error('The fieldKey ' + definition.fieldKey + ' not exists as field on definition with key => ' + parentKey + '.');
            for (const key of Object.keys(definition.fields)) {
                validateDefinition(definition.fields[key], parentKey + '>' + key, key);
            }
        }
    } else {

    }
}