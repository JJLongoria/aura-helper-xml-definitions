import { StringXMLField, ArrayXMLField, MetadataTypes, EnumXMLField } from '@aurahelper/core';

export const Index = {
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(41)
        .setEditable()
        .setFieldKey('name')
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('sortDirection', new EnumXMLField('sortDirection', 'Sort Direction')
            .setEditable()
            .setRequired()
            .setDefaultValue('ASC')
            .addEnumValue('ASC', 'ASC')
            .addEnumValue('DESC', 'DESC')
        ),
    label: new StringXMLField('label', 'Label')
        .setMinApi(41)
        .setEditable()
        .setRequired()
};