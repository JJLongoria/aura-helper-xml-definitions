import { StringXMLField, BooleanXMLField, MetadataTypes } from '@aurahelper/core';
import { picklistValues } from './types/picklistValues';

export const BusinessProcess = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(17)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(17)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setMetadataType(MetadataTypes.BUSINESS_PROCESS),
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(17)
        .setEditable(),
    namespacePrefix: new StringXMLField('namespacePrefix', 'Namespace Prefix')
        .setMinApi(17)
        .setEditable(),
    values: picklistValues('values', 'Values', 17)
};