const { StringXMLField, ObjectXMLField, IntegerXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    brandingImage: new StringXMLField('brandingImage', 'Branding Image')
        .setMinApi(28)
        .setEditable(),
    connectionTimeoutDuration: new IntegerXMLField('connectionTimeoutDuration', 'Connection Timeout Duration')
        .setMinApi(28)
        .setEditable(),
    connectionWarningDuration: new IntegerXMLField('connectionWarningDuration', 'Connection Warning Duration')
        .setMinApi(28)
        .setEditable(),
    displayQueuePosition: new IntegerXMLField('displayQueuePosition', 'Display Queue Position')
        .setMinApi(32)
        .setEditable(),
    domainWhiteList: new ObjectXMLField('domainWhiteList', 'Domain White List')
        .setMinApi(28)
        .setEditable()
        .setFieldKey('domain')
        .setSortOrder(undefined)
        .addField('domain', new StringXMLField('domain', 'Domain')
            .setEditable()
        ),
    enablePrechatApi: new IntegerXMLField('enablePrechatApi', 'Enable Prechat Api')
        .setMinApi(28)
        .setEditable(),
    enableTranscriptSave: new IntegerXMLField('enableTranscriptSave', 'Enable Transcript Save')
        .setMinApi(28)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(28)
        .setEditable(),
    mobileBrandingImage: new StringXMLField('mobileBrandingImage', 'Mobile Branding Image')
        .setMinApi(28)
        .setEditable(),
    site: new StringXMLField('site', 'site')
        .setMinApi(28)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_SITE),
    windowTitle: new StringXMLField('windowTitle', 'Window Title')
        .setMinApi(28)
        .setEditable(),
}