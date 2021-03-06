const { StringXMLField, ObjectXMLField, ArrayXMLField, BooleanXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    notificationTypeSettings: new ArrayXMLField('notificationTypeSettings', 'Notification Type Settings')
        .setMinApi(48)
        .setEditable()
        .addField('notificationType', new StringXMLField('notificationType', 'Notification Type')
            .setEditable()
            .setRequired()
        )
        .addField('appSettings', new ArrayXMLField('appSettings', 'App Settings')
            .setEditable()
            .addField('connectedAppName', new StringXMLField('connectedAppName', 'Connected App Name')
                .setEditable()
                .setRequired()
                .setMetadataType(MetadataTypes.CONNECTED_APP)
            )
            .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
                .setEditable()
            )
        )
        .addField('notificationChannels', new ObjectXMLField('notificationChannels', 'Notification Channels')
            .setEditable()
            .addField('desktopEnabled', new BooleanXMLField('desktopEnabled', 'Desktop Enabled')
                .setEditable()
            )
            .addField('mobileEnabled', new BooleanXMLField('mobileEnabled', 'Mobile Enabled')
                .setEditable()
            )
        )
}