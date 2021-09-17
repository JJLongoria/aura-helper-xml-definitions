const { StringXMLField, ObjectXMLField, ArrayXMLField, IntegerXMLField, BooleanXMLField, XMLDependencyField } = require('@aurahelper/core').Types;
const { MetadataTypes, DataValues } = require('@aurahelper/core').Values;

module.exports = {
    assignments: new ObjectXMLField('assignments', 'Assignments')
        .setMinApi(44)
        .setEditable()
        .setFieldKey('profiles')
        .setSortOrder(undefined)
        .addField('profiles', new ObjectXMLField('profiles', 'Profiles')
            .setEditable()
            .setFieldKey('profile')
            .setSortOrder(undefined)
            .addField('profile', new ArrayXMLField('profile', 'Profile')
                .setEditable()
            )
        )
        .addField('users', new ObjectXMLField('users', 'Users')
            .setEditable()
            .setFieldKey('user')
            .setSortOrder(undefined)
            .addField('user', new ArrayXMLField('user', 'User')
                .setEditable()
            )
        ),
    capacity: new IntegerXMLField('capacity', 'Capacity')
        .setMinApi(44)
        .setEditable()
        .setRequired(),
    declineReasons: new StringXMLField('declineReasons', 'Decline Reasons')
        .setMinApi(44)
        .setEditable()
        .setMetadataType(MetadataTypes.PRESENCE_DECLINE_REASON),
    enableAutoAccept: new BooleanXMLField('enableAutoAccept', 'Enable Auto Accept')
        .setMinApi(44)
        .setEditable()
        .addDependencyField(new XMLDependencyField('enableDecline', false, DataValues.AVAILABLE)),
    enableDecline: new BooleanXMLField('enableDecline', 'Enable Decline')
        .setMinApi(44)
        .setEditable()
        .addDependencyField(new XMLDependencyField('enableAutoAccept', false, DataValues.AVAILABLE)),
    enableDeclineReason: new BooleanXMLField('enableDeclineReason', 'Enable Decline Reason')
        .setMinApi(44)
        .setEditable(),
    enableDisconnectSound: new BooleanXMLField('enableDisconnectSound', 'Enable Disconnect Sound')
        .setMinApi(44)
        .setEditable(),
    enableRequestSound: new BooleanXMLField('enableRequestSound', 'Enable Request Sound')
        .setMinApi(44)
        .setEditable()
        .setDefaultValue(true),
    label: new StringXMLField('label', 'Label')
        .setMinApi(44)
        .setEditable(),
    presenceStatusOnDecline: new StringXMLField('presenceStatusOnDecline', 'Presence Status On Decline')
        .setMinApi(44)
        .setEditable()
        .addDependencyField(new XMLDependencyField('enableDecline', true, DataValues.AVAILABLE)),
    presenceStatusOnPushTimeout: new StringXMLField('presenceStatusOnPushTimeout', 'Presence Status On Push Timeout')
        .setMinApi(44)
        .setEditable()
}