import { StringXMLField, BooleanXMLField, ArrayXMLField, XMLDependencyField, DataValues, MetadataTypes, EnumXMLField, IntegerXMLField, DoubleXMLField, ObjectXMLField } from '@aurahelper/core';

export const ExternalAIModel = {
    applicationSourceType: new EnumXMLField('applicationSourceType', 'Application Source Type')
        .setEditable()
        .setMinApi(51)
        .addEnumValue('Reply Recommendation', 'REPLY_RECOMMENDATION')
        .addEnumValue('Article Recommendation', 'ARTICLE_RECOMMENDATION')
        .addEnumValue('Utterance Recommendation', 'UTTERANCE_RECOMMENDATION')
        .addEnumValue('FAQ', 'FAQ'),
    externalModelKey: new StringXMLField('externalModelKey', 'External Model Key')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    externalModelStatus: new EnumXMLField('externalModelStatus', 'External Model Status')
        .setEditable()
        .setMinApi(51)
        .addEnumValue('Disabled', 'DISABLED')
        .addEnumValue('Enabled', 'ENABLED')
        .addEnumValue('Paused', 'PAUSED'),
    name: new StringXMLField('name', 'Name')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    threshold: new DoubleXMLField('threshold', 'Threshold')
        .setMinApi(51)
        .setEditable(),
    trainingJobName: new StringXMLField('trainingJobName', 'Training Job Name')
        .setMinApi(51)
        .setEditable(),
};