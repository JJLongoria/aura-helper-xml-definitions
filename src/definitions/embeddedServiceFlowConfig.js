const { BooleanXMLField } = require('@ah/core').Types;

module.exports = {
    enabled: new BooleanXMLField('enabled', 'Enabled')
        .setMinApi(45)
        .setEditable()
        .setDefaultValue(false)
}