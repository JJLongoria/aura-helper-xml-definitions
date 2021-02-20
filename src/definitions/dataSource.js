const { StringXMLField } = require('../factory/xmlFactory');

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