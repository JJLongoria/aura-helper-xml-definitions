const { StringXMLField, EnumXMLField, BooleanXMLField, XMLDependencyField } = require('@aurahelper/core').Types;
const { DataValues } = require('@aurahelper/core').Values;

module.exports = {
    authorizeUrl: new StringXMLField('authorizeUrl', 'Authorize URL')
        .setMinApi(29)
        .setEditable()
        .setRequired()
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.AVAILABLE)
            .setMinApi(29)
            .setMaxApi(32)
        )
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.NOT_AVAILABLE)
            .setMinApi(33)
        ),
    consumerKey: new StringXMLField('consumerKey', 'Consumer Key')
        .setMinApi(27)
        .setEditable()
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.AVAILABLE)
            .setMinApi(29)
            .setMaxApi(32)
        )
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.NOT_AVAILABLE)
            .setMinApi(33)
        ),
    consumerSecret: new StringXMLField('consumerSecret', 'Consumer Secret')
        .setMinApi(27)
        .setEditable()
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.AVAILABLE)
            .setMinApi(29)
            .setMaxApi(32)
        )
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.NOT_AVAILABLE)
            .setMinApi(33)
        ),
    customMetadataTypeRecord: new StringXMLField('customMetadataTypeRecord', 'Custom Metadata Type Record')
        .setMinApi(36)
        .setEditable()
        .setRequired(),
    defaultScopes: new StringXMLField('defaultScopes', 'Default Scopes')
        .setMinApi(29)
        .setEditable()
        .setRequired()
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.AVAILABLE)
            .setMinApi(29)
            .setMaxApi(32)
        )
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.NOT_AVAILABLE)
            .setMinApi(33)
        ),
    errorUrl: new StringXMLField('errorUrl', 'Error URL')
        .setMinApi(27)
        .setEditable(),
    executionUser: new StringXMLField('executionUser', 'Execution User')
        .setMinApi(27)
        .setEditable()
        .setRequired()
        .linkFieldToSObject('User'),
    friendlyName: new StringXMLField('friendlyName', 'Friendly Name')
        .setMinApi(27)
        .setEditable()
        .setRequired(),
    iconUrl: new StringXMLField('iconUrl', 'Icon URL')
        .setMinApi(32)
        .setEditable(),
    idTokenIssuer: new StringXMLField('idTokenIssuer', 'Id Token Issuer')
        .setMinApi(30)
        .setEditable(),
    includeOrgIdInIdentifier: new BooleanXMLField('includeOrgIdInIdentifier', 'Include Org Id In Identifier')
        .setMinApi(32)
        .setEditable(),
    LinkKickoffUrl: new StringXMLField('LinkKickoffUrl', 'Link Kickoff URL')
        .setMinApi(43)
        .setEditable(),
    logoutUrl: new StringXMLField('logoutUrl', 'Logout URL')
        .setMinApi(33)
        .setEditable(),
    oauthKickoffUrl: new StringXMLField('oauthKickoffUrl', 'Oauth Kickoff URL')
        .setMinApi(43),
    plugin: new StringXMLField('plugin', 'Plugin')
        .setMinApi(36)
        .setEditable(),
    portal: new StringXMLField('portal', 'Portal')
        .setMinApi(27)
        .setEditable(),
    providerType: new EnumXMLField('providerType', 'Provider Type')
        .setMinApi(27)
        .setEditable()
        .addEnumValue('Apple', 'Apple')
        .addEnumValue('Facebook', 'Facebook')
        .addEnumValue('Google', 'Google')
        .addEnumValue('Salesforce', 'Salesforce')
        .addEnumValue('Janrain', 'Janrain')
        .addEnumValue('LinkedIn', 'LinkedIn', 32)
        .addEnumValue('Twitter', 'Twitter', 32)
        .addEnumValue('Open Id Connect', 'OpenIdConnect', 29)
        .addEnumValue('Microsoft Access Control Service', 'MicrosoftACS', 31)
        .addEnumValue('GitHub', 'GitHub', 35)
        .addEnumValue('Custom', 'Custom', 36),
    registrationHandler: new StringXMLField('registrationHandler', 'Registration Handler')
        .setMinApi(27)
        .setEditable(),
    sendAccessTokenInHeader: new BooleanXMLField('sendAccessTokenInHeader', 'Send Access Token In Header')
        .setMinApi(30)
        .setEditable(),
    sendClientCredentialsInHeader: new BooleanXMLField('sendClientCredentialsInHeader', 'Send Client Credentials In Header')
        .setMinApi(30)
        .setEditable()
        .setRequired(),
    sendSecretInApis: new BooleanXMLField('sendSecretInApis', 'Send Secret In Apis')
        .setMinApi(47)
        .setEditable(),
    SsoKickoffUrl: new StringXMLField('SsoKickoffUrl', 'Single Sign-On Kickoff URL')
        .setMinApi(43)
        .setEditable(),
    tokenUrl: new StringXMLField('tokenUrl', 'Token URL')
        .setMinApi(29)
        .setEditable()
        .setRequired()
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.AVAILABLE)
            .setMinApi(29)
            .setMaxApi(32)
        )
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.NOT_AVAILABLE)
            .setMinApi(33)
        ),
    userInfoUrl: new StringXMLField('userInfoUrl', 'User Info URL')
        .setMinApi(29)
        .setEditable()
        .setRequired()
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.AVAILABLE)
            .setMinApi(29)
            .setMaxApi(32)
        )
        .addDependencyField(new XMLDependencyField('providerType', 'OpenIdConnect', DataValues.NOT_AVAILABLE)
            .setMinApi(33)
        ),
}