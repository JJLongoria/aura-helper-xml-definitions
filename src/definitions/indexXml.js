const { StringXMLField, ArrayXMLField, EnumXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(41)
        .setEditable()
        .setFieldKey('name')
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('sortDirection', new EnumXMLField('sortDirection', 'Sort Direction')
            .setEditable()
            .setRequired()
            .setDefaultValue('ASC')
            .addEnumValue('ASC', 'ASC')
            .addEnumValue('DESC', 'DESC')
        ),
    label: new StringXMLField('label', 'Label')
        .setMinApi(41)
        .setEditable()
        .setRequired()
}