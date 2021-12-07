import { StringXMLField, ArrayXMLField, EnumXMLField } from '@aurahelper/core';

export const EventDelivery = {
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
        ),
    eventSubscription: new StringXMLField('eventSubscription', 'Event Subscription')
        .setMinApi(41)
        .setMaxApi(45)
        .setEditable()
        .setRequired(),
    referenceData: new StringXMLField('referenceData', 'Reference Data')
        .setMinApi(41)
        .setMaxApi(45)
        .setEditable(),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(41)
        .setMaxApi(45)
        .setEditable()
        .setRequired()
        .addEnumValue('Start Flow', 'StartFlow')
        .addEnumValue('Resume Flow', 'ResumeFlow'),

};