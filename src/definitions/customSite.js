const { StringXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;

module.exports = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(14)
        .setEditable()
        .setRequired(),
    allowHomePage: new BooleanXMLField('allowHomePage', 'Allow Home Page')
        .setMinApi(15)
        .setEditable()
        .setRequired(),
    allowStandardAnswersPages: new BooleanXMLField('allowStandardAnswersPages', 'Allow Standard Answers Pages')
        .setMinApi(19)
        .setEditable(),
    allowStandardIdeasPages: new BooleanXMLField('allowStandardIdeasPages', 'Allow Standard Ideas Pages')
        .setMinApi(15)
        .setEditable()
        .setRequired(),
    allowStandardLookups: new BooleanXMLField('allowStandardLookups', 'Allow Standard Lookups')
        .setMinApi(15)
        .setEditable()
        .setRequired(),
    allowStandardPortalPages: new BooleanXMLField('allowStandardPortalPages', 'Allow Standard Portal Pages')
        .setMinApi(39)
        .setEditable()
        .setRequired(),
    allowStandardSearch: new BooleanXMLField('allowStandardSearch', 'Allow Standard Search')
        .setMinApi(15)
        .setEditable()
        .setRequired(),
    analyticsTrackingCode: new BooleanXMLField('analyticsTrackingCode', 'Analytics Tracking Code')
        .setMinApi(17)
        .setEditable()
        .setRequired(),
    authorizationRequiredPage: new BooleanXMLField('authorizationRequiredPage', 'Authorization Required Page')
        .setMinApi(14)
        .setEditable(),
    bandwidthExceededPage: new StringXMLField('bandwidthExceededPage', 'Bandwidth Exceeded Page')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    browserXssProtection: new BooleanXMLField('browserXssProtection', 'Browser XSS Protection')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    changePasswordPage: new StringXMLField('changePasswordPage', 'Change Password Page')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    chatterAnswersForgotPasswordConfirmPage: new StringXMLField('chatterAnswersForgotPasswordConfirmPage', 'Chatter Answers Forgot Password Confirm Page')
        .setMinApi(27)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    chatterAnswersForgotPasswordPage: new StringXMLField('chatterAnswersForgotPasswordPage', 'Chatter Answers Forgot Password Page')
        .setMinApi(27)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    chatterAnswersHelpPage: new StringXMLField('chatterAnswersHelpPage', 'Chatter Answers Help Page')
        .setMinApi(27)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    chatterAnswersLoginPage: new StringXMLField('chatterAnswersLoginPage', 'Chatter Answers Login Page')
        .setMinApi(27)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    chatterAnswersRegistrationPage: new StringXMLField('chatterAnswersRegistrationPage', 'Chatter Answers Registration Page')
        .setMinApi(27)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    clickjackProtectionLevel: new EnumXMLField('clickjackProtectionLevel', 'Clickjack Protection Level')
        .setMinApi(30)
        .setEditable()
        .setRequired()
        .addEnumValue('Allow All Framing (No Protection)', 'AllowAllFraming')
        .addEnumValue('External (Good Protection)', 'External')
        .addEnumValue('Same Origin Only (Recommended)', 'SameOriginOnly')
        .addEnumValue('Allow All Framing', 'AllowAllFraming')
        .addEnumValue('No Framing (Most Protection)', 'NoFraming'),
    contentSniffingProtection: new BooleanXMLField('contentSniffingProtection', 'Content Sniffing Protection')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    cspUpgradeInsecureRequests: new BooleanXMLField('cspUpgradeInsecureRequests', 'CSP Upgrade Insecure Requests')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    customWebAddresses: new ArrayXMLField('customWebAddresses', 'Custom Web Addresses')
        .setMinApi(21)
        .setEditable()
        .setFieldKey('domainName')
        .addField('certificate', new StringXMLField('certificate', 'Certificate')
            .setEditable()
        )
        .addField('domainName', new StringXMLField('domainName', 'Domain Name')
            .setEditable()
            .setRequired()
        )
        .addField('primary', new BooleanXMLField('primary', 'Primary')
            .setEditable()
            .setRequired()
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(14)
        .setEditable(),
    enableAuraRequests: new BooleanXMLField('enableAuraRequests', 'Enable Aura Requests')
        .setMinApi(46)
        .setEditable(),
    favoriteIcon: new StringXMLField('favoriteIcon', 'Favorite Icon')
        .setMinApi(14)
        .setEditable(),
    fileNotFoundPage: new StringXMLField('fileNotFoundPage', 'File Not Found Page')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    forgotPasswordPage: new StringXMLField('forgotPasswordPage', 'Forgot Password Page')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    genericErrorPage: new StringXMLField('genericErrorPage', 'Generic Error Page')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    guestProfile: new StringXMLField('guestProfile', 'Guest Profile')
        .setMinApi(14),
    inMaintenancePage: new StringXMLField('inMaintenancePage', 'In Maintenance Page')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    inactiveIndexPage: new StringXMLField('inactiveIndexPage', 'Inactive Index Page')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    indexPage: new StringXMLField('indexPage', 'Index Page')
        .setMinApi(14)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(14)
        .setEditable()
        .setRequired(),
    portal: new StringXMLField('portal', 'Portal')
        .setMinApi(14)
        .setEditable(),
    referrerPolicyOriginWhenCrossOrigin: new BooleanXMLField('referrerPolicyOriginWhenCrossOrigin', 'Referrer Policy Origin When Cross Origin')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    requireHttps: new BooleanXMLField('requireHttps', 'Require Https')
        .setMinApi(14)
        .setEditable()
        .setRequired(),
    requireInsecurePortalAccess: new BooleanXMLField('requireInsecurePortalAccess', 'Require Insecure Portal Access')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
    robotsTxtPage: new StringXMLField('robotsTxtPage', 'Robots TXT Page')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    selfRegPage: new StringXMLField('selfRegPage', 'Sefl Registration Page')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    serverIsDown: new StringXMLField('serverIsDown', 'Server Is Down')
        .setMinApi(17)
        .setEditable()
        .setMetadataType(MetadataTypes.STATIC_RESOURCE),
    siteAdmin: new StringXMLField('siteAdmin', 'Site Admin')
        .setMinApi(14)
        .setEditable(),
    siteIframeWhiteListUrls: new ArrayXMLField('siteIframeWhiteListUrls', 'Site Iframe WhiteList URLS')
        .setMinApi(49)
        .setEditable()
        .setFieldKey('url')
        .addField('url', new StringXMLField('url', 'URL')
            .setEditable()
            .setRequired()
        ),
    siteRedirectMappings: new ArrayXMLField('siteRedirectMappings', 'Site Redirect Mappings')
        .setMinApi(20)
        .setEditable()
        .setFieldKey('source')
        .addField('action', new EnumXMLField('action', 'Action')
            .setEditable()
            .addEnumValue('Permanent', 'Permanent')
            .addEnumValue('Temporary', 'Temporary')
        )
        .addField('isActive', new BooleanXMLField('isActive', 'Is Active')
            .setEditable()
        )
        .addField('source', new StringXMLField('source', 'Source')
            .setEditable()
            .setRequired()
        )
        .addField('target', new StringXMLField('target', 'Target')
            .setEditable()
            .setRequired()
        ),
    siteTemplate: new StringXMLField('siteTemplate', 'Site Template')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    siteType: new EnumXMLField('siteType', 'Site Type')
        .setMinApi(27)
        .setEditable()
        .setRequired()
        .addEnumValue('Visualforce', 'Visualforce')
        .addEnumValue('Site.com', 'Site.com')
        .addEnumValue('ChatterNetwork', 'ChatterNetwork'),
    subdomain: new StringXMLField('subdomain', 'Subdomain')
        .setMinApi(14)
        .setRequired(),
    urlPathPrefix: new StringXMLField('urlPathPrefix', 'URL Path Prefix')
        .setMinApi(14)
        .setEditable()
        .setRequired(),

}