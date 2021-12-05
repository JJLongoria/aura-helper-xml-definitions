import { StringXMLField, ArrayXMLField } from '@aurahelper/core';

export const KeywordList = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(36)
        .setEditable(),
    keywords: new ArrayXMLField('keywords', 'Keywords')
        .setMinApi(36)
        .setEditable()
        .setFieldKey('keyword')
        .addField('keyword', new StringXMLField('keyword', 'Keyword')
            .setEditable()
            .setRequired()
            .setMaxLength(100)
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(36)
        .setEditable()
        .setRequired()
}