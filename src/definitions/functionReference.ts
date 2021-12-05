import { StringXMLField } from '@aurahelper/core';

export const FunctionReference = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(52)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(52)
        .setEditable(),
    permissionSet: new StringXMLField('permissionSet', 'Permission Set')
        .setMinApi(52)
        .setEditable(),
};