const { StringXMLField, ArrayXMLField } = require('@ah/core').Types;

module.exports = {
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(29)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(29)
        .setEditable()
        .setUnique(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(29)
        .setEditable(),
}