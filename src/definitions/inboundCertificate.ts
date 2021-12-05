import { DateTimeXMLField, StringXMLField } from '@aurahelper/core';

export const InboundCertificate = {
    expirationDate: new DateTimeXMLField('expirationDate', 'Expiration Date')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .setFormat('yyyy-mm-dd'),
    issuer: new StringXMLField('issuer', 'Issuer')
        .setMinApi(49)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(49)
        .setEditable()
        .setRequired(),
    serialId: new StringXMLField('serialId', 'Serial Id')
        .setMinApi(49)
        .setEditable()
        .setRequired()
}