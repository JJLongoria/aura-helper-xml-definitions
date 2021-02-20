const { StringXMLField, DoubleXMLField, EnumXMLField } = require('../factory/xmlFactory');
const PackageVerionsItemType = require('./types/packageVersion');


module.exports = {
    apiVersion: new DoubleXMLField('apiVersion', 'API Version')
        .setMinApi(10)
        .setEditable()
        .setRequired(),
    content: new StringXMLField('content', 'Content')
        .setMinApi(10)
        .setEditable()
        .setBase64(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(10)
        .setEditable()
        .setUnique(),
    packageVersions: PackageVerionsItemType('packageVersions', 'Package Versions', 10),
    status: new EnumXMLField('status', 'Status')
        .setMinApi(10)
        .setEditable()
        .setRequired()
        .setDefaultValue('Active')
        .addEnumValue('Active', 'Active')
        .addEnumValue('Inactive', 'Inactive')
        .addEnumValue('Deleted', 'Deleted')
}