const { StringXMLField, EnumXMLField } = require('@aurahelper/core').Types;

module.exports = {
    application: new StringXMLField('application', 'Application')
        .setMinApi(48)
        .setEditable(),
    dataflowType: new EnumXMLField('dataflowType', 'Dataflow Type')
        .setMinApi(41)
        .setEditable()
        .setDefaultValue('User')
        .addEnumValue('User', 'User')
        .addEnumValue('Prepared', 'Prepared'),
    description: new StringXMLField('description', 'Description')
        .setMinApi(37)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(37)
        .setEditable()
        .setRequired(),
}