import { StringXMLField, ArrayXMLField, MetadataTypes } from '@aurahelper/core';

export const CompactLayout = {
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(29)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(29)
        .setEditable()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique()
        .setMetadataType(MetadataTypes.COMPACT_LAYOUT),
    label: new StringXMLField('label', 'Label')
        .setMinApi(29)
        .setEditable(),
};