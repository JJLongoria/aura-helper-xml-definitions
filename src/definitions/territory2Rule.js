const { StringXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(32)
        .setEditable()
        .setRequired(),
    booleanFilter: new StringXMLField('booleanFilter', 'Boolean Filter')
        .setMinApi(32)
        .setEditable(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(32)
        .setEditable()
        .setRequired(),
    objectType: new StringXMLField('objectType', 'Object Type')
        .setMinApi(32)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT),
    ruleItems: new ArrayXMLField('ruleItems', 'Rule Items')
        .setMinApi(32)
        .setEditable()
        .addField('field', new StringXMLField('field', 'Field')
            .setEditable()
        )
        .addField('operation', new EnumXMLField('operation', 'Operation')
            .setEditable()
            .addEnumValue('Equals', 'equals')
            .addEnumValue('Not Equal', 'notEqual')
            .addEnumValue('Less Than', 'lessThan')
            .addEnumValue('Greater Than', 'greaterThan')
            .addEnumValue('Less Or Equal', 'lessOrEqual')
            .addEnumValue('Greater Or Equal', 'greaterOrEqual')
            .addEnumValue('Contains', 'contains')
            .addEnumValue('Not Contain', 'notContain')
            .addEnumValue('Starts With', 'startsWith')
            .addEnumValue('Includes', 'includes')
            .addEnumValue('Excludes', 'excludes')
            .addEnumValue('Within', 'within')
        )
        .addField('value', new StringXMLField('value', 'Value')
            .setEditable()
        )
}