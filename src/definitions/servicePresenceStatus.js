const { StringXMLField, ObjectXMLField } = require('@ah/core').Types;

module.exports = {
    channels: new ObjectXMLField('channels', 'Channels')
        .setMinApi(44)
        .setEditable()
        .addField('channel', new StringXMLField('channel', 'Channel')
            .setEditable()
        ),
    label: new StringXMLField('label', 'Label')
        .setMinApi(44)
        .setEditable()
        .setRequired()
}