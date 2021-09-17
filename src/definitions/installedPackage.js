const { StringXMLField, BooleanXMLField } = require('@aurahelper/core').Types;

module.exports = {
    activateRSS: new BooleanXMLField('activateRSS', 'Activate RSS')
        .setMinApi(43)
        .setEditable()
        .setRequired()
        .setDefaultValue(false),
    password: new StringXMLField('password', 'Password')
        .setMinApi(28)
        .setEditable(),
    versionNumber: new StringXMLField('versionNumber', 'Version Number')
        .setMinApi(28)
        .setEditable()
        .setRequired()
}