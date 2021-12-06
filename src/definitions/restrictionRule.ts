import { StringXMLField, BooleanXMLField, ArrayXMLField, XMLDependencyField, DataValues, MetadataTypes, EnumXMLField, IntegerXMLField, DoubleXMLField, ObjectXMLField } from '@aurahelper/core';

export const RestrictionRule = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(52)
        .setEditable()
        .setDefaultValue(false),
    description: new StringXMLField('description', 'Description')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    enforcementType: new EnumXMLField('enforcementType', 'Enforcement Type')
        .setMinApi(52)
        .setEditable()
        .setRequired()
        .addEnumValue('Field Restrict', 'FieldRestrict')
        .addEnumValue('Restrict', 'Restrict')
        .addEnumValue('Scoping', 'Scoping'),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    recordFilter: new StringXMLField('recordFilter', 'Record Filter')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    targetEntity: new EnumXMLField('targetEntity', 'Target Entity')
        .setMinApi(52)
        .setEditable()
        .setRequired()
        .addEnumValue('Contract', 'Contract')
        .addEnumValue('Event', 'Event')
        .addEnumValue('Task', 'Task')
        .addEnumValue('Time Sheet', 'TimeSheet')
        .addEnumValue('Time Sheet Entry', 'TimeSheetEntry')
        .addEnumValue('Account', 'Account')
        .addEnumValue('Case', 'Case')
        .addEnumValue('Contact', 'Contact')
        .addEnumValue('Event', 'Event')
        .addEnumValue('Lead', 'Lead')
        .addEnumValue('Opportunity', 'Opportunity')
        .addEnumValue('Task', 'Task')
        .addDependencyField(new XMLDependencyField('enforcementType', 'Restrict', ['Contract', 'Event', 'Task', 'TimeSheet', 'TimeSheetEntry'], ['Account', 'Case', 'Contact', 'Event', 'Lead', 'Opportunity', 'Task']))
        .addDependencyField(new XMLDependencyField('enforcementType', 'Scoping', ['Account', 'Case', 'Contact', 'Event', 'Lead', 'Opportunity', 'Task'], ['Contract', 'Event', 'Task', 'TimeSheet', 'TimeSheetEntry'])),
    userCriteria: new StringXMLField('userCriteria', 'User Criteria')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    version: new IntegerXMLField('version', 'Version')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
};