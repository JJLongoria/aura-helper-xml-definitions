const { StringXMLField } = require('@aurahelper/core').Types;

module.exports = {
    urlPattern: new StringXMLField('urlPattern', 'URL Pattern')
        .setMinApi(32)
        .setEditable()
}