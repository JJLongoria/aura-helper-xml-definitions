import { StringXMLField } from '@aurahelper/core';

export const SharingRecalculation = {
    className: new StringXMLField('className', 'Class Name')
        .setMinApi(14)
        .setEditable()
        .setRequired()
};