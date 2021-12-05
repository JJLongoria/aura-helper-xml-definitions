import { StringXMLField, ArrayXMLField, IntegerXMLField } from '@aurahelper/core';

export const CustomHelpMenuSection = {
    customHelpMenuItems: new ArrayXMLField('customHelpMenuItems', 'Custom Help Menu Items')
        .setMinApi(45)
        .setMaxItems(15)
        .setFieldKey('masterLabel')
        .addField('linkURL', new StringXMLField('linkURL', 'Link URL')
            .setEditable()
            .setRequired()
        )
        .addField('masterLabel', new StringXMLField('masterLabel', 'Master Label')
            .setEditable()
            .setRequired()
            .setMaxLength(100)
        )
        .addField('sortOrder', new IntegerXMLField('sortOrder', 'Sort Order')
            .setEditable()
            .setRequired()
            .setMinValue(1)
            .setMaxValue(15)
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(45)
        .setEditable()
        .setRequired()
        .setMaxLength(80)
}