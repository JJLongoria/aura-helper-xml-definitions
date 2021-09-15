const { MetadataTypes, DataTypes } = require('@ah/core').Values;
const { ProjectUtils } = require('@ah/core').CoreUtils;

/**
 * Class with static methods to get the XML Definitions for one Metadata Type
 * or get all XML Definitions for all types and specific Salesforce API Version. 
 * Also you can get a XML Raw definitions and Resolve Recursive definitions on some files.
 *
 * The difference between the XML definition and the raw XML definition is that the raw definition is not processed, it returns the entire XML information. 
 * The XML definitions return the XML definition processed for a specific API version, omitting everything that does not correspond to the indicated version
 */
class XMLDefinitions {

    /**
     * Method to get the Metadata Type's XML definition for an API Version.  
     * @param {String} type Metadata Type API Name to get the XML definition
     * @param {String | Number} apiVersion API Version number to get the version definition
     * @returns Return the XML definition for the selected type and API version. If the type exists, but is not available in the selected API, return an empty object. If type not exists, return undefined.
     */
    static getDefinition(type, apiVersion) {
        try {
            const typeDefinition = require('./src/definitions/' + transformTypeName(type));
            return processType(typeDefinition, apiVersion);
        } catch (error) {
            return undefined;
        }
    }
    
    /**
     * Method to get the Metadata Type's XML RAW definition  
     * @param {String} type Metadata Type API Name to get the XML RAW definition
     * @returns Return the XML raw definition for the selected type. If type not exists, return undefined.
     */
    static getRawDefinition(type) {
        try {
            return require('./src/definitions/' + transformTypeName(type));
        } catch (error) {
            return undefined;
        }
    }
    
    /**
     * Method to get all XML Definitions for all Metadata Types for an specific API Version
     * @param {String | Number} apiVersion API Version number to get the XML Definitions
     * @returns Return an Object with all XML definitions for the selected API version. The object has the Type as key and the XML definition as value. If not exists any definition for the selected API return an empty object
     */
    static getAllDefinitions(apiVersion) {
        const definitions = require('./src/definitions');
        const result = {};
        for (let key of Object.keys(definitions)) {
            let typeProcessed = processType(definitions[key], apiVersion)
            if (typeProcessed != null && Object.keys(typeProcessed).length > 0) {
                result[key] = typeProcessed;
            }
        }
        return result;
    }
    
    /**
     * Method to get all XML RAW Definitions for all Metadata Types
     * @returns Return an Object with all XML raw definitions. The object has the Type as key and the XML definition as value
     */
    static getAllRawDefinitions() {
        return require('./src/definitions');
    }
    
    /**
     * Method to resolve the recursive reference from some XML Definition files
     * @param {Object} typeDefinition XML file Definition
     * @param {Object} subFieldDefinition XML Field definition to resolve
     * @returns Returns the XML Definition to the selected XML field
     */
    static resolveDefinitionReference(typeDefinition, subFieldDefinition) {
        if (typeDefinition) {
            const references = subFieldDefinition.definitionRef.split('>');
            let parentDefinition;
            for (const ref of references) {
                if (ref === 'this') {
                    parentDefinition = typeDefinition;
                } else if (parentDefinition && parentDefinition.fields && parentDefinition.fields[ref]) {
                    parentDefinition = parentDefinition.fields[ref];
                } else if (parentDefinition && parentDefinition[ref]) {
                    parentDefinition = parentDefinition[ref];
                }
            }
            return parentDefinition;
        }
        return subFieldDefinition;
    }

}
module.exports = XMLDefinitions;

function processType(typeDefinition, apiVersion) {
    apiVersion = ProjectUtils.getApiAsNumber(apiVersion);
    const result = {};
    for (let key of Object.keys(typeDefinition)) {
        let fieldData = processEntity(typeDefinition[key], apiVersion);
        if (fieldData)
            result[key] = fieldData;
    }
    return result;
}

function processEntity(entityData, apiVersion) {
    let result;
    if (!isReserved(entityData) && isApiAvailable(entityData, apiVersion)) {
        result = entityData;
        if (entityData.fieldDependencies && entityData.fieldDependencies.length > 0) {
            let fieldDependencies = [];
            for (let fieldDependency of entityData.fieldDependencies) {
                let entityProcessed = processEntity(fieldDependency, apiVersion);
                if (entityProcessed)
                    fieldDependencies.push(entityProcessed);
            }
            entityData.fieldDependencies = fieldDependencies;
        }
        if (entityData.controlledFields && entityData.controlledFields.length > 0) {
            let controlledFields = [];
            for (let controlledField of entityData.controlledFields) {
                let entityProcessed = processEntity(controlledField, apiVersion);
                if (entityProcessed)
                    controlledFields.push(entityProcessed);
            }
            entityData.controlledFields = controlledFields;
        }
        if (entityData.fields) {
            for (let key of Object.keys(entityData.fields)) {
                let entityProcessed = processEntity(entityData.fields[key], apiVersion);
                if (entityProcessed)
                    entityData.fields[key] = entityProcessed;
            }
        }
        if (entityData.allowedValues && entityData.allowedValues.length > 0) {
            if (entityData.datatype && entityData.datatype === DataTypes.ARRAY) {
                let allowedValues = [];
                for (let allowedValue of entityData.allowedValues) {
                    let entityProcessed = processEntity(allowedValue);
                    if (entityProcessed)
                        allowedValues.push(entityProcessed, apiVersion);
                }
                entityData.allowedValues = allowedValues;
            }
        }
        if (entityData.values && entityData.values.length > 0) {
            let values = [];
            for (let value of entityData.values) {
                let entityProcessed = processEntity(value, apiVersion);
                if (entityProcessed)
                    values.push(entityProcessed);
            }
            entityData.values = values;
        }
    }
    return result;
}

function isReserved(entityData) {
    return entityData.reserved !== undefined && entityData.reserved;
}

function isApiAvailable(entityData, apiVersion) {
    return entityData.minApi <= apiVersion && (entityData.maxApi == -1 || entityData.maxApi >= apiVersion);
}

function transformTypeName(type) {
    if (type === MetadataTypes.INDEX)
        type = type + 'Xml';
    let typeFirstChar = type.substring(0, 1);
    let typeRest = type.substring(1);
    return typeFirstChar.toLowerCase() + typeRest;
}