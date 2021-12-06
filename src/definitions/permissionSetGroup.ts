import { StringXMLField, ArrayXMLField, MetadataTypes, EnumXMLField } from '@aurahelper/core';

export const PermissionSetGroup = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(45)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(45)
        .setEditable()
        .setRequired(),
    mutingPermissionSets: new StringXMLField('mutingPermissionSets', 'Muting Permission Sets')
        .setMinApi(46)
        .setEditable()
        .setMetadataType(MetadataTypes.MUTING_PERMISSION_SET),
    permissionSets: new ArrayXMLField('permissionSets', 'Permission Sets')
        .setMinApi(45)
        .setEditable()
        .setMetadataType(MetadataTypes.PERMISSION_SET),
    status: new EnumXMLField('status', 'Status')
        .setMinApi(45)
        .setEditable()
        .addEnumValue('Updated', 'Updated')
        .addEnumValue('Outdated', 'Outdated')
        .addEnumValue('Updating', 'Updating')
        .addEnumValue('Failed', 'Failed')
}