const { StringXMLField, EnumXMLField } = require('@ah/core').Types;

module.exports = {
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(50)
        .setUnique()
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
    status: new EnumXMLField('status', 'Status')
        .setMinApi(50)
        .setEditable()
        .addEnumValue('Disabled', 'Disabled')
        .addEnumValue('Enabled', 'Enabled')
        .addEnumValue('Migrated', 'Migrated')
        .setRequired(),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(50)
        .setEditable()
        .addEnumValue('Prediction Builder', 'PredictionBuilder')
}