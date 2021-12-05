import { StringXMLField, BooleanXMLField, ArrayXMLField, DataValues, XMLDependencyField } from '@aurahelper/core';

export const EventSubscription = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(41)
        .setMaxApi(45),
    eventParameters: new ArrayXMLField('eventParameters', 'Event Parameters')
        .setMinApi(41)
        .setMaxApi(45)
        .setEditable()
        .setFieldKey('parameterName')
        .addField('parameterName', new StringXMLField('parameterName', 'Parameter Name')
            .setEditable()
            .setRequired()
        )
        .addField('parameterValue', new StringXMLField('parameterValue', 'Parameter Value')
            .setEditable()
            .addDependencyField(new XMLDependencyField('parameterName', DataValues.NOT_NULL, DataValues.NOT_NULL))
        ),
    eventType: new StringXMLField('eventType', 'Event Type')
        .setMinApi(41)
        .setMaxApi(45)
        .setEditable()
        .setRequired(),
    referenceData: new StringXMLField('referenceData', 'Reference Data')
        .setMinApi(41)
        .setMaxApi(45)
        .setEditable()
        .setRequired()
}