const { BooleanXMLField } = require('../factory/xmlFactory');

module.exports = {
    enabled: new BooleanXMLField('enabled', 'Enabled')
        .setMinApi(45)
        .setEditable()
        .setDefaultValue(false)
}