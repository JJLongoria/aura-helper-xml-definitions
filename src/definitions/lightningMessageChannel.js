const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('@ah/core').Types;

module.exports = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(47)
        .setEditable(),
    isExposed: new BooleanXMLField('isExposed', 'Is Exposed')
        .setMinApi(47)
        .setEditable(),
    lightningMessageFields: new ArrayXMLField('lightningMessageFields', 'Lightning Message Fields')
        .setMinApi(47)
        .setEditable()
        .setFieldKey('fieldName')
        .addField('fieldName', new StringXMLField('fieldName', 'Field Name')
            .setEditable()
            .setRequired()
        )
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(47)
        .setEditable()
        .setRequired()
        .setUnique(),
}