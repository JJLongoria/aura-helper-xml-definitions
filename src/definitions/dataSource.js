const { StringXMLField } = require('@aurahelper/core').Types;

module.exports = {
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
    prefix: new StringXMLField('prefix', 'Prefix')
        .setMinApi(50)
        .setEditable()
        .setRequired()
}