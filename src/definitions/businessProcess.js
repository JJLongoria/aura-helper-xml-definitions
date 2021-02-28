const { StringXMLField, BooleanXMLField } = require('@ah/core').Types;
const PicklistValuesType = require('./types/picklistValues');

module.exports = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(17)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(17)
        .setEditable()
        .setRequired(),
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(17)
        .setEditable(),
    namespacePrefix: new StringXMLField('namespacePrefix', 'Namespace Prefix')
        .setMinApi(17)
        .setEditable(),
    values: PicklistValuesType('values', 'Values', 17)
}