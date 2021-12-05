import { StringXMLField, EnumXMLField } from '@aurahelper/core';

export const ForecastingSourceDefinition = {
    categoryField: new EnumXMLField('categoryField', 'Category Field')
        .setMinApi(52)
        .setEditable()
        .addEnumValue('Opportunity.ForecastCategoryName', 'Opportunity.ForecastCategoryName'),
    dateField: new EnumXMLField('dateField', 'Date Field')
        .setMinApi(52)
        .setEditable()
        .addEnumValue('Opportunity.CloseDate', 'Opportunity.CloseDate')
        .addEnumValue('OpportunityLineItem.ServiceDate', 'OpportunityLineItem.ServiceDate')
        .addEnumValue('OpportunityLineItemSchedule.ScheduleDate', 'OpportunityLineItemSchedule.ScheduleDate'),
    familyField: new EnumXMLField('familyField', 'Family Field')
        .setMinApi(52)
        .setEditable()
        .addEnumValue('Product2.Family', 'Product2.Family'),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    measureField: new EnumXMLField('measureField', 'Measure Field')
        .setMinApi(52)
        .setEditable()
        .addEnumValue('Opportunity.Amount', 'Opportunity.Amount')
        .addEnumValue('Opportunity.TotalOpportunityQuantity', 'Opportunity.TotalOpportunityQuantity')
        .addEnumValue('OpportunityLineItem.Quantity', 'OpportunityLineItem.Quantity')
        .addEnumValue('OpportunityLineItem.TotalPrice', 'OpportunityLineItem.TotalPrice')
        .addEnumValue('OpportunityLineItemSchedule.Quantity', 'OpportunityLineItemSchedule.Quantity')
        .addEnumValue('OpportunityLineItemSchedule.Revenue', 'OpportunityLineItemSchedule.Revenue')
        .addEnumValue('OpportunitySplit.SplitAmount', 'OpportunitySplit.SplitAmount'),
    sourceObject: new EnumXMLField('sourceObject', 'Source Object')
        .setMinApi(52)
        .setEditable()
        .addEnumValue('Opportunity', 'Opportunity')
        .addEnumValue('OpportunityLineItem', 'OpportunityLineItem')
        .addEnumValue('OpportunityLineItemSchedule', 'OpportunityLineItemSchedule')
        .addEnumValue('OpportunitySplit', 'OpportunitySplit')
        .addEnumValue('Product2', 'Product2'),
    territory2Field: new EnumXMLField('territory2Field', 'Territory2 Field')
        .setMinApi(52)
        .setEditable()
        .addEnumValue('Opportunity.Territory2Id', 'Opportunity.Territory2Id'),
    userField: new EnumXMLField('userField', 'User Field')
        .setMinApi(52)
        .setEditable()
        .addEnumValue('Opportunity.OwnerId', 'Opportunity.OwnerId')
        .addEnumValue('OpportunitySplit.SplitOwnerId', 'OpportunitySplit.SplitOwnerId'),
};