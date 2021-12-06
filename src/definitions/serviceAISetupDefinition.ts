import { StringXMLField, DataValues, EnumXMLField } from '@aurahelper/core';

export const ServiceAISetupDefinition = {
    appSourceType: new EnumXMLField('appSourceType', 'App Source Type')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addEnumValue('Reply Recommendation', 'REPLY_RECOMMENDATION')
        .addEnumValue('Article Recommendation', 'ARTICLE_RECOMMENDATION')
        .addEnumValue('Utterance Recommendation', 'UTTERANCE_RECOMMENDATION')
        .addEnumValue('Frequently Asked Questions', 'FAQ'),
    name: new StringXMLField('name', 'Name')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    setupStatus: new EnumXMLField('setupStatus', 'Setup Status')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addEnumValue('Field Selected', 'FIELDS_SELECTED')
        .addEnumValue('Training', 'TRAINING')
        .addEnumValue('Ready to Activate', 'READY_TO_ACTIVATE')
        .addEnumValue('Serving', 'SERVING')
        .addEnumValue('Retired', 'RETIRED')
        .addEnumValue('Archived', 'ARCHIVED')
        .addEnumValue('Ready for Review', 'READY_FOR_REVIEW'),
    supportedLanguages: new EnumXMLField('supportedLanguages', 'Supported Languages')
        .setMinApi(51)
        .setEditable()
        .setEnumValues(DataValues.SF_LANGUAGES)
        .setMultiChoice()

}