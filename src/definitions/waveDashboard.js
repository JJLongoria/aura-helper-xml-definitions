const { StringXMLField } = require('../factory/xmlFactory');

module.exports = {
    application: new StringXMLField('application', 'Application')
        .setMinApi(37)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(37)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(37)
        .setEditable()
        .setRequired(),
    templateAssetSourceName: new StringXMLField('templateAssetSourceName', 'Template Asset Source Name')
        .setMinApi(37)
        .setEditable(),
}