const { StringXMLField, ArrayXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;

module.exports = {
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(29)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(29)
        .setEditable()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique()
        .setMetadataType(MetadataTypes.COMPACT_LAYOUT),
    label: new StringXMLField('label', 'Label')
        .setMinApi(29)
        .setEditable(),
}