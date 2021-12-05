import { StringXMLField, EnumXMLField } from '@aurahelper/core';

export const MktDataTranObject = {
    creationType: new EnumXMLField('creationType', 'Creation Type')
        .setEditable()
        .setMinApi(52)
        .setRequired()
        .addEnumValue('Taxonomy', 'Taxonomy'),
    dataSource: new StringXMLField('dataSource', 'Data Source')
        .setEditable()
        .setMinApi(52),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setEditable()
        .setMinApi(52)
        .setRequired(),
    objectCategory: new EnumXMLField('objectCategory', 'Object Category')
        .setEditable()
        .setMinApi(52)
        .setRequired()
        .addEnumValue('Profile', 'Profile')
        .addEnumValue('Engagement', 'Engagement')
        .addEnumValue('Other', 'Other'),

}