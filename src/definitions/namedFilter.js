const { StringXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;

module.exports = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(17)
        .setEditable()
        .setRequired(),
    booleanFilter: new StringXMLField('booleanFilter', 'Boolean Filter')
        .setMinApi(17)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(17)
        .setEditable(),
    errorMessage: new StringXMLField('errorMessage', 'Error Message')
        .setMinApi(17)
        .setEditable(),
    field: new StringXMLField('field', 'Field')
        .setMinApi(17)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    filterItems: new ArrayXMLField('filterItems', 'filter Items')
        .setMinApi(17)
        .setEditable()
        .setFieldKey('field')
        .addField('field', new StringXMLField('field', 'field')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('operation', new EnumXMLField('operation', 'Operation')
            .setEditable()
            .setRequired()
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
        )
        .addField('value', new StringXMLField('value', 'Value')
            .setEditable()
        ),
    infoMessage: new StringXMLField('infoMessage', 'Info Message')
        .setMinApi(17)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(17)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    isOptional: new BooleanXMLField('isOptional', 'Is Optional')
        .setMinApi(17)
        .setEditable()
        .setRequired(),
    name: new StringXMLField('name', 'name')
        .setMinApi(17)
        .setEditable()
        .setRequired(),
    sourceObject: new StringXMLField('sourceObject', 'Source Object')
        .setMinApi(17)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT),
}