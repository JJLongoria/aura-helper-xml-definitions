import { StringXMLField, EnumXMLField } from '@aurahelper/core';

export const ExternalDataConnector = {
    dataConnectionStatus: new EnumXMLField('dataConnectionStatus', 'Data Connection Status')
        .setMinApi(50)
        .setEditable()
        .addEnumValue('Connected', 'Connected'),
    dataConnectorConfiguration: new StringXMLField('dataConnectorConfiguration', 'Data Connector Configuration')
        .setMinApi(50)
        .setEditable(),
    dataConnectorType: new StringXMLField('dataConnectorType', 'Data Connector Type')
        .setMinApi(50)
        .setEditable(),
    dataPlatform: new StringXMLField('dataPlatform', 'Data Platform')
        .setMinApi(50)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .setUnique(),
}