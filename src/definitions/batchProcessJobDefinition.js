const { StringXMLField, ArrayXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField, XMLDependencyField } = require('../factory/xmlFactory');
const MetadataTypes = require('../values/metadataTypes');
const DataValues = require('../values/dataValues');

module.exports = {
    batchSize: new IntegerXMLField('batchSize', 'Batch Size')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    dataSource: new ArrayXMLField('dataSource', 'Data Source')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setFieldKey('sourceObject')
        .addField('condition', new StringXMLField('condition', 'Condition')
            .setEditable()
            .setRequired()
        )
        .addField('criteria', new StringXMLField('criteria', 'Criteria')
            .setEditable()
        )
        .addField('filters', new ArrayXMLField('filters', 'Filters')
            .setEditable()
            .setFieldKey('fieldName')
            .addField('dynamicValueType', new StringXMLField('dynamicValueType', 'Dynamic Value Type')
                .setEditable()
            )
            .addField('fieldName', new StringXMLField('fieldName', 'Field Name')
                .setEditable()
                .setRequired()
            )
            .addField('fieldValue', new StringXMLField('fieldValue', 'Field Value')
                .setEditable()
                .setRequired()
                .addDependencyField(new XMLDependencyField('isDynamicFilter', true, DataValues.NULL))
            )
            .addField('isDynamicValue', new BooleanXMLField('isDynamicValue', 'Is Dynamic Value')
                .setEditable()
                .setRequired()
            )
            .addField('operator', new EnumXMLField('operator', 'Operator')
                .setEditable()
                .setRequired()
                .addEnumValue('Equals', 'equals')
                .addEnumValue('Excludes', 'excludes')
                .addEnumValue('Greater Than', 'greaterThan')
                .addEnumValue('Greater Than Or Equal To', 'greaterThanOrEqualTo')
                .addEnumValue('In', 'in')
                .addEnumValue('Includes', 'includes')
                .addEnumValue('Less Than', 'lessThan')
                .addEnumValue('Less Than Or Equal To', 'LessThanOrEqualTo')
                .addEnumValue('Greater Or Equal', 'GreaterOrEqual')
                .addEnumValue('Like', 'like')
                .addEnumValue('Not Equals', 'notEquals')
                .addEnumValue('Not In', 'notIn')
            )
            .addField('sequenceNo', new IntegerXMLField('sequenceNo', 'Sequence Number')
                .setEditable()
                .setRequired()
            )
        )
        .addField('sourceObject', new StringXMLField('sourceObject', 'Source Object')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(51)
        .setEditable()
        .setValidation(function (value) {
            if (value && value.length > 255) {
                return "Description to long. Remove at least " + (value.length - 255) + " characters";
            }
            return undefined;
        }),
    flowApiName: new StringXMLField('flowApiName', 'Flow Api Name')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.FLOWS),
    flowInputVariable: new StringXMLField('flowInputVariable', 'Flow Input Variable')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setValidation(function (value) {
            if (value && value.length > 80) {
                return "Description to long. Remove at least " + (value.length - 80) + " characters";
            }
            return undefined;
        }),
    processGroup: new StringXMLField('processGroup', 'Process Group')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    retryCount: new IntegerXMLField('retryCount', 'Retry Count')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    retryInterval: new IntegerXMLField('retryInterval', 'Retry Interval')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    status: new EnumXMLField('status', 'Status')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addEnumValue('Active', 'Active')
        .addEnumValue('Inactive', 'Inactive'),
}