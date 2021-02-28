const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    connectedApp: new StringXMLField('connectedApp', 'Connected App')
        .setMinApi(31)
        .setEditable()
        .setMaxLength(80)
        .setMetadataType(MetadataTypes.CONNECTED_APP),
    description: new StringXMLField('description', 'Description')
        .setMinApi(31)
        .setEditable()
        .setMaxLength(255),
    isLicensed: new BooleanXMLField('isLicensed', 'Es Licensed')
        .setMinApi(31)
        .setRequired(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(31)
        .setRequired()
        .setMaxLength(80),
    requiredPermission: new ArrayXMLField('requiredPermission', 'Required Permission')
        .setMinApi(32)
        .setEditable()
        .setFieldKey('customPermission')
        .addField('customPermission', new StringXMLField('customPermission', 'Custom Permission')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_PERMISSION)
        )
        .addField('dependency', new BooleanXMLField('dependency', 'Dependency')
            .setEditable()
            .setRequired()
        )
}