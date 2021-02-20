const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('../factory/xmlFactory');

module.exports = {
    default: new BooleanXMLField('default', 'Default')
        .setMinApi(29)
        .setEditable()
        .setRequired(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(29)
        .setEditable(),
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(29)
        .setEditable()
        .setRequired(),
    label: new ArrayXMLField('label', 'Label')
        .setMinApi(29)
        .setEditable()
        .setRequired()
}