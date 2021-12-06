import { StringXMLField, ObjectXMLField } from '@aurahelper/core';

export const ServicePresenceStatus = {
    channels: new ObjectXMLField('channels', 'Channels')
        .setMinApi(44)
        .setEditable()
        .setFieldKey('channel')
        .setSortOrder(undefined)
        .addField('channel', new StringXMLField('channel', 'Channel')
            .setEditable()
        ),
    label: new StringXMLField('label', 'Label')
        .setMinApi(44)
        .setEditable()
        .setRequired()
}