import { StringXMLField, BooleanXMLField, ArrayXMLField } from '@aurahelper/core';

export const PostTemplate = {
    default: new BooleanXMLField('default', 'Default')
        .setMinApi(29)
        .setEditable()
        .setRequired(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(29)
        .setEditable(),
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(29)
        .setEditable()
        .setRequired(),
    label: new ArrayXMLField('label', 'Label')
        .setMinApi(29)
        .setEditable()
        .setRequired()
}