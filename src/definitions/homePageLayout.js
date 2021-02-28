const { StringXMLField, ArrayXMLField } = require('@ah/core').Types;

module.exports = {
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .setUnique(),
    narrowComponents: new ArrayXMLField('narrowComponents', 'Narrow Components')
        .setMinApi(12)
        .setEditable(),
    wideComponents: new ArrayXMLField('wideComponents', 'Wide Components')
        .setMinApi(12)
        .setEditable()
}