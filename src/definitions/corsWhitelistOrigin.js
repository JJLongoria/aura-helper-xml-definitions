const { StringXMLField } = require('@ah/core').Types;

module.exports = {
    urlPattern: new StringXMLField('urlPattern', 'URL Pattern')
        .setMinApi(32)
        .setEditable()
}