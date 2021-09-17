const { StringXMLField, EnumXMLField, BooleanXMLField } = require('@aurahelper/core').Types;

module.exports = {
    awsAccessKey: new StringXMLField('awsAccessKey', 'AWS Access Key')
        .setMinApi(46)
        .setEditable(),
    awsAccessSecret: new StringXMLField('awsAccessSecret', 'AWS Access Secret')
        .setMinApi(46)
        .setEditable(),
    awsRegion: new StringXMLField('awsRegion', 'AWS Region')
        .setMinApi(46)
        .setEditable(),
    awsService: new StringXMLField('awsService', 'AWS Service')
        .setMinApi(46)
        .setEditable(),
    allowMergeFieldsInBody: new BooleanXMLField('allowMergeFieldsInBody', 'Allow Merge Fields In Body')
        .setMinApi(41)
        .setEditable(),
    allowMergeFieldsInHeader: new BooleanXMLField('allowMergeFieldsInHeader', 'Allow Merge Fields In Header')
        .setMinApi(41)
        .setEditable(),
    authProvider: new StringXMLField('authProvider', 'Auth Provider')
        .setMinApi(33)
        .setEditable(),
    authTokenEndpointUrl: new StringXMLField('authTokenEndpointUrl', 'Auth Token Endpoint URL')
        .setMinApi(46)
        .setEditable(),
    certificate: new StringXMLField('certificate', 'Certificate')
        .setMinApi(33)
        .setEditable(),
    endpoint: new StringXMLField('endpoint', 'Endpoint')
        .setMinApi(33)
        .setEditable(),
    generateAuthorizationHeader: new BooleanXMLField('generateAuthorizationHeader', 'Generate Authorization Header')
        .setMinApi(41)
        .setEditable(),
    jwtAudience: new StringXMLField('jwtAudience', 'JWT Audience')
        .setMinApi(33)
        .setEditable(),
    jwtFormulaSubject: new StringXMLField('jwtFormulaSubject', 'JWT Formula Subject')
        .setMinApi(46)
        .setEditable(),
    jwtIssuer: new StringXMLField('jwtIssuer', 'JWT Issuer')
        .setMinApi(46)
        .setEditable(),
    jwtSigningCertificate: new StringXMLField('jwtSigningCertificate', 'JWT Signing Certificate')
        .setMinApi(46)
        .setEditable(),
    jwtTextSubject: new StringXMLField('jwtTextSubject', 'JWT Text Subject')
        .setMinApi(46)
        .setEditable(),
    jwtValidityPeriodSeconds: new StringXMLField('jwtValidityPeriodSeconds', 'JWT Validity Period Seconds')
        .setMinApi(46)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(33)
        .setEditable(),
    oauthRefreshToken: new StringXMLField('oauthRefreshToken', 'Oauth Refresh Token')
        .setMinApi(33)
        .setEditable(),
    oauthScope: new StringXMLField('oauthScope', 'OAuth Scope')
        .setMinApi(33)
        .setEditable(),
    oauthToken: new StringXMLField('oauthToken', 'OAuth Token')
        .setMinApi(33)
        .setEditable(),
    outboundNetworkConnection: new StringXMLField('outboundNetworkConnection', 'Outbound Network Connection')
        .setMinApi(49)
        .setEditable(),
    password: new StringXMLField('password', 'Password')
        .setMinApi(33)
        .setEditable(),
    principalType: new EnumXMLField('principalType', 'Principal Type')
        .setMinApi(33)
        .setEditable()
        .addEnumValue('Anonymous', 'Anonymous')
        .addEnumValue('Per User', 'PerUser')
        .addEnumValue('Named User', 'NamedUser'),
    protocol: new EnumXMLField('protocol', 'Protocol')
        .setMinApi(33)
        .setEditable()
        .addEnumValue('AWS Signature Version 4', 'AwsSig4')
        .addEnumValue('JWT', 'Jwt')
        .addEnumValue('JWT Exchange', 'JwtExchange')
        .addEnumValue('No Authentication', 'NoAuthentication')
        .addEnumValue('OAuth', 'Oauth')
        .addEnumValue('Password', 'Password'),
    username: new StringXMLField('username', 'Username')
        .setMinApi(33)
        .setEditable(),
}