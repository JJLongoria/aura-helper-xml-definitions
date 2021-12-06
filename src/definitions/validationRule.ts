import { StringXMLField, BooleanXMLField, MetadataTypes } from '@aurahelper/core';

export const ValidationRule = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(12)
        .setEditable(),
    errorConditionFormula: new StringXMLField('errorConditionFormula', 'Error Condition Formula')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    errorDisplayField: new StringXMLField('errorDisplayField', 'Error Display Field')
        .setMinApi(12)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    errorMessage: new StringXMLField('errorMessage', 'Error Message')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .setMaxLength(255),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .setUnique()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setMetadataType(MetadataTypes.VALIDATION_RULE),
}