const { StringXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    apexHandler: new StringXMLField('apexHandler', 'Apex Handler')
        .setMinApi(48)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.APEX_CLASS),
    executeApexHandlerAs: new StringXMLField('executeApexHandlerAs', 'Execute Apex Handler As')
        .setMinApi(48)
        .setEditable()
        .linkFieldToSObject('User', 'Username'),
    usernameLabel: new StringXMLField('usernameLabel', 'Username Label')
        .setMinApi(48)
        .setEditable(),
}