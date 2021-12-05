import { StringXMLField, BooleanXMLField, MetadataTypes, ObjectXMLField } from '@aurahelper/core';

export const DecisionTableDatasetLink = {
    decisionTableName: new StringXMLField('decisionTableName', 'Decision Table Name')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.DECISION_TABLE),
    decisionTblDatasetParameters: new ObjectXMLField('decisionTblDatasetParameters', 'Decision Table Dataset Parameters')
        .setMinApi(51)
        .setEditable()
        .setFieldKey('fieldName')
        .addField('datasetFieldName', new StringXMLField('datasetFieldName', 'Dataset Field Name')
            .setEditable()
            .setRequired()
        )
        .addField('fieldName', new StringXMLField('fieldName', 'Field Name')
            .setEditable()
            .setRequired()
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(51)
        .setEditable(),
    isDefault: new BooleanXMLField('isDefault', 'Is Default')
        .setMinApi(51)
        .setEditable(),
    setupName: new StringXMLField('setupName', 'Setup Name')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setUnique(),
    sourceObject: new StringXMLField('sourceObject', 'Source Object')
        .setMinApi(51)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
}