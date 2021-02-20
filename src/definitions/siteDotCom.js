const { StringXMLField, EnumXMLField } = require('../factory/xmlFactory');

module.exports = {
    label: new StringXMLField('label', 'Label')
        .setMinApi(30)
        .setEditable()
        .setRequired(),
    siteType: new EnumXMLField('siteType', 'Site Type')
        .setMinApi(30)
        .setEditable()
        .setRequired()
        .addEnumValue('Experience Cloud Sites', 'ChatterNetworkPicasso')
        .addEnumValue('Site.com sites', 'Siteforce')
}