import { StringXMLField, EnumXMLField, IntegerXMLField } from '@aurahelper/core';

export const ForecastingTypeSource = {
    forecastingSourceDefinition: new StringXMLField('forecastingSourceDefinition', 'Forecasting Source Definition')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    forecastingType: new StringXMLField('forecastingType', 'Forecasting Type')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    parentSourceDefinition: new StringXMLField('parentSourceDefinition', 'Parent Source Definition')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    relationField: new EnumXMLField('relationField', 'Relation Field')
        .setMinApi(52)
        .setEditable()
        .addEnumValue('OpportunityLineItem.OpportunityId', 'OpportunityLineItem.OpportunityId')
        .addEnumValue('OpportunityLineItem.Product2Id', 'OpportunityLineItem.Product2Id')
        .addEnumValue('OpportunityLineItemSchedule.OpportunityLineItemId', 'OpportunityLineItemSchedule.OpportunityLineItemId')
        .addEnumValue('OpportunitySplit.OpportunityId', 'OpportunitySplit.OpportunityId'),
    sourceGroup: new IntegerXMLField('sourceGroup', 'Source Group')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
};