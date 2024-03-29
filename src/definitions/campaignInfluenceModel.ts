import { BooleanXMLField, EnumXMLField } from '@aurahelper/core';

export const CampaignIncluenceModel = {
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(40)
        .setEditable(),
    isDefaultModel: new BooleanXMLField('isDefaultModel', 'Is Default Model')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    isModelLocked: new BooleanXMLField('isModelLocked', 'Is Model Locked')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    modelDescription: new BooleanXMLField('modelDescription', 'Model Description')
        .setMinApi(38)
        .setEditable(),
    name: new BooleanXMLField('name', 'Name')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    recordPreference: new EnumXMLField('recordPreference', 'Record Preference')
        .setMinApi(41)
        .setEditable()
        .addEnumValue('All Records', 'AllRecords')
        .addEnumValue('Records With Attribution', 'RecordsWithAttribution')
};