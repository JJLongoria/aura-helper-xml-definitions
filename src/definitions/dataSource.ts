import { StringXMLField } from '@aurahelper/core';

export const DataSource = {
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
    prefix: new StringXMLField('prefix', 'Prefix')
        .setMinApi(50)
        .setEditable()
        .setRequired()
}