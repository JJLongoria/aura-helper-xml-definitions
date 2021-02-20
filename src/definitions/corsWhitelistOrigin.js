const { StringXMLField } = require('../factory/xmlFactory');

module.exports = {
    urlPattern: new StringXMLField('urlPattern', 'URL Pattern')
        .setMinApi(32)
        .setEditable()
}