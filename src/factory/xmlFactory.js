const Utils = require('../utils/utils');
const DataTypes = require('../values/datatypes');
const DataValues = require('../values/dataValues');

class XMLField {

    constructor(key, label, datatype) {
        this.key = key;
        this.label = label;
        this.datatype = datatype;
        this.minApi = 1;
        this.maxApi = -1;
        this.editable = false;
        this.merge = false;
        this.unique = false;
        this.required = false;
        this.reserved = false;
    }

    setDefinitionReference(definitionRef) {
        this.definitionRef = definitionRef;
        return this;
    }

    setSeparator(separator) {
        this.separator = separator;
        return this;
    }

    setDefaultValue(defaultValue) {
        this.default = defaultValue;
        return this;
    }

    setReserved(value) {
        this.reserved = (value !== undefined) ? value : true;
        return this;
    }

    setEditable(value) {
        this.editable = (value !== undefined) ? value : true;
        return this;
    }

    setRequired(value) {
        this.required = (value !== undefined) ? value : true;
        return this;
    }

    setMergeable(value) {
        this.merge = (value !== undefined) ? value : true;
        return this;
    }

    setUnique(value) {
        this.unique = (value !== undefined) ? value : true;
        return this;
    }

    setMinApi(minApi) {
        this.minApi = (minApi != undefined) ? minApi : 1;
        return this;
    }

    setMaxApi(maxApi) {
        this.maxApi = (maxApi != undefined) ? maxApi : -1;
        return this;
    }

    setMetadataType(metadataType) {
        this.metadataType = metadataType;
        return this;
    }

    linkFieldToSObject(sObject, field) {
        if (this.linkToSObjects === undefined)
            this.linkToSObjects = [];
        this.linkToSObjects.push({
            sObject: sObject,
            field: (field === undefined) ? 'Id' : field
        })
        return this;
    }

    setValidation(validation) {
        this.validation = validation;
        return this;
    }

    addDependencyField(fieldDependency) {
        if (this.fieldDependencies === undefined)
            this.fieldDependencies = [];
        if (fieldDependency.minApi < this.minApi)
            fieldDependency.minApi = this.minApi;
        if (this.maxApi != -1 && !fieldDependency.maxApi)
            fieldDependency.maxApi = this.maxApi;
        this.fieldDependencies.push(fieldDependency);
        return this;
    }

    addControlledField(controlledField) {
        if (this.controlledFields === undefined)
            this.controlledFields = [];
        if (controlledField.minApi < this.minApi)
            controlledField.minApi = this.minApi;
        if (this.maxApi != -1 && !controlledField.maxApi)
            controlledField.maxApi = this.maxApi;
        this.controlledFields.push(controlledField);
        return this;
    }

    validate(value) {
        return this.validation(value);
    }

}

class NumberXMLField extends XMLField {
    constructor(key, label, datatype) {
        super(key, label, datatype);
    }

    setMinValue(minValue) {
        this.minValue = minValue;
        return this;
    }

    setMaxValue(maxValue) {
        this.maxValue = maxValue;
        return this;
    }

    setAllowedValues(allowedValues) {
        this.allowedValues = Utils.forceArray(allowedValues);
        return this;
    }
}

class ObjectXMLField extends XMLField {
    constructor(key, label) {
        super(key, label, DataTypes.OBJECT);
    }

    setFieldKey(fieldKey) {
        this.fieldKey = fieldKey;
        if (this.sortOrder == undefined)
            this.sortOrder = Utils.forceArray(this.fieldKey);
        return this;
    }

    setSortOrder(sortOrder) {
        this.sortOrder = Utils.forceArray(sortOrder);
        return this;
    }

    setFields(fields) {
        this.fields = fields;
        return this;
    }

    addField(fieldName, xmlField) {
        if (this.fields === undefined)
            this.fields = {};
        if (xmlField.minApi < this.minApi)
            xmlField.minApi = this.minApi;
        if (this.maxApi != -1 && xmlField.maxApi == -1)
            xmlField.maxApi = this.maxApi;
        this.fields[fieldName] = xmlField;
        return this;
    }
}

class ArrayXMLField extends ObjectXMLField {
    constructor(key, label) {
        super(key, label);
        this.datatype = DataTypes.ARRAY;
    }

    setMaxItems(maxItems) {
        this.maxItems = maxItems;
        return this;
    }

    addAllowedValue(label, value, minApi, maxApi) {
        if (this.allowedValues === undefined)
            this.allowedValues = [];
        this.allowedValues.push({
            label: label,
            value: value,
            minApi: (minApi !== undefined) ? minApi : this.minApi,
            maxApi: (maxApi !== undefined) ? maxApi : this.maxApi
        });
        return this;
    }
}

class EnumXMLField extends XMLField {

    constructor(key, label) {
        super(key, label, DataTypes.ENUM);
        this.default = DataValues.DEFAULT_TEXT;
    }

    setMultiChoice(value) {
        this.multichoice = (value !== undefined) ? value : true;
        return this;
    }

    setEnumValues(values, minApi, maxApi) {
        this.values = Utils.forceArray(values);
        if (this.values != undefined) {
            for (let value of this.values) {
                value.minApi = (minApi !== undefined) ? minApi : this.minApi;
                value.maxApi = (maxApi !== undefined) ? maxApi : this.maxApi;
            }
        }
        return this;
    }

    addEnumValue(label, value, minApi, maxApi) {
        if (this.values === undefined)
            this.values = [];
        this.values.push({
            label: label,
            value: value,
            minApi: (minApi !== undefined) ? minApi : this.minApi,
            maxApi: (maxApi !== undefined) ? maxApi : this.maxApi
        });
        return this;
    }

    getValue(label) {
        for (let enumVal of this.values) {
            if (enumVal.label === label)
                return enumVal.value;
        }
        return undefined;
    }

    getLabel(value) {
        for (let enumVal of this.values) {
            if (enumVal.value === value)
                return enumVal.label;
        }
        return undefined;
    }

}

class StringXMLField extends XMLField {
    constructor(key, label) {
        super(key, label, DataTypes.STRING);
        this.default = DataValues.DEFAULT_TEXT;
        this.minLength = 0;
    }

    setBase64(value) {
        this.base64 = (value !== undefined) ? value : true;
        return this;
    }

    setCSV(value) {
        this.csv = (value !== undefined) ? value : true;
        return this;
    }

    setJSON(value) {
        this.json = (value !== undefined) ? value : true;
        return this;
    }

    addMatchPattern(matchPattern) {
        if (this.matchPatterns === undefined)
            this.matchPatterns = [];
        this.matchPatterns.push(matchPattern);
        return this;
    }

    setMinLength(minLength) {
        this.minLength = minLength;
        return this;
    }

    setMaxLength(maxLength) {
        this.maxLength = maxLength;
        return this;
    }
}

class BooleanXMLField extends XMLField {
    constructor(key, label) {
        super(key, label, DataTypes.BOOLEAN);
        this.default = false;
    }
}

class IntegerXMLField extends NumberXMLField {
    constructor(key, label) {
        super(key, label, DataTypes.INTEGER);
        this.default = 0;
    }
}

class DoubleXMLField extends NumberXMLField {
    constructor(key, label) {
        super(key, label, DataTypes.DOUBLE);
        this.default = 0.0;
    }
}

class DateTimeXMLField extends XMLField {
    constructor(key, label) {
        super(key, label, DataTypes.DATE_TIME);
    }

    setFormat(format) {
        this.format = format;
        return this;
    }
}

class TimeXMLField extends DateTimeXMLField {
    constructor(key, label) {
        super(key, label);
        this.datatype = DataTypes.TIME;
    }

    setFormat(format) {
        this.format = format;
        return this;
    }
}

class XMLDataControlledField {

    constructor(field, valueToCompare, valueToSet) {
        this.field = field;
        this.valueToCompare = valueToCompare;
        this.valueToSet = valueToSet;
        this.minApi = 1;
        this.maxApi = -1;
    }

    setMinApi(minApi) {
        this.minApi = (minApi !== undefined) ? minApi : this.minApi;
        return this;
    }

    setMaxApi(maxApi) {
        this.maxApi = (maxApi !== undefined) ? maxApi : this.maxApi;
        return this;
    }
}

class XMLDependencyField {

    constructor(field, valueToCompare, allowedValues, forbidenValues) {
        this.field = field;
        this.valueToCompare = Utils.forceArray(valueToCompare);
        this.allowedValues = Utils.forceArray(allowedValues);
        this.forbidenValues = Utils.forceArray(forbidenValues);
        this.minApi = 1;
        this.maxApi = -1;
    }

    setMinApi(minApi) {
        this.minApi = (minApi !== undefined) ? minApi : this.minApi;
        return this;
    }

    setMaxApi(maxApi) {
        this.maxApi = (maxApi !== undefined) ? maxApi : this.maxApi;
        return this;
    }
}

module.exports = {
    ObjectXMLField: ObjectXMLField,
    ArrayXMLField: ArrayXMLField,
    EnumXMLField: EnumXMLField,
    StringXMLField: StringXMLField,
    BooleanXMLField: BooleanXMLField,
    IntegerXMLField: IntegerXMLField,
    DateTimeXMLField: DateTimeXMLField,
    TimeXMLField: TimeXMLField,
    XMLDataControlledField: XMLDataControlledField,
    XMLDependencyField: XMLDependencyField,
    DoubleXMLField: DoubleXMLField
};
