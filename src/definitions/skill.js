const { StringXMLField, ObjectXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    assignments: new ObjectXMLField('assignments', 'Assignments')
        .setMinApi(28)
        .setEditable()
        .addField('profiles', new ObjectXMLField('profiles', 'Profiles')
            .setEditable()
            .addField('profile', new StringXMLField('profile', 'Profile')
                .setEditable()
                .setMetadataType(MetadataTypes.PROFILE)
            )
        )
        .addField('users', new ObjectXMLField('users', 'Users')
            .setEditable()
            .addField('user', new StringXMLField('user', 'User')
                .setEditable()
                .linkFieldToSObject('User')
            )
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(28)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(28)
        .setEditable()
        .setRequired()
}