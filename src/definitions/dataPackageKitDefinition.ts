import { StringXMLField, BooleanXMLField, DoubleXMLField } from '@aurahelper/core';

export const DataPackageKitDefinition = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(53)
        .setEditable(),
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(53)
        .setEditable()
        .setRequired(),
    isDeployed: new BooleanXMLField('isDeployed', 'Is Deployed')
        .setMinApi(53)
        .setEditable(),
    isEnabled: new BooleanXMLField('isEnabled', 'Is Enabled')
        .setMinApi(53)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(53)
        .setEditable()
        .setRequired(),
    versionNumber: new DoubleXMLField('versionNumber', 'Version Number')
        .setMinApi(53)
        .setEditable(),
};