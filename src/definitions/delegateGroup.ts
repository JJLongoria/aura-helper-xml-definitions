import { StringXMLField, BooleanXMLField, ArrayXMLField, MetadataTypes } from '@aurahelper/core';

export const Delegategroup = {
    customObjects: new ArrayXMLField('customObjects', 'Custom Objects')
        .setMinApi(36)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT),
    groups: new ArrayXMLField('groups', 'Groups')
        .setMinApi(36)
        .setEditable()
        .setMetadataType(MetadataTypes.GROUP),
    label: new StringXMLField('label', 'Label')
        .setMinApi(36)
        .setEditable()
        .setRequired(),
    loginAccess: new BooleanXMLField('loginAccess', 'Login Access')
        .setMinApi(36)
        .setEditable()
        .setRequired(),
    permissionSets: new ArrayXMLField('permissionSets', 'Permission Sets')
        .setMinApi(36)
        .setEditable()
        .setMetadataType(MetadataTypes.PERMISSION_SET),
    profiles: new ArrayXMLField('profiles', 'Profiles')
        .setMinApi(36)
        .setEditable()
        .setMetadataType(MetadataTypes.PROFILE),
    roles: new ArrayXMLField('roles', 'Roles')
        .setMinApi(36)
        .setEditable()
        .setMetadataType(MetadataTypes.ROLE),
}