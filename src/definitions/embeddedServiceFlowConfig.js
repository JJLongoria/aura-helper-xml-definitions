const { BooleanXMLField } = require('@aurahelper/core').Types;

module.exports = {
    enabled: new BooleanXMLField('enabled', 'Enabled')
        .setMinApi(45)
        .setEditable()
        .setDefaultValue(false)
}