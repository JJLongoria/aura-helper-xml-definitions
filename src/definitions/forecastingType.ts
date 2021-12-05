import { StringXMLField, BooleanXMLField, ArrayXMLField, XMLDependencyField, DataValues, MetadataTypes, EnumXMLField, IntegerXMLField, DoubleXMLField, ObjectXMLField } from '@aurahelper/core';

export const ForecastingType = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(52)
        .setEditable()
        .setRequired()
        .setDefaultValue(false),
    amount: new BooleanXMLField('amount', 'Amount')
        .setMinApi(52)
        .setEditable()
        .setRequired()
        .setDefaultValue(true),
    dateType: new EnumXMLField('dateType', 'Date Type')
        .setMinApi(52)
        .setEditable()
        .setRequired()
        .addEnumValue('Opportunity Close Date', 'OpportunityCloseDate')
        .addEnumValue('ProductDate', 'ProductDate')
        .addEnumValue('Schedule Date', 'ScheduleDate')
        .addEnumValue('OLI Measure Close Date Only', 'OLIMeasureCloseDateOnly')
        .addEnumValue('Product Date Only', 'ProductDateOnly')
        .addEnumValue('Schedule Date Only', 'ScheduleDateOnly'),
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    hasProductFamily: new BooleanXMLField('hasProductFamily', 'Has Product Family')
        .setMinApi(52)
        .setEditable()
        .setRequired()
        .setDefaultValue(false),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    opportunitySplitType: new StringXMLField('opportunitySplitType', 'Opportunity Split Type')
        .setMinApi(52)
        .setEditable(),
    quantity: new BooleanXMLField('quantity', 'Quantity')
        .setMinApi(52)
        .setEditable()
        .setRequired()
        .setDefaultValue(false),
    roleType: new EnumXMLField('roleType', 'Role Type')
        .setMinApi(52)
        .setEditable()
        .setRequired()
        .addEnumValue('Role Based ', 'R')
        .addEnumValue('Territory2 Based ', 'Y'),
    territory2Model: new StringXMLField('territory2Model', 'Territory2 Model')
        .setMinApi(52)
        .setEditable(),
};