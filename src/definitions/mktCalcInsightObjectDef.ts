import { StringXMLField, EnumXMLField } from '@aurahelper/core';

export const MktCalcInsightObjectDef = {
    creationType: new EnumXMLField('creationType', 'Creation Type')
        .setEditable()
        .setMinApi(52)
        .setRequired()
        .addEnumValue('Custom', 'Custom'),
    description: new StringXMLField('description', 'Description')
        .setEditable()
        .setMinApi(52),
    expression: new StringXMLField('expression', 'Expression')
        .setEditable()
        .setMinApi(52)
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setEditable()
        .setMinApi(52)
        .setRequired()

}