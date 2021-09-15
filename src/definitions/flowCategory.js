const { StringXMLField, ArrayXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(43)
        .setEditable(),
    flowCategoryItems: new ArrayXMLField('flowCategoryItems', 'Flow Category Items')
        .setMinApi(43)
        .setEditable()
        .setFieldKey('flow')
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