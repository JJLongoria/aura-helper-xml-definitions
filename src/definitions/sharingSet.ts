import { StringXMLField, ArrayXMLField, DataValues, MetadataTypes, EnumXMLField } from '@aurahelper/core';

export const SharingSet = {
    accessMappings: new ArrayXMLField('accessMappings', 'Access Mappings')
        .setMinApi(30)
        .setEditable()
        .setFieldKey('object')
        .setSortOrder(undefined)
        .addField('accessLevel', new EnumXMLField('accessLevel', 'Access Level')
            .setEditable()
            .setRequired()
            .addEnumValue('Read', 'Read')
            .addEnumValue('Edit', 'Edit')
        )
        .addField('objectField', new EnumXMLField('objectField', 'Object Field')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        )
        .addField('object', new EnumXMLField('object', 'Object')
            .setEditable()
            .setRequired()
            .addEnumValue('Account', 'Account')
            .addEnumValue('Campaign', 'Campaign')
            .addEnumValue('Contact', 'Contact')
            .addEnumValue('Case', 'Case')
            .addEnumValue('Opportunity', 'Opportunity')
            .addEnumValue('Order', 'Order')
            .addEnumValue('ServiceContract', 'ServiceContract')
            .addEnumValue('User', 'User')
            .addEnumValue('WorkOrder', 'WorkOrder')
            .addEnumValue('Custom Object', DataValues.METADATA_TYPE.replace('{0}', MetadataTypes.CUSTOM_OBJECT))
        )
        .addField('userField', new EnumXMLField('userField', 'User Field')
            .setEditable()
            .setRequired()
            .addEnumValue('Account', 'Account')
            .addEnumValue('Account Field', DataValues.METADATA_TYPE.replace('{0}', 'Account.' + MetadataTypes.CUSTOM_FIELD))
            .addEnumValue('Contact', 'Contact')
            .addEnumValue('Contact Field', DataValues.METADATA_TYPE.replace('{0}', 'Contact.' + MetadataTypes.CUSTOM_FIELD))
            .addEnumValue('Contact Related Account', DataValues.METADATA_TYPE.replace('{0}', 'Contact.Account.' + MetadataTypes.CUSTOM_OBJECT))
            .addEnumValue('Manager Account', 'Manager.Account')
            .addEnumValue('Manager Contact', 'Manager.Contact')
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(30)
        .setEditable()
        .setMaxLength(255),
    name: new StringXMLField('name', 'Name')
        .setMinApi(30)
        .setEditable()
        .setRequired()
        .setUnique(),
    profiles: new ArrayXMLField('profiles', 'Profiles')
        .setMinApi(30)
        .setEditable()
        .setMetadataType(MetadataTypes.PROFILE)
};