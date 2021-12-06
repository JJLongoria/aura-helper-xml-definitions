import { StringXMLField, BooleanXMLField, DataValues, MetadataTypes, EnumXMLField } from '@aurahelper/core';

export const Portal = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(15)
        .setEditable()
        .setRequired(),
    admin: new StringXMLField('admin', 'Admin')
        .setMinApi(15)
        .setEditable(),
    defaultLanguage: new EnumXMLField('defaultLanguage', 'Default Language')
        .setMinApi(15)
        .setEditable()
        .setEnumValues(DataValues.SF_LANGUAGES),
    description: new StringXMLField('description', 'Description')
        .setMinApi(15)
        .setEditable(),
    emailSenderAddress: new StringXMLField('emailSenderAddress', 'Email Sender Address')
        .setMinApi(15)
        .setEditable()
        .setRequired(),
    emailSenderName: new StringXMLField('emailSenderName', 'Email Sender Name')
        .setMinApi(15)
        .setEditable()
        .setRequired(),
    enableSelfCloseCase: new BooleanXMLField('enableSelfCloseCase', 'Enable Self Close Case')
        .setMinApi(15)
        .setEditable(),
    footerDocument: new StringXMLField('footerDocument', 'Footer Document')
        .setMinApi(15)
        .setEditable()
        .setMetadataType(MetadataTypes.DOCUMENT),
    forgotPassTemplate: new StringXMLField('forgotPassTemplate', 'Forgot Pass Template')
        .setMinApi(15)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(15)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    headerDocument: new StringXMLField('headerDocument', 'Header Document')
        .setMinApi(15)
        .setEditable()
        .setMetadataType(MetadataTypes.DOCUMENT),
    isSelfRegistrationActivated: new BooleanXMLField('isSelfRegistrationActivated', 'Is Self Registration Activated')
        .setMinApi(15)
        .setEditable(),
    loginHeaderDocument: new StringXMLField('loginHeaderDocument', 'Login Header Document')
        .setMinApi(15)
        .setEditable()
        .setMetadataType(MetadataTypes.DOCUMENT),
    logoDocument: new StringXMLField('logoDocument', 'Logo Document')
        .setMinApi(15)
        .setEditable()
        .setMetadataType(MetadataTypes.DOCUMENT),
    logoutUrl: new StringXMLField('logoutUrl', 'Logout URL')
        .setMinApi(15)
        .setEditable(),
    newCommentTemplate: new StringXMLField('newCommentTemplate', 'New Comment Template')
        .setMinApi(15)
        .setEditable(),
    newPassTemplate: new StringXMLField('newPassTemplate', 'New Pass Template')
        .setMinApi(15)
        .setEditable(),
    newUserTemplate: new StringXMLField('newUserTemplate', 'New User Template')
        .setMinApi(15)
        .setEditable(),
    ownerNotifyTemplate: new StringXMLField('ownerNotifyTemplate', 'Owner Notify Template')
        .setMinApi(15)
        .setEditable(),
    selfRegNewUserUrl: new StringXMLField('selfRegNewUserUrl', 'Self Registration New User URL')
        .setMinApi(15)
        .setEditable(),
    selfRegUserDefaultProfile: new StringXMLField('selfRegUserDefaultProfile', 'Self Registration User Default Profile')
        .setMinApi(15)
        .setEditable()
        .setMetadataType(MetadataTypes.PROFILE),
    selfRegUserDefaultRole: new EnumXMLField('selfRegUserDefaultRole', 'Self Registration User Default Role')
        .setMinApi(15)
        .setEditable()
        .addEnumValue('Executive', 'Executive')
        .addEnumValue('Manager', 'Manager')
        .addEnumValue('User', 'User')
        .addEnumValue('Person Account', 'PersonAccount'),
    selfRegUserTemplate: new StringXMLField('selfRegUserTemplate', 'Self Registration User Template')
        .setMinApi(15)
        .setEditable(),
    showActionConfirmation: new BooleanXMLField('showActionConfirmation', 'Show Action Confirmation')
        .setMinApi(15)
        .setEditable(),
    stylesheetDocument: new StringXMLField('stylesheetDocument', 'Stylesheet Document')
        .setMinApi(15)
        .setEditable(),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(15)
        .setEditable()
        .addEnumValue('Customer Success', 'CustomerSuccess')
        .addEnumValue('Partner', 'Partner'),
}