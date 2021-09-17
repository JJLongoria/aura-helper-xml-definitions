const { StringXMLField, IntegerXMLField } = require('@aurahelper/core').Types;

module.exports = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(32)
        .setEditable(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(32)
        .setEditable()
        .setRequired(),
    priority: new IntegerXMLField('priority', 'Priority')
        .setMinApi(32)
        .setEditable()
        .setRequired(),
}