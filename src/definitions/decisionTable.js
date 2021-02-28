const { StringXMLField, ObjectXMLField, EnumXMLField, DateTimeXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    decisionTableParameters: new ObjectXMLField('decisionTableParameters', 'Decision Table Parameters')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setFieldKey('fieldName')
        .addField('fieldName', new StringXMLField('fieldName', 'Field Name')
            .setEditable()
            .setRequired()
        )
        .addField('operator', new EnumXMLField('operator', 'Operator')
            .setEditable()
            .setRequired()
            .addEnumValue('Equals', 'Equals')
            .addEnumValue('Not Equals', 'NotEquals')
            .addEnumValue('Less Than', 'LessThan')
            .addEnumValue('Less Or Equal', 'LessOrEqual')
            .addEnumValue('Greater Than', 'GreaterThan')
            .addEnumValue('Greater Or Equal', 'GreaterOrEqual')
            .addEnumValue('Matches', 'Matches')
            .addEnumValue('Exists In', 'ExistsIn')
            .addEnumValue('Does Not Exist In', 'DoesNotExistIn')
        )
        .addField('usage', new EnumXMLField('usage', 'Usage')
            .setEditable()
            .setRequired()
            .addEnumValue('Input', 'INPUT')
            .addEnumValue('Output', 'OUTPUT')
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(51)
        .setEditable(),
    lastSyncDate: new DateTimeXMLField('lastSyncDate', 'LastSyncDate')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setFormat('yyyy-mm-dd'),
    sourceObject: new StringXMLField('sourceObject', 'Source Object')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT),
    status: new EnumXMLField('status', 'Status')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addEnumValue('Draft', 'Draft')
        .addEnumValue('Inactive', 'Inactive')
        .addEnumValue('Active', 'Active')
        .addEnumValue('Activation In Progress', 'ActivationInProgress')


}