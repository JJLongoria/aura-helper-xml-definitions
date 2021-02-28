const { StringXMLField, DateTimeXMLField } = require('@ah/core').Types;

module.exports = {
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .setUnique(),
    expirationDate: new DateTimeXMLField('expirationDate', 'Expiration Date')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
    serialNumber: new StringXMLField('serialNumber', 'Serial Number')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
    user: new StringXMLField('user', 'User')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .linkFieldToSObject('User', 'Username')
}