const { StringXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;

module.exports = {
    applicationBinaryFile: new StringXMLField('applicationBinaryFile', 'Application Binary File')
        .setMinApi(47)
        .setEditable()
        .setBase64(),
    applicationBinaryFileName: new StringXMLField('applicationBinaryFileName', 'Application Binary File Name')
        .setMinApi(47)
        .setEditable(),
    applicationBundleIdentifier: new StringXMLField('applicationBundleIdentifier', 'Application Bundle Identifier')
        .setMinApi(47)
        .setEditable(),
    applicationFileLength: new IntegerXMLField('applicationFileLength', 'Application File Length')
        .setMinApi(47)
        .setEditable(),
    applicationIconFile: new StringXMLField('applicationIconFile', 'Application Icon File')
        .setMinApi(47)
        .setEditable(),
    applicationIconFileName: new StringXMLField('applicationIconFileName', 'Application Icon File Name')
        .setMinApi(47)
        .setEditable(),
    applicationInstallUrl: new StringXMLField('applicationInstallUrl', 'Application Install URL')
        .setMinApi(47)
        .setEditable(),
    devicePlatform: new EnumXMLField('devicePlatform', 'Device Platform')
        .setMinApi(47)
        .setEditable()
        .setRequired()
        .addEnumValue('Android', 'android')
        .addEnumValue('iOS', 'ios'),
    deviceType: new EnumXMLField('deviceType', 'Device Type')
        .setMinApi(47)
        .setEditable()
        .addEnumValue('Mini Tablet', 'minitablet')
        .addEnumValue('Phone', 'phone')
        .addEnumValue('Tablet', 'tablet'),
    minimumOsVersion: new StringXMLField('minimumOsVersion', 'Minimum OS Version')
        .setMinApi(47)
        .setEditable(),
    privateApp: new BooleanXMLField('privateApp', 'Private App')
        .setMinApi(47)
        .setEditable(),
    version: new StringXMLField('version', 'Version')
        .setMinApi(47)
        .setEditable()
        .setRequired(),
}