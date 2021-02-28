const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('@ah/core').Types;

module.exports = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(31)
        .setEditable()
        .setMaxLength(1000),
    label: new StringXMLField('label', 'Label')
        .setMinApi(31)
        .setEditable(),
    protected: new BooleanXMLField('protected', 'Protected')
        .setMinApi(31)
        .setEditable(),
    values: new ArrayXMLField('values', 'Values')
        .setMinApi(31)
        .setEditable()
        .setFieldKey('field')
        .addField('field', new StringXMLField('field', 'Field')
            .setEditable()
            .setRequired()
        )
        .addField('value', new StringXMLField('value', 'Value')
            .setEditable()
            .setRequired()
        ),
}