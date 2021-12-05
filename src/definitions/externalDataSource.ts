import { StringXMLField, BooleanXMLField, ArrayXMLField, DataValues, MetadataTypes, EnumXMLField } from '@aurahelper/core';

export const ExternalDataSource = {
    authProvider: new StringXMLField('authProvider', 'Auth Provider')
        .setMinApi(28)
        .setEditable(),
    certificate: new StringXMLField('certificate', 'Certificate')
        .setMinApi(28)
        .setEditable(),
    customConfiguration: new StringXMLField('customConfiguration', 'Custom Configuration')
        .setMinApi(28)
        .setEditable(),
    customHttpHeader: new ArrayXMLField('customHttpHeader', 'Custom HTTP Header')
        .setMinApi(28)
        .setEditable()
        .setFieldKey('headerFieldName')
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('headerFieldName', new StringXMLField('headerFieldName', 'Header Field Name')
            .setEditable()
            .setRequired()
        )
        .addField('headerFieldValue', new StringXMLField('headerFieldValue', 'Header Field Value')
            .setEditable()
            .setRequired()
        )
        .addField('isActive', new BooleanXMLField('isActive', 'Is Active')
            .setEditable()
        ),
    endpoint: new StringXMLField('endpoint', 'Endpoint')
        .setMinApi(28)
        .setEditable(),
    isWritable: new BooleanXMLField('isWritable', 'Is Writable')
        .setMinApi(35)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(28)
        .setEditable(),
    oauthRefreshToken: new StringXMLField('oauthRefreshToken', 'OAuth Refresh Token')
        .setMinApi(28)
        .setEditable(),
    oauthScope: new StringXMLField('oauthScope', 'OAuth Scope')
        .setMinApi(28)
        .setEditable(),
    oauthToken: new StringXMLField('oauthToken', 'OAuth Token')
        .setMinApi(28)
        .setEditable(),
    password: new StringXMLField('password', 'Password')
        .setMinApi(28)
        .setEditable(),
    principalType: new EnumXMLField('principalType', 'Principal Type')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('Anonymous', 'Anonymous')
        .addEnumValue('Per User', 'PerUser')
        .addEnumValue('Named User', 'NamedUser'),
    protocol: new EnumXMLField('protocol', 'Protocol')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('No Authentication', 'NoAuthentication')
        .addEnumValue('OAuth', 'Oauth')
        .addEnumValue('Password', 'Password'),
    repository: new StringXMLField('repository', 'Repository')
        .setMinApi(28)
        .setEditable(),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(28)
        .setEditable()
        .setRequired()
        .addEnumValue('OData 2.0 Adapter', 'OData')
        .addEnumValue('OData 4.0 Adapter', 'OData4')
        .addEnumValue('Cross-Org Adapter', 'SfdcOrg')
        .addEnumValue('Custom Adapter', DataValues.METADATA_TYPE.replace('{0}', MetadataTypes.APEX_CLASS + '>Id'))
        .addEnumValue('Content Hub Sharepoint', 'ContentHubSharepoint')
        .addEnumValue('Content Hub Sharepoint Office 365', 'ContentHubSharepointOffice365')
        .addEnumValue('Content Hub Sharepoint One Drive', 'ContentHubSharepointOneDrive')
        .addEnumValue('Content Hub Google Drive', 'ContentHubGDrive')
        .addEnumValue('Conten Hub Isotope', 'ContenHubIsotope')
        .addEnumValue('Outgoing Email', 'outgoingemail'),
    username: new StringXMLField('username', 'Username')
        .setMinApi(28)
        .setEditable(),
    version: new StringXMLField('version', 'Version')
        .setMinApi(28)
        .setEditable(),
}