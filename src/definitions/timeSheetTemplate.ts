import { StringXMLField, BooleanXMLField, ArrayXMLField, MetadataTypes, EnumXMLField, DateTimeXMLField } from '@aurahelper/core';

export const TimeSheetTemplate = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(46)
        .setEditable()
        .setRequired(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(46)
        .setEditable(),
    frequency: new EnumXMLField('frequency', 'Frequency')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .addEnumValue('Daily', 'Daily')
        .addEnumValue('Weekly', 'Weekly')
        .addEnumValue('Every Two Weeks', 'EveryTwoWeeks')
        .addEnumValue('Twice A Month', 'TwiceAMonth')
        .addEnumValue('Monthly', 'Monthly'),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(46)
        .setEditable()
        .setRequired(),
    startDate: new DateTimeXMLField('startDate', 'Start Date')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .setFormat('yyyy-mm-dd'),
    timeSheetTemplateAssignments: new ArrayXMLField('timeSheetTemplateAssignments', 'Time Sheet Template Assignments')
        .setMinApi(46)
        .setEditable()
        .setFieldKey('assignedTo')
        .setSortOrder(undefined)
        .addField('assignedTo', new StringXMLField('assignedTo', 'Assigned To')
            .setEditable()
            .setMetadataType(MetadataTypes.PROFILE)
        ),
    workWeekEndDay: new EnumXMLField('workWeekEndDay', 'Work Week End Day')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .addEnumValue('Monday', 'Monday')
        .addEnumValue('Tuesday', 'Tuesday')
        .addEnumValue('Wednesday', 'Wednesday')
        .addEnumValue('Thursday', 'Thursday')
        .addEnumValue('Friday', 'Friday')
        .addEnumValue('Saturday', 'Saturday')
        .addEnumValue('Sunday', 'Sunday'),
    workWeekStartDay: new EnumXMLField('workWeekStartDay', 'Work Week Start Day')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .addEnumValue('Monday', 'Monday')
        .addEnumValue('Tuesday', 'Tuesday')
        .addEnumValue('Wednesday', 'Wednesday')
        .addEnumValue('Thursday', 'Thursday')
        .addEnumValue('Friday', 'Friday')
        .addEnumValue('Saturday', 'Saturday')
        .addEnumValue('Sunday', 'Sunday'),
};