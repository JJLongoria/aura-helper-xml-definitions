const { StringXMLField, DoubleXMLField } = require('../factory/xmlFactory');
const PackageVerionsItemType = require('./types/packageVersion');

module.exports = {
    apiVersion: new DoubleXMLField('apiVersion', 'API Version')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    content: new StringXMLField('content', 'Content')
        .setMinApi(12)
        .setEditable()
        .setBase64(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(12)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(12)
        .setEditable()
        .setUnique(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    packageVersions: PackageVerionsItemType('packageVersions', 'Package Versions', 12),
}