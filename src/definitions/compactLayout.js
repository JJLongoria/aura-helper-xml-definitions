const { StringXMLField, ArrayXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(29)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(29)
        .setEditable()
        .setUnique()
        .setMetadataType(MetadataTypes.COMPACT_LAYOUT),
    label: new StringXMLField('label', 'Label')
        .setMinApi(29)
        .setEditable(),
}