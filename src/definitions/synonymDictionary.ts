import { BooleanXMLField, ArrayXMLField, DataValues, EnumXMLField, ObjectXMLField } from '@aurahelper/core';

export const SynonymDictionary = {
    groups: new ObjectXMLField('groups', 'Groups')
        .setMinApi(29)
        .setEditable()
        .setFieldKey('languages')
        .setSortOrder(undefined)
        .addField('languages', new EnumXMLField('languages', 'Languages')
            .setEditable()
            .setRequired()
            .setEnumValues(DataValues.SF_LANGUAGES)
        )
        .addField('terms', new ArrayXMLField('terms', 'Terms')
            .setEditable()
            .setRequired()
        ),
    isProtected: new BooleanXMLField('isProtected', 'Is Protected')
        .setMinApi(29)
        .setEditable(),
    label: new BooleanXMLField('label', 'Label')
        .setMinApi(29)
        .setEditable()
        .setRequired()
};