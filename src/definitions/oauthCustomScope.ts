import { StringXMLField, BooleanXMLField, MetadataTypes } from '@aurahelper/core';

export const OauthCustomScope = {
    assignedTo: new StringXMLField('assignedTo', 'Assigned To')
        .setMinApi(49)
        .setEditable()
        .setMetadataType(MetadataTypes.CONNECTED_APP),
    description: new StringXMLField('description', 'Description')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .setMaxLength(60),
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .setUnique(),
    isProtected: new BooleanXMLField('isProtected', 'Is Protected')
        .setMinApi(46)
        .setEditable()
        .setRequired(),
    isPublic: new BooleanXMLField('isPublic', 'Is Public')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .setDefaultValue(false),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(46)
        .setEditable()
        .setRequired()
};