const { StringXMLField, ArrayXMLField, EnumXMLField } = require('../factory/xmlFactory');

module.exports = {
    apexClass: new StringXMLField('apexClass', 'Apex Class')
        .setMinApi(42)
        .setEditable()
        .setRequired(),
    attachmentOption: new EnumXMLField('attachmentOption', 'Attachment Option')
        .setMinApi(42)
        .setEditable()
        .setRequired()
        .addEnumValue('None', 'None')
        .addEnumValue('No Content', 'NoContent')
        .addEnumValue('No Content', 'NoContent')
        .addEnumValue('Text Only', 'TextOnly')
        .addEnumValue('Binary Only', 'BinaryOnly')
        .addEnumValue('All', 'All'),
    authenticationFailureAction: new EnumXMLField('authenticationFailureAction', 'Authentication Failure Action')
        .setMinApi(42)
        .setEditable()
        .setRequired()
        .addEnumValue('Use System Default', 'UseSystemDefault')
        .addEnumValue('Bounce', 'Bounce')
        .addEnumValue('Discard', 'Discard')
        .addEnumValue('Requeue', 'Requeue'),
    authorizationFailureAction: new EnumXMLField('authorizationFailureAction', 'Authorization Failure Action')
        .setMinApi(42)
        .setEditable()
        .setRequired()
        .addEnumValue('Use System Default', 'UseSystemDefault')
        .addEnumValue('Bounce', 'Bounce')
        .addEnumValue('Discard', 'Discard')
        .addEnumValue('Requeue', 'Requeue'),
    authorizedSenders: new StringXMLField('authorizedSenders', 'Authorized Senders')
        .setMinApi(42)
        .setEditable(),
    emailServicesAddresses: new ArrayXMLField('emailServicesAddresses', 'Email Services Addresses')
        .setMinApi(42)
        .setEditable()
        .setFieldKey('developerName')
        .addField('authorizedSenders', new StringXMLField('authorizedSenders', 'Authorized Senders')
            .setEditable()
        )
        .addField('developerName', new StringXMLField('developerName', 'Developer Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('isActive', new StringXMLField('isActive', 'Is Active')
            .setEditable()
        )
        .addField('localPart', new StringXMLField('localPart', 'Local Part')
            .setEditable()
            .setRequired()
        )
        .addField('runAsUser', new StringXMLField('runAsUser', 'Run As User')
            .setEditable()
            .setRequired()
            .linkFieldToSObject('User', 'Username')
        ),
    errorRoutingAddress: new StringXMLField('errorRoutingAddress', 'Error Routing Address')
        .setMinApi(42)
        .setEditable(),
    functionInactiveAction: new EnumXMLField('functionInactiveAction', 'Function Inactive Action')
        .setMinApi(42)
        .setEditable()
        .addEnumValue('Use System Default', 'UseSystemDefault')
        .addEnumValue('Bounce', 'Bounce')
        .addEnumValue('Discard', 'Discard')
        .addEnumValue('Requeue', 'Requeue'),
    functionName: new StringXMLField('functionName', 'Function Name')
        .setMinApi(42)
        .setEditable()
        .setRequired()
        .setMaxLength(64),
    isActive: new StringXMLField('isActive', 'Is Active')
        .setMinApi(42)
        .setEditable(),
    isAuthenticationRequired: new StringXMLField('isAuthenticationRequired', 'Is Authentication Required')
        .setMinApi(42)
        .setEditable(),
    isErrorRoutingEnabled: new StringXMLField('isErrorRoutingEnabled', 'Is Error Routing Enabled')
        .setMinApi(42)
        .setEditable(),
    isTextAttachmentsAsBinary: new StringXMLField('isTextAttachmentsAsBinary', 'Is Text Attachments As Binary')
        .setMinApi(42)
        .setEditable(),
    isTlsRequired: new StringXMLField('isTlsRequired', 'Is TLS Required')
        .setMinApi(42)
        .setEditable(),
    overLimitAction: new EnumXMLField('overLimitAction', 'Over Limit Action')
        .setMinApi(42)
        .setEditable()
        .addEnumValue('Use System Default', 'UseSystemDefault')
        .addEnumValue('Bounce', 'Bounce')
        .addEnumValue('Discard', 'Discard')
        .addEnumValue('Requeue', 'Requeue'),
}