const { StringXMLField } = require('../factory/xmlFactory');

module.exports = {
    label: new StringXMLField('label', 'Label')
        .setMinApi(44)
        .setEditable()
        .setRequired()
}