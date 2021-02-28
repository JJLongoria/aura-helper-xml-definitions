const { StringXMLField } = require('@ah/core').Types;

module.exports = {
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(14)
        .setEditable()
        .setRequired()
        .setUnique(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .setMaxLength(40),
}