const { StringXMLField, ArrayXMLField } = require('@ah/core').Types;

module.exports = {
    customFields: new ArrayXMLField('customFields', 'Custom Fields')
        .setMinApi(32)
        .setEditable()
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
        )
        .addField('value', new StringXMLField('value', 'Value')
            .setEditable()
            .setRequired()
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(32)
        .setEditable(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(32)
        .setEditable()
        .setRequired(),
}