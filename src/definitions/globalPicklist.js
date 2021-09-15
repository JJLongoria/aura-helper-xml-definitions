const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('@ah/core').Types;

module.exports = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(37)
        .setMaxApi(37)
        .setEditable()
        .setMaxLength(255),
    globalPicklistValues: new ArrayXMLField('globalPicklistValues', 'Global Picklist Values')
        .setMinApi(37)
        .setMaxApi(37)
        .setEditable()
        .setRequired()
        .setMaxItems(1000)
        .setFieldKey('fullName')
        .setSortOrder()
        .addField('default', new BooleanXMLField('default', 'Default')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .addMatchPattern(/^[^\d\s_](\w)+$/)
            .setUnique()
        )
        .addField('isActive', new BooleanXMLField('isActive', 'Is Active')
            .setEditable()
            .setRequired()
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(37)
        .setMaxApi(37)
        .setEditable()
        .setRequired()
        .setUnique(),
    sorted: new BooleanXMLField('sorted', 'Sorted')
        .setMinApi(37)
        .setMaxApi(37)
        .setEditable()
        .setDefaultValue(false),
}