import { StringXMLField, BooleanXMLField, MetadataTypes, EnumXMLField, ObjectXMLField } from '@aurahelper/core';

export const ProfileSessionSetting = {
    forceLogout: new BooleanXMLField('forceLogout', 'Force Logout')
        .setMinApi(40)
        .setEditable()
        .setRequired(),
    profile: new StringXMLField('profile', 'Profile')
        .setMinApi(40)
        .setEditable()
        .setMetadataType(MetadataTypes.PROFILE),
    requiredSessionLevel: new ObjectXMLField('requiredSessionLevel', 'Required Session Level')
        .setMinApi()
        .setEditable()
        .setFieldKey('SessionSecurityLevel')
        .setSortOrder(undefined)
        .addField('SessionSecurityLevel', new EnumXMLField('SessionSecurityLevel', 'Session Security Level')
            .setEditable()
            .addEnumValue('High Assurance', 'HIGH_ASSURANCE')
            .addEnumValue('Standard', 'STANDARD')
            .addEnumValue('Low', 'LOW')
        ),
    sessionPersistence: new BooleanXMLField('sessionPersistence', 'Session Persistence')
        .setMinApi(40)
        .setEditable(),
    sessionTimeout: new EnumXMLField('sessionTimeout', 'Session Timeout')
        .setMinApi(40)
        .setEditable()
        .setRequired()
        .addEnumValue('15', '15')
        .addEnumValue('30', '30')
        .addEnumValue('60', '60')
        .addEnumValue('120', '120')
        .addEnumValue('240', '240')
        .addEnumValue('480', '480')
        .addEnumValue('720', '720')
        .addEnumValue('1440', '1440'),
    sessionTimeoutWarning: new BooleanXMLField('sessionTimeoutWarning', 'Session Timeout Warning')
        .setMinApi(40)
        .setEditable()
        .setRequired(),
}