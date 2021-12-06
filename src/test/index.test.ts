import { Datatypes } from '@aurahelper/core';
import { XMLDefinitions } from '../index';

describe('Testing index.js', () => {
    test('Testing Definition', () => {
        let getDefinitionResult1 = XMLDefinitions.getDefinition('Profile', 50);
        let getDefinitionResult2 = XMLDefinitions.getDefinition('Profiles', 13);
        let getRawDefinitionResult1 = XMLDefinitions.getRawDefinition('Profile');
        let getRawDefinitionResult2 = XMLDefinitions.getRawDefinition('Profiles');
        let getAllDefinitionsResult = XMLDefinitions.getAllDefinitions(45);
        let getAllRawDefinitionsResult = XMLDefinitions.getAllRawDefinitions();
        let metadataTypes = XMLDefinitions.getMetadataTypes(getRawDefinitionResult1);
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
        let getRawDefinitionResult3 = XMLDefinitions.getRawDefinition('BotVersion');
        const reference = XMLDefinitions.resolveDefinitionReference(getRawDefinitionResult3, getRawDefinitionResult3.botDialogs.fields.botSteps.fields.botSteps);
        XMLDefinitions.resolveDefinitionReference(undefined, getRawDefinitionResult3.botDialogs.fields.botSteps.fields.botSteps);
        expect(reference.label).toEqual('Bot Steps');
        expect(Object.keys(reference.fields).length).toBeGreaterThan(0);
        let getDefinitionResult3 = XMLDefinitions.getDefinition('Index', 50);
        expect(Object.keys(getDefinitionResult3).length).toBeGreaterThan(0);
    });
});

// TODO
function validateDefinition(definition: any, parentKey: string, fieldKey: string) {
    if (!definition.key)
        throw new Error('Not key found on definition with key => ' + parentKey + '.');
    if (definition.key !== fieldKey)
        throw new Error('The fieldKey (' + fieldKey + ') and the defitinion.key (' + definition.key + ') must be the same. => ' + parentKey + '.');
    if (!definition.label)
        throw new Error('Not label found on definition with key => ' + parentKey + '.');
    if (definition.datatype === Datatypes.OBJECT || definition.datatype === Datatypes.ARRAY) {
        if (definition.fields) {
            if (!definition.fieldKey && !definition.definitionRef)
                throw new Error('Not fieldKey found on definition with key => ' + parentKey + '.');
            else if (definition.fieldKey && !Array.isArray(definition.fieldKey) && !definition.definitionRef && Object.keys(definition.fields).length > 0 && !definition.fields[definition.fieldKey])
                throw new Error('The fieldKey ' + definition.fieldKey + ' not exists as field on definition with key => ' + parentKey + '.');
            for (const key of Object.keys(definition.fields)) {
                validateDefinition(definition.fields[key], parentKey + '>' + key, key);
            }
        }
    } else {

    }
}