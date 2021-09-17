const { StringXMLField } = require('@aurahelper/core').Types;

module.exports = {
    label: new StringXMLField('label', 'Label')
        .setMinApi(44)
        .setEditable()
        .setRequired()
}