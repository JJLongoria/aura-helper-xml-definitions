const { StringXMLField, ArrayXMLField } = require('../factory/xmlFactory');
const MetadataTypes = require('../values/metadataTypes');

module.exports = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(43)
        .setEditable(),
    flowCategoryItems: new ArrayXMLField('flowCategoryItems', 'Flow Category Items')
        .setMinApi(43)
        .setEditable()
        .addField('flow', new StringXMLField('flow', 'Flow')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.FLOW)
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(43)
        .setEditable()
        .setRequired()
        .setUnique(),
}