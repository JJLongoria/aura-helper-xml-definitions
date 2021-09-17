const { StringXMLField } = require('@aurahelper/core').Types;

module.exports = {
    className: new StringXMLField('className', 'Class Name')
        .setMinApi(14)
        .setEditable()
        .setRequired()
}