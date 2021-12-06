import { StringXMLField, BooleanXMLField, ArrayXMLField, EnumXMLField } from '@aurahelper/core';

export const InboundNetworkConnection = {
    connectionType: new EnumXMLField('connectionType', 'Connection Type')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .addEnumValue('AWS Private Link', 'AwsPrivateLink'),
    description: new StringXMLField('description', 'Description')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .setMaxLength(255),
    inboundNetworkConnProperties: new ArrayXMLField('inboundNetworkConnProperties', 'Inbound Network Conn Properties')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .setFieldKey('propertyName')
        .addField('propertyName', new EnumXMLField('propertyName', 'Property Name')
            .setEditable()
            .setRequired()
            .addEnumValue('AWS Virtual Private Cloud Endpoint Id', 'AwsVpcEndpointId')
            .addEnumValue('Region', 'Region')
            .addEnumValue('Source Ip Ranges', 'SourceIpRanges')
        )
        .addField('propertyValue', new StringXMLField('propertyValue', 'Property Value')
            .setEditable()
            .setRequired()
            .setJSON()
        ),
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .setDefaultValue(false),
    label: new StringXMLField('label', 'Label')
        .setMinApi(49)
        .setEditable()
        .setRequired(),
    status: new EnumXMLField('status', 'Status')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .addEnumValue('Unprovisioned', 'Unprovisioned')
        .addEnumValue('Allocating', 'Allocating')
        .addEnumValue('Pending Acceptance', 'PendingAcceptance')
        .addEnumValue('Pending Activation', 'PendingActivation')
        .addEnumValue('Rejected Remotely', 'RejectedRemotely')
        .addEnumValue('Deleted Remotely', 'DeletedRemotely')
        .addEnumValue('Teardown In Progress', 'TeardownInProgress')
        .addEnumValue('Ready', 'Ready')




}