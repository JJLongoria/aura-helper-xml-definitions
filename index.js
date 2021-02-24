const Datatypes = require('./src/values/datatypes');
const MetadataTypes = require('./src/values/metadataTypes');
const XMLFactory = require('./src/factory/xmlFactory');

function getDefinition(type, apiVersion) {
    try {
        const typeDefinition = require('./src/definitions/' + transformTypeName(type));
        if (!typeDefinition)
            return undefined;
        return processType(typeDefinition, apiVersion);
    } catch (error) {
        return undefined;
    }
}

function getRawDefinition(type) {
    try {
        return require('./src/definitions/' + transformTypeName(type));
    } catch (error) {
        return undefined;
    }
}

function getAllDefinitions(apiVersion) {
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

function getAllRawDefinitions() {
    return require('./src/definitions');
}

function resolveDefinitionReference(typeDefinition, subFieldDefinition) {
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

function processType(typeDefinition, apiVersion) {
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
        if (entityData.fieldDependencies) {
            let fieldDependencies = [];
            for (let fieldDependency of entityData.fieldDependencies) {
                let entityProcessed = processEntity(fieldDependency, apiVersion);
                if (entityProcessed)
                    fieldDependencies.push(entityProcessed);
            }
            entityData.fieldDependencies = fieldDependencies;
        }
        if (entityData.controlledFields) {
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
        if (entityData.allowedValues) {
            if (entityData.datatype && entityData.datatype === Datatypes.ARRAY) {
                let allowedValues = [];
                for (let allowedValue of entityData.allowedValues) {
                    let entityProcessed = processEntity(allowedValue);
                    if (entityProcessed)
                        allowedValues.push(entityProcessed, apiVersion);
                }
                entityData.allowedValues = allowedValues;
            }
        }
        if (entityData.values) {
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

module.exports = {
    getDefinition: getDefinition,
    getRawDefinition: getRawDefinition,
    getAllDefinitions: getAllDefinitions,
    getAllRawDefinitions: getAllRawDefinitions,
    resolveDefinitionReference: resolveDefinitionReference,
    XMLFactory: XMLFactory
}