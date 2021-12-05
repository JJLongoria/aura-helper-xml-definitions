import { StringXMLField, EnumXMLField, DataValues, ArrayXMLField } from '@aurahelper/core';

export const AnalyticSnapshot = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(16)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(16)
        .setEditable()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    groupColumn: new StringXMLField('groupColumn', 'Group Column')
        .setMinApi(16)
        .setEditable(),
    mappings: new ArrayXMLField('mappings', 'Mappings')
        .setMinApi(16)
        .setEditable()
        .setFieldKey('sourceField')
        .addField('aggregateType', new EnumXMLField('aggregateType', 'Aggregate Type')
            .setEditable()
            .setRequired()
            .setDefaultValue('None')
            .setEnumValues(DataValues.REPORT_SUMMARY_TYPES)
        )
        .addField('sourceField', new StringXMLField('sourceField', 'Source Field')
            .setEditable()
            .setRequired()
        )
        .addField('aggregateType', new EnumXMLField('aggregateType', 'Aggregate Type')
            .setEditable()
            .setRequired()
            .setDefaultValue('snapshot')
            .addEnumValue('Snapshot', 'snapshot')
            .addEnumValue('Summary', 'summary')
            .addEnumValue('Tabular', 'tabular')
        )
        .addField('targetField', new StringXMLField('targetField', 'Target Field')
            .setEditable()
            .setRequired()
        ),
    name: new StringXMLField('name', 'Name')
        .setMinApi(16)
        .setEditable()
        .setUnique()
        .setRequired(),
    runningUser: new StringXMLField('runningUser', 'Running User')
        .setMinApi(16)
        .setEditable(),
    sourceReport: new StringXMLField('sourceReport', 'Source Report')
        .setMinApi(16)
        .setEditable()
        .setRequired(),
    targetObject: new StringXMLField('targetObject', 'Target Object')
        .setMinApi(16)
        .setEditable()
        .setRequired(),
}