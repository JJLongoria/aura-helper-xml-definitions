import { StringXMLField, BooleanXMLField, XMLDependencyField, MetadataTypes, EnumXMLField, IntegerXMLField } from '@aurahelper/core';

export const ProfilePasswordPolicy = {
    forgotPasswordRedirect: new BooleanXMLField('forgotPasswordRedirect', 'Forgot Password Redirect')
        .setMinApi(43)
        .setEditable()
        .setDefaultValue(false),
    lockoutInterval: new EnumXMLField('lockoutInterval', 'Lockout Interval')
        .setMinApi(40)
        .setEditable()
        .setRequired()
        .addEnumValue('None', '0')
        .addEnumValue('15 Minutes', '15')
        .addEnumValue('30 Minutes', '30')
        .addEnumValue('60 Minutes', '60'),
    maxLoginAttempts: new EnumXMLField('maxLoginAttempts', 'Max Login Attempts')
        .setMinApi(40)
        .setEditable()
        .setRequired()
        .addEnumValue('None', '0')
        .addEnumValue('3 Times', '3')
        .addEnumValue('5 Times', '5')
        .addEnumValue('10 Times', '10'),
    minimumPasswordLength: new IntegerXMLField('minimumPasswordLength', 'Minimum Password Length')
        .setMinApi(40)
        .setEditable()
        .setRequired()
        .setMinValue(5)
        .setMaxValue(50),
    minimumPasswordLifetime: new BooleanXMLField('minimumPasswordLifetime', 'Minimum Password Lifetime')
        .setMinApi(40)
        .setEditable(),
    obscure: new BooleanXMLField('obscure', 'Obscure')
        .setMinApi(40)
        .setEditable(),
    passwordComplexity: new EnumXMLField('passwordComplexity', 'Password Complexity')
        .setMinApi(40)
        .setEditable()
        .setRequired()
        .addEnumValue('Password can contain any type of character', '0')
        .addEnumValue('Password must contain at least one alphabetic character and 1 number', '1')
        .addEnumValue('Password must contain at least one alphabetic character, one number, and one of the following special characters: ! # $ % - _ = + < >', '2')
        .addEnumValue('Password must contain at least one number, one uppercase letter, and one lowercase letter', '3')
        .addEnumValue('Password must contain at least one number, one uppercase letter, one lowercase letter, and one of the following special characters: ! # $ % - _ = + < >', '4'),
    passwordExpiration: new EnumXMLField('passwordExpiration', 'Password Expiration')
        .setMinApi(40)
        .setEditable()
        .setRequired()
        .addEnumValue('Never', '0')
        .addEnumValue('30 Days', '30')
        .addEnumValue('60 Days', '60')
        .addEnumValue('90 Days', '90')
        .addEnumValue('360 Days', '360')
        .addDependencyField(new XMLDependencyField('passwordHistory', '0', '0')),
    passwordHistory: new IntegerXMLField('passwordHistory', 'Password History')
        .setMinApi(40)
        .setEditable()
        .setRequired(),
    passwordQuestion: new EnumXMLField('passwordQuestion', 'Password Question')
        .setMinApi(40)
        .setEditable()
        .addEnumValue('Password hint cannot contain the password', '0')
        .addEnumValue('No Restrictions', '1'),
    profile: new StringXMLField('profile', 'Profile')
        .setMinApi(40)
        .setEditable()
        .setMetadataType(MetadataTypes.PROFILE)

};