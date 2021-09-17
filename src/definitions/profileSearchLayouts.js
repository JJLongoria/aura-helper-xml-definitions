const { ArrayXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;

module.exports = {
    profileName: new ArrayXMLField('profileName', 'Profile Name')
        .setMinApi(48)
        .setEditable()
        .setMetadataType(MetadataTypes.PROFILE),
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(48)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD)
}