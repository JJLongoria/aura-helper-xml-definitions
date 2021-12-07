import { StringXMLField, MetadataTypes, EnumXMLField, IntegerXMLField } from '@aurahelper/core';

export const ServiceAISetupField = {
    entity: new EnumXMLField('entity', 'Entity')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addEnumValue('Case', 'Case')
        .addEnumValue('Knowledge Article', 'KnowledgeArticle'),
    field: new StringXMLField('field', 'Field')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    fieldMappingType: new EnumXMLField('fieldMappingType', 'Field Mapping Type')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addEnumValue('Case Description', 'CASE_DESC')
        .addEnumValue('Case Subject', 'CASE_SUBJ')
        .addEnumValue('Article Title', 'ARTICLE_TITLE')
        .addEnumValue('Article Content', 'ARTICLE_CONTENT')
        .addEnumValue('Article Summary', 'ARTICLE_SUMMARY'),
    fieldPosition: new IntegerXMLField('fieldPosition', 'Field Position')
        .setMinApi(51)
        .setEditable()
        .setMinValue(1),
    name: new StringXMLField('name', 'Name')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    setupDefinition: new StringXMLField('setupDefinition', 'Setup Definition')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.SERVICE_AI_SETUP_DEFINITION),


};