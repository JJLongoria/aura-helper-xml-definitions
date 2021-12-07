import { ArrayXMLField, MetadataTypes } from '@aurahelper/core';

export const ProfileSearchLayout = {
    profileName: new ArrayXMLField('profileName', 'Profile Name')
        .setMinApi(48)
        .setEditable()
        .setMetadataType(MetadataTypes.PROFILE),
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(48)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD)
};