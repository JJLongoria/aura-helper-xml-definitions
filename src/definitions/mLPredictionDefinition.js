const { StringXMLField, EnumXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;
const MLFilterType = require('./types/mLFilter');

module.exports = {
    aiApplicationDeveloperName: new StringXMLField('aiApplicationDeveloperName', 'AI Application Developer Name')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(50)
        .setEditable(),
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .setUnique(),
    negativeExpression: MLFilterType('negativeExpression', 'Negative Expression', 50)
        .setReserved(),
    positiveExpression: MLFilterType('positiveExpression', 'Positive Expression', 50)
        .setReserved(),
    predictionField: new StringXMLField('predictionField', 'Prediction Field')
        .setMinApi(50)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    pushbackField: new StringXMLField('pushbackField', 'Pushback Field')
        .setMinApi(50)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    status: new EnumXMLField('status', 'Status')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .addEnumValue('Enabled', 'Enabled')
        .addEnumValue('Disabled', 'Disabled')
        .addEnumValue('Draft', 'Draft'),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .addEnumValue('Binary Classification', 'BinaryClassification')
        .addEnumValue('Deep Learning Intent Classification', 'DeepLearningIntentClassification')
        .addEnumValue('Deep Learning Name Entity Recognition', 'DeepLearningNameEntityRecognition')
        .addEnumValue('Global Deep Learning Intent Classification', 'GlobalDeepLearningIntentClassification')
        .addEnumValue('Global Deep Learning Name Entity Recognition', 'GlobalDeepLearningNameEntityRecognition')
        .addEnumValue('Language Detection', 'LanguageDetection')
        .addEnumValue('Multiclass Classification', 'MulticlassClassification')
        .addEnumValue('Regression', 'Regression')
        .addEnumValue('Scoring Specific Outcome', 'ScoringSpecificOutcome'),
}