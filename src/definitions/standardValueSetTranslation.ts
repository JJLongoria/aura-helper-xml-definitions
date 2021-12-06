import { StringXMLField, ArrayXMLField } from '@aurahelper/core';

export const StandardValueSetTranslation = {
    valueTranslation: new ArrayXMLField('valueTranslation', 'Value Translation')
        .setMinApi(38)
        .setEditable()
        .setFieldKey('masterLabel')
        .setSortOrder(undefined)
        .addField('masterLabel', new StringXMLField('masterLabel', 'Master Label')
            .setEditable()
            .setRequired()
        )
        .addField('translation', new StringXMLField('translation', 'Translation')
            .setEditable()
        )
}