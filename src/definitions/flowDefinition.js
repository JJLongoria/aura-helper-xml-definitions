const { StringXMLField, IntegerXMLField } = require('@ah/core').Types;

module.exports = {
    activeVersionNumber: new IntegerXMLField('activeVersionNumber', 'Active Version Number')
        .setMinApi(34)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(34)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(34)
        .setEditable()
        .setRequired()
        .setUnique(),
}