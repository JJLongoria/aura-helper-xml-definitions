import { StringXMLField, MetadataTypes } from '@aurahelper/core';

export const DataPackageKitObject = {
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(53)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(53)
        .setEditable()
        .setRequired(),
    parentDataPackageKitDefinitionName: new StringXMLField('parentDataPackageKitDefinitionName', 'Parent Data Package Kit Definition Name')
        .setMinApi(53)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.DATA_PACKAGE_KIT_DEFINITION),
    referenceObjectName: new StringXMLField('referenceObjectName', 'Reference Object Name')
        .setMinApi(53)
        .setEditable()
        .setRequired(),
};