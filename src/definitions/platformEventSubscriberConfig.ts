import { StringXMLField, BooleanXMLField, IntegerXMLField } from '@aurahelper/core';

export const PlatformEventSubscriptionConfig = {
    batchSize: new IntegerXMLField('batchSize', 'Batch Size')
        .setMinApi(51)
        .setEditable()
        .setDefaultValue(2000)
        .setMinValue(1)
        .setMaxValue(2000),
    isProtected: new BooleanXMLField('isProtected', 'Is Protected')
        .setMinApi(51)
        .setEditable(),
    masterLabel: new BooleanXMLField('masterLabel', 'Master Label')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    platformEventConsumer: new BooleanXMLField('platformEventConsumer', 'Platform Event Consumer')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    user: new StringXMLField('user', 'User')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .linkFieldToSObject('User', 'Username')
};