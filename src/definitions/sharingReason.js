const { StringXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;

module.exports = {
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(14)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique()
        .setMetadataType(MetadataTypes.SHARING_REASON),
    label: new StringXMLField('label', 'Label')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .setMaxLength(40),
}