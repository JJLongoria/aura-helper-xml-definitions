import { StringXMLField, EnumXMLField } from '@aurahelper/core';

export const StaticResource = {
    cacheControl: new EnumXMLField('cacheControl', 'Cache Control')
        .setMinApi(14)
        .setEditable()
        .setRequired()
        .addEnumValue('Private', 'Private')
        .addEnumValue('Public', 'Public'),
    content: new StringXMLField('content', 'Content')
        .setMinApi(12)
        .setEditable()
        .setBase64(),
    contentType: new StringXMLField('contentType', 'Content Type')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(12)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .setUnique()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
};