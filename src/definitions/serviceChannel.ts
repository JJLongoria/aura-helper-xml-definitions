import { StringXMLField, BooleanXMLField, ArrayXMLField, IntegerXMLField } from '@aurahelper/core';

export const ServiceChannel = {
    doesMinimizeWidgetOnAccept: new BooleanXMLField('doesMinimizeWidgetOnAccept', 'Does Minimize Widget On Accept')
        .setMinApi(48)
        .setEditable(),
    interactionComponent: new BooleanXMLField('interactionComponent', 'Interaction Component')
        .setMinApi(44)
        .setEditable(),
    label: new BooleanXMLField('label', 'Label')
        .setMinApi(44)
        .setEditable()
        .setRequired(),
    relatedEntityType: new BooleanXMLField('relatedEntityType', 'Related Entity Type')
        .setMinApi(44)
        .setEditable()
        .setRequired(),
    secondaryRoutingPriorityField: new BooleanXMLField('secondaryRoutingPriorityField', 'Secondary Routing Priority Field')
        .setMinApi(47)
        .setEditable(),
    serviceChannelFieldPriorities: new ArrayXMLField('serviceChannelFieldPriorities', 'Service Channel Field Priorities')
        .setMinApi(47)
        .setEditable()
        .setRequired()
        .setFieldKey('value')
        .setSortOrder(undefined)
        .addField('priority', new IntegerXMLField('priority', 'Priority')
            .setEditable()
            .setRequired()
        )
        .addField('value', new StringXMLField('value', 'Value')
            .setEditable()
            .setRequired()
        )
}