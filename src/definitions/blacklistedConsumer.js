const { StringXMLField, BooleanXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;

module.exports = {
    blockedByApiWhitelisting: new BooleanXMLField('blockedByApiWhitelisting', 'Blocked By API Whitelisting')
        .setMinApi(49)
        .setEditable(),
    consumerKey: new StringXMLField('consumerKey', 'Consumer Key')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .setUnique(),
    consumerName: new StringXMLField('consumerName', 'Consumer Name')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CONNECTED_APP),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(49)
        .setEditable()
        .setRequired(),

}