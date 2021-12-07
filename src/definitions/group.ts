import { StringXMLField, BooleanXMLField } from '@aurahelper/core';

export const Group = {
    doesIncludeBosses: new BooleanXMLField('doesIncludeBosses', 'Does Include Bosses')
        .setMinApi(24)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(24)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(24)
        .setEditable()
        .setRequired()
};