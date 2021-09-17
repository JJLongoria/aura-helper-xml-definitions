const { StringXMLField, BooleanXMLField } = require('@aurahelper/core').Types;

module.exports = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(19),
    disableProtocolSecurity: new BooleanXMLField('disableProtocolSecurity', 'Disable Protocol Security')
        .setMinApi(19)
        .setRequired(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(19)
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(19)
        .setRequired(),
    url: new StringXMLField('url', 'URL')
        .setMinApi(19)
        .setRequired()
}