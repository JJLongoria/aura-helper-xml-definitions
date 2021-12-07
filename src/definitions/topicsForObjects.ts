import { StringXMLField, MetadataTypes, EnumXMLField } from '@aurahelper/core';

export const TopicsForObjects = {
    enableTopics: new EnumXMLField('enableTopics', 'Enable Topics')
        .setMinApi(41)
        .setEditable()
        .setRequired()
        .addEnumValue('Account', 'Account')
        .addEnumValue('Asset', 'Asset')
        .addEnumValue('Campaign', 'Campaign')
        .addEnumValue('Case', 'Case')
        .addEnumValue('Contact', 'Contact')
        .addEnumValue('Content Document', 'Content Document')
        .addEnumValue('Contract', 'Contract')
        .addEnumValue('Event', 'Event')
        .addEnumValue('Lead', 'Lead')
        .addEnumValue('Opportunity', 'Opportunity')
        .addEnumValue('Order', 'Order')
        .addEnumValue('Solution', 'Solution')
        .addEnumValue('Task', 'Task'),
    entityApiName: new StringXMLField('entityApiName', 'Entity API Name')
        .setMinApi(41)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
};