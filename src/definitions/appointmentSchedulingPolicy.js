const { StringXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    appointmentStartTimeInterval: new EnumXMLField('appointmentStartTimeInterval', 'Appointment Start Time Interval')
        .setMinApi(47)
        .setEditable()
        .setRequired()
        .addEnumValue('5 Minutes', '5')
        .addEnumValue('10 Minutes', '10')
        .addEnumValue('15 Minutes', '15')
        .addEnumValue('20 Minutes', '20')
        .addEnumValue('30 Minutes', '30')
        .addEnumValue('45 Minutes', '45')
        .addEnumValue('60 Minutes', '60')
        .addEnumValue('90 Minutes', '90')
        .addEnumValue('120 Minutes', '120')
        .addEnumValue('150 Minutes', '150')
        .addEnumValue('180 Minutes', '180')
        .addEnumValue('240 Minutes', '240')
        .addEnumValue('300 Minutes', '300')
        .addEnumValue('360 Minutes', '360')
        .addEnumValue('420 Minutes', '420')
        .addEnumValue('480 Minutes', '480'),
    extCalEventHandler: new StringXMLField('extCalEventHandler', 'External Calendar Event Handler')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.APEX_CLASS),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(47)
        .setEditable()
        .setRequired(),
    shouldConsiderCalendarEvents: new BooleanXMLField('shouldConsiderCalendarEvents', 'Should Consider Calendar Events')
        .setMinApi(47)
        .setEditable()
        .setRequired(),
    shouldEnforceExcludedResource: new BooleanXMLField('shouldEnforceExcludedResource', 'Should Enforce Excluded Resource')
        .setMinApi(47)
        .setEditable()
        .setRequired(),
    shouldEnforceRequiredResource: new BooleanXMLField('shouldEnforceRequiredResource', 'Should Enforce Required Resource')
        .setMinApi(47)
        .setEditable()
        .setRequired(),
    shouldMatchSkill: new BooleanXMLField('shouldMatchSkill', 'Should Match Skill')
        .setMinApi(47)
        .setEditable()
        .setRequired(),
    shouldMatchSkillLevel: new BooleanXMLField('shouldMatchSkillLevel', 'Should Match Skill Level')
        .setMinApi(47)
        .setEditable()
        .setRequired(),
    shouldRespectVisitingHours: new BooleanXMLField('shouldRespectVisitingHours', 'Should Respect Visiting Hours')
        .setMinApi(47)
        .setEditable()
        .setRequired(),
    shouldUsePrimaryMembers: new BooleanXMLField('shouldUsePrimaryMembers', 'Should Use Primary Members')
        .setMinApi(47)
        .setEditable()
        .setRequired(),
    shouldUseSecondaryMembers: new BooleanXMLField('shouldUseSecondaryMembers', 'Should Use Secondary Members')
        .setMinApi(47)
        .setEditable()
        .setRequired(),
}