import { ObjectXMLField } from '@aurahelper/core';
import { workflowActionReference } from './workflowActionReference';

export function approvalAction(criteriaName: string, criteriaLabel: string, minApi?: number | string) {
    return new ObjectXMLField(criteriaName, criteriaLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('action')
        .setSortOrder(undefined)
        .addField('action', workflowActionReference('action', 'Action', minApi));
} 