const { StringXMLField } = require('@aurahelper/core').Types;

module.exports = {
    Url: new StringXMLField('Url', 'URL')
        .setMinApi(48)
        .setEditable()
        .setRequired()
}