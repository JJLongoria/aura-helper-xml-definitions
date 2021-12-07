import { StringXMLField, BooleanXMLField, MetadataTypes, EnumXMLField } from '@aurahelper/core';

export const SamlSsoConfig = {
    attributeNameIdFormat: new StringXMLField('attributeNameIdFormat', 'Attribute Name Id Format')
        .setMinApi(28)
        .setEditable(),
    attributeName: new StringXMLField('attributeName', 'Attribute Name')
        .setMinApi(28)
        .setEditable(),
    decryptionCertificate: new StringXMLField('decryptionCertificate', 'Decryption Certificate')
        .setMinApi(30)
        .setEditable(),
    errorUrl: new StringXMLField('errorUrl', 'Error URL')
        .setMinApi(28)
        .setEditable(),
    executionUserId: new StringXMLField('executionUserId', 'Execution User Id')
        .setMinApi(28)
        .setEditable()
        .linkFieldToSObject('User'),
    identityLocation: new EnumXMLField('identityLocation', 'Identity Location')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('Subject Name Id', 'SubjectNameId')
        .addEnumValue('Attribute', 'Attribute'),
    identityMapping: new EnumXMLField('identityMapping', 'Identity Mapping')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('Username', 'Username')
        .addEnumValue('Federation Id', 'FederationId')
        .addEnumValue('User Id', 'UserId'),
    issuer: new StringXMLField('issuer', 'Issuer')
        .setMinApi(28)
        .setEditable(),
    loginUrl: new StringXMLField('loginUrl', 'Login URL')
        .setMinApi(28)
        .setEditable(),
    logoutUrl: new StringXMLField('logoutUrl', 'Logout URL')
        .setMinApi(28)
        .setEditable(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(28)
        .setEditable()
        .setRequired()
        .setUnique(),
    oauthTokenEndpoint: new StringXMLField('oauthTokenEndpoint', 'Oauth Token Endpoint')
        .setMinApi(28)
        .setEditable(),
    redirectBinding: new BooleanXMLField('redirectBinding', 'Redirect Binding')
        .setMinApi(28)
        .setEditable(),
    requestSignatureMethod: new EnumXMLField('requestSignatureMethod', 'Request Signatur eMethod')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('RSA-SHA1', 'RSA-SHA1')
        .addEnumValue('RSA-SHA256', 'RSA-SHA256'),
    requestSigningCertId: new StringXMLField('requestSigningCertId', 'Request Signing Certificate Id')
        .setMinApi(28)
        .setEditable()
        .setMetadataType(MetadataTypes.CERTIFICATE),
    salesforceLoginUrl: new StringXMLField('salesforceLoginUrl', 'Salesforce Login URL')
        .setMinApi(28)
        .setEditable(),
    samlEntityId: new StringXMLField('samlEntityId', 'SAML Entity Id')
        .setMinApi(28)
        .setEditable(),
    samlJitHandlerId: new StringXMLField('samlJitHandlerId', 'SAML Jit Handler Id')
        .setMinApi(28)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_CLASS),
    samlVersion: new EnumXMLField('samlVersion', 'SAML Version')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('SAML 1.1', 'SAML1_1')
        .addEnumValue('SAML 2.0', 'SAML2_0'),
    singleLogoutBinding: new EnumXMLField('singleLogoutBinding', 'Single Logout Binding')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('Redirect Binding', 'RedirectBinding')
        .addEnumValue('Post Binding', 'PostBinding'),
    singleLogoutUrl: new StringXMLField('singleLogoutUrl', 'Single Logout URL')
        .setMinApi(28)
        .setEditable(),
    useConfigRequestMethod: new BooleanXMLField('useConfigRequestMethod', 'Use Config Request Method')
        .setMinApi(28)
        .setEditable(),
    userProvisioning: new BooleanXMLField('userProvisioning', 'User Provisioning')
        .setMinApi(28)
        .setEditable(),
    validationCert: new StringXMLField('validationCert', 'ValidationCert')
        .setMinApi(28)
        .setEditable(),
};