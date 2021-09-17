const { BooleanXMLField } = require('@aurahelper/core').Types;

module.exports = {
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(49)
        .setEditable()
        .setDefaultValue(false),
    providerDescription: new BooleanXMLField('providerDescription', 'Provider Description')
        .setMinApi(49)
        .setEditable(),
    providerName: new BooleanXMLField('providerName', 'Provider Name')
        .setMinApi(49)
        .setEditable()
}