import { StringXMLField, ArrayXMLField } from '@aurahelper/core';

export const BrandingSet = {
    brandingSetProperty: new ArrayXMLField('brandingSetProperty', 'Branding Set Property')
        .setMinApi(40)
        .setEditable()
        .setFieldKey('propertyName')
        .addField('propertyName', new StringXMLField('propertyName', 'Property Name')
            .setEditable()
            .setRequired()
        )
        .addField('propertyValue', new StringXMLField('propertyValue', 'Property Value')
            .setEditable()
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(40)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(40)
        .setEditable()
        .setRequired(),
    type: new StringXMLField('type', 'Type')
        .setMinApi(40)
        .setEditable()
};