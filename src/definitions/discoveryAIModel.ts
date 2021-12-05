import { StringXMLField, BooleanXMLField, ArrayXMLField, XMLDependencyField, DataValues, MetadataTypes, EnumXMLField, IntegerXMLField, ObjectXMLField, DoubleXMLField } from '@aurahelper/core';

export const DiscoveryAIModel = {
    algorithmType: new EnumXMLField('algorithmType', 'Algorithm Type')
        .setMinApi(51)
        .setEditable()
        .addEnumValue('Generalized Linear Model', 'Glm')
        .addEnumValue('Gradient Boost Machine', 'Gbm')
        .addEnumValue('XGBoost', 'Xgboost')
        .addEnumValue('Random Forest', 'Drf'),
    classificationThreshold: new DoubleXMLField('classificationThreshold', 'Classification Threshold')
        .setMinApi(51)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(51)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(51)
        .setEditable(),
    modelFields: new ArrayXMLField('modelFields', 'Model Fields')
        .setMinApi(51)
        .setEditable()
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
        )
        .addField('transformationConfig', new StringXMLField('transformationConfig', 'Transformation Config')
            .setEditable()
        )
        .addField('transformationType', new EnumXMLField('transformationType', 'Transformation Type')
            .setEditable()
            .addEnumValue('Typographic Clustering', 'TypographicClustering')
            .addEnumValue('Sentiment Analysis', 'SentimentAnalysis')
            .addEnumValue('Free Text Clustering', 'FreeTextClustering')
        )
        .addField('type', new EnumXMLField('type', 'Type')
            .setEditable()
            .addEnumValue('Text', 'Text')
            .addEnumValue('Number', 'Number')
            .addEnumValue('Date', 'Date')
        ),
    predictedField: new StringXMLField('predictedField', 'Predicted Field')
        .setMinApi(51)
        .setEditable(),
    predictionType: new EnumXMLField('predictionType', 'Prediction Type')
        .setMinApi(51)
        .setEditable()
        .addEnumValue('Regression', 'Regression')
        .addEnumValue('Classification', 'Classification')
        .addEnumValue('Unknown', 'Unknown'),
    sourceType: new EnumXMLField('sourceType', 'Source Type')
        .setMinApi(51)
        .setEditable()
        .addEnumValue('Discovery', 'Discovery')
        .addEnumValue('User Upload', 'UserUpload'),
    status: new EnumXMLField('status', 'Status')
        .setMinApi(51)
        .setEditable()
        .addEnumValue('Disabled', 'Disabled')
        .addEnumValue('Enabled', 'Enabled'),
    trainingMetrics: new StringXMLField('trainingMetrics', 'Training Metrics')
        .setMinApi(51)
        .setEditable()
        .setJSON(),
};