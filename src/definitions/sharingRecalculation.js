const { StringXMLField } = require('../factory/xmlFactory');

module.exports = {
    className: new StringXMLField('className', 'Class Name')
        .setMinApi(14)
        .setEditable()
        .setRequired()
}