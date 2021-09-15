const { ObjectXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;
const { DataValues } = require('@ah/core').Values;

module.exports = {
    groups: new ObjectXMLField('groups', 'Groups')
        .setMinApi(29)
        .setEditable()
        .setFieldKey('languages')
        .setSortOrder(undefined)
        .addField('languages', new EnumXMLField('languages', 'Languages')
            .setEditable()
            .setRequired()
            .setEnumValues(DataValues.SF_LANGUAGES)
        )
        .addField('terms', new ArrayXMLField('terms', 'Terms')
            .setEditable()
            .setRequired()
        ),
    isProtected: new BooleanXMLField('isProtected', 'Is Protected')
        .setMinApi(29)
        .setEditable(),
    label: new BooleanXMLField('label', 'Label')
        .setMinApi(29)
        .setEditable()
        .setRequired()
}