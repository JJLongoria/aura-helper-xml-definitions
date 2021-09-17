const { StringXMLField, DoubleXMLField, BooleanXMLField } = require('@aurahelper/core').Types;
const PackageVerionsItemType = require('./types/packageVersion');

module.exports = {
    apiVersion: new DoubleXMLField('apiVersion', 'API Version')
        .setMinApi(15)
        .setEditable()
        .setRequired(),
    content: new StringXMLField('content', 'Content')
        .setMinApi(11)
        .setEditable()
        .setBase64(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(11)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(11)
        .setEditable()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    availableInTouch: new BooleanXMLField('availableInTouch', 'Available In Touch')
        .setMinApi(11)
        .setEditable()
        .setUnique(),
    confirmationTokenRequired: new BooleanXMLField('confirmationTokenRequired', 'Confirmation Token Required')
        .setMinApi(11)
        .setEditable()
        .setUnique(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(11)
        .setEditable()
        .setRequired(),
    packageVersions: PackageVerionsItemType('packageVersions', 'Package Versions', 11),
}