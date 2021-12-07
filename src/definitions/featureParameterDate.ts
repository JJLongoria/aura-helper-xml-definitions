import { StringXMLField, EnumXMLField, ObjectXMLField, DateTimeXMLField } from '@aurahelper/core';

export const FeatureParameterDate = {
    dataFlowDirection: new ObjectXMLField('dataFlowDirection', 'Data Flow Direction')
        .setMinApi(41)
        .setEditable()
        .setFieldKey('FeatureParameterDataFlowDirection')
        .setSortOrder(undefined)
        .addField('FeatureParameterDataFlowDirection', new EnumXMLField('FeatureParameterDataFlowDirection', 'Feature Parameter Data Flow Direction')
            .setEditable()
            .addEnumValue('License Management Org To Subscriber', 'LmoToSubscriber')
            .addEnumValue('Subscriber To License Management Org', 'SubscriberToLmo')
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(41)
        .setEditable()
        .setRequired()
        .setUnique(),
    value: new DateTimeXMLField('value', 'Value')
        .setMinApi(41)
        .setEditable()
        .setFormat('yyyy-mm-dd'),
};