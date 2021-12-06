import { StringXMLField } from '@aurahelper/core';

export const PresenseDeclineReason = {
    label: new StringXMLField('label', 'Label')
        .setMinApi(44)
        .setEditable()
        .setRequired()
}