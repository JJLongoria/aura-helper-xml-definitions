const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('../factory/xmlFactory');

module.exports = {
    customValue: new ArrayXMLField('customValue', 'Custom Value')
        .setMinApi(38)
        .setEditable()
        .setRequired()
        .setMaxItems(1000)
        .addField('color', new StringXMLField('color', 'Color')
            .setEditable()
        )
        .addField('default', new BooleanXMLField('default', 'Default')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('isActive', new BooleanXMLField('isActive', 'Is Active')
            .setEditable()
            .setRequired()
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setMinApi(39)
            .setEditable()
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(38)
        .setEditable()
        .setMaxLength(255),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(38)
        .setEditable()
        .setRequired()
        .setUnique(),
    sorted: new BooleanXMLField('sorted', 'Sorted')
        .setMinApi(38)
        .setEditable()
        .setDefaultValue(false),
}