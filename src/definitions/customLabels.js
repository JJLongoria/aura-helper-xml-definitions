const { StringXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;
const { MetadataTypes, DataValues } = require('@ah/core').Values;

module.exports = {
    labels: new ArrayXMLField('labels', 'Labels')
        .setMinApi(14)
        .setEditable()
        .setFieldKey('fullName')
        .addField('categories', new StringXMLField('categories', 'Categories')
            .setEditable()
            .setMaxLength(255)
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_LABEL)
        )
        .addField('language', new EnumXMLField('language', 'Language')
            .setEditable()
            .setRequired()
            .setEnumValues(DataValues.SF_LANGUAGES)
        )
        .addField('protected', new BooleanXMLField('protected', 'Protected')
            .setEditable()
            .setRequired()
        )
        .addField('shortDescription', new StringXMLField('shortDescription', 'Short Description')
            .setEditable()
            .setRequired()
        )
        .addField('value', new StringXMLField('value', 'Value')
            .setEditable()
            .setRequired()
            .setMaxLength(1000)
        )
}