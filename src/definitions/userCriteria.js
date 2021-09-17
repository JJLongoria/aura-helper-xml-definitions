const { StringXMLField, IntegerXMLField, EnumXMLField } = require('@aurahelper/core').Types;

module.exports = {
    creationAgeInSeconds: new IntegerXMLField('creationAgeInSeconds', 'Creation Age In Seconds')
        .setMinApi(39)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(39)
        .setEditable(),
    lastChatterActivityAgeInSeconds: new IntegerXMLField('lastChatterActivityAgeInSeconds', 'Last Chatter Activity Age In Seconds')
        .setMinApi(39)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(39)
        .setEditable()
        .setRequired(),
    userTypes: new EnumXMLField('userTypes', 'User Types')
        .setMinApi(39)
        .setEditable()
        .addEnumValue('Internal', 'Internal')
        .addEnumValue('Customer', 'Customer')
        .addEnumValue('Partner', 'Partner')
}