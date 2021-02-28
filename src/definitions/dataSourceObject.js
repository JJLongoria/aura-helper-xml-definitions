const { StringXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    dataSource: new StringXMLField('dataSource', 'Data Source')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.DATA_SOURCE),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
    objectType: new StringXMLField('objectType', 'Object Type')
        .setMinApi(50)
        .setEditable(),
    sourceIdentifier: new StringXMLField('sourceIdentifier', 'Source Identifier')
        .setMinApi(50)
        .setEditable(),
}