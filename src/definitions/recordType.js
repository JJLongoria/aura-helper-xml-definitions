const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('../factory/xmlFactory');
const MetadataTypes = require('../values/metadataTypes');

module.exports = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    businessProcess: new StringXMLField('businessProcess', 'Business Process')
        .setMinApi(17)
        .setEditable()
        .setMetadataType(MetadataTypes.BUSINESS_PROCESS),
    compactLayoutAssignment: new StringXMLField('compactLayoutAssignment', 'Compact Layout Assignment')
        .setMinApi(29)
        .setEditable()
        .setMetadataType(MetadataTypes.COMPACT_LAYOUT),
    description: new StringXMLField('description', 'Description')
        .setMinApi(12)
        .setEditable()
        .setMaxLength(255),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .setUnique(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    picklistValues: new ArrayXMLField('picklistValues', 'Picklist Values')
        .setMinApi(12)
        .setEditable()
        .addField('picklist', new StringXMLField('picklist', 'Picklist')
            .setEditable()
            .setRequired()
        )
        .addField('values', new ArrayXMLField('values', 'Values')
            .setEditable()
            .setRequired()
            .addField('default', new BooleanXMLField('default', 'Default')
                .setEditable()
                .setRequired()
                .setUnique()
            )
            .addField('fullName', new StringXMLField('fullName', 'Full Name')
                .setEditable()
                .setRequired()
            )
        )
}