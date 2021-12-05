import { StringXMLField, BooleanXMLField, EnumXMLField, ObjectXMLField } from '@aurahelper/core';

export const FeatureParameterBoolean = {
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
    value: new BooleanXMLField('value', 'Value')
        .setMinApi(41)
        .setEditable(),
}