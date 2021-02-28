const { StringXMLField, EnumXMLField } = require('@ah/core').Types;

module.exports = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(27)
        .setEditable(),
    RecurrenceType: new EnumXMLField('RecurrenceType', 'Recurrence Type')
        .setMinApi(29)
        .setEditable()
        .addEnumValue('None', 'none')
        .addEnumValue('Recurs Independently', 'recursIndependently')
        .addEnumValue('Recurs Chained', 'recursChained'),

}