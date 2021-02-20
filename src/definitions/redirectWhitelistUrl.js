const { StringXMLField } = require('../factory/xmlFactory');

module.exports = {
    Url: new StringXMLField('Url', 'URL')
        .setMinApi(48)
        .setEditable()
        .setRequired()
}