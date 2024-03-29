import { StringXMLField, BooleanXMLField, MetadataTypes, EnumXMLField } from '@aurahelper/core';

export const PaymentGatewayProvider = {
    apexAdapter: new StringXMLField('apexAdapter', 'Apex Adapter')
        .setMinApi(48)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_CLASS),
    comments: new StringXMLField('comments', 'Comments')
        .setMinApi(48)
        .setEditable()
        .setMaxLength(1000),
    idempotencySupported: new EnumXMLField('idempotencySupported', 'Idempotency Supported')
        .setMinApi(48)
        .setEditable()
        .setRequired()
        .addEnumValue('Yes', 'Yes')
        .addEnumValue('No', 'No'),
    isProtected: new BooleanXMLField('isProtected', 'Is Protected')
        .setMinApi(48)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(48)
        .setEditable()
        .setRequired()
};