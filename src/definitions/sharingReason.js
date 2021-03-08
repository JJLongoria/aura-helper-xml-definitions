const { StringXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(14)
        .setEditable()
        .setRequired()
        .setUnique()
        .setMetadataType(MetadataTypes.SHARING_REASON),
    label: new StringXMLField('label', 'Label')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .setMaxLength(40),
}