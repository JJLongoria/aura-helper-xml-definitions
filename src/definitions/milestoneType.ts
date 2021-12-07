import { StringXMLField, EnumXMLField } from '@aurahelper/core';

export const MilestoneType = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(27)
        .setEditable(),
    RecurrenceType: new EnumXMLField('RecurrenceType', 'Recurrence Type')
        .setMinApi(29)
        .setEditable()
        .addEnumValue('None', 'none')
        .addEnumValue('Recurs Independently', 'recursIndependently')
        .addEnumValue('Recurs Chained', 'recursChained'),

};