import { StringXMLField, MetadataTypes, ObjectXMLField } from '@aurahelper/core';

export const Skill = {
    assignments: new ObjectXMLField('assignments', 'Assignments')
        .setMinApi(28)
        .setEditable()
        .setFieldKey('profiles')
        .setSortOrder(undefined)
        .addField('profiles', new ObjectXMLField('profiles', 'Profiles')
            .setEditable()
            .setFieldKey('profile')
            .setSortOrder(undefined)
            .addField('profile', new StringXMLField('profile', 'Profile')
                .setEditable()
                .setMetadataType(MetadataTypes.PROFILE)
            )
        )
        .addField('users', new ObjectXMLField('users', 'Users')
            .setEditable()
            .setFieldKey('user')
            .setSortOrder(undefined)
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
};