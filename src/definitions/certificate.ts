import { StringXMLField, BooleanXMLField, IntegerXMLField, DateTimeXMLField } from '@aurahelper/core';

export const Certificate = {
    caSigned: new BooleanXMLField('caSigned', 'CA Signed')
        .setMinApi(36)
        .setEditable()
        .setRequired(),
    encryptedWithPlatformEncryption: new BooleanXMLField('encryptedWithPlatformEncryption', 'Encrypted With Platform Encryption')
        .setMinApi(36)
        .setEditable(),
    expirationDate: new DateTimeXMLField('expirationDate', 'Expiration Date')
        .setMinApi(36)
        .setEditable()
        .setFormat('yyyy-mm-dd'),
    keySize: new IntegerXMLField('keySize', 'Key Size')
        .setMinApi(36)
        .setEditable()
        .setAllowedValues([2048, 4096]),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(36)
        .setEditable()
        .setRequired()
        .setMaxLength(64),
    privateKeyExportable: new BooleanXMLField('privateKeyExportable', 'Private Key Exportable')
        .setMinApi(36)
        .setEditable(),
}