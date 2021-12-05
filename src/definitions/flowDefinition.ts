import { StringXMLField, IntegerXMLField } from '@aurahelper/core';

export const FlowDefinition = {
    activeVersionNumber: new IntegerXMLField('activeVersionNumber', 'Active Version Number')
        .setMinApi(34)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(34)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(34)
        .setEditable()
        .setRequired()
        .setUnique(),
}