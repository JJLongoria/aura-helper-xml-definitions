const { StringXMLField, EnumXMLField } = require('../factory/xmlFactory');
const MetadataTypes = require('../values/metadataTypes');

module.exports = {
    dataflow: new StringXMLField('dataflow', 'Dataflow')
        .setMinApi(41)
        .setEditable()
        .setMetadataType(MetadataTypes.WAVE_DATA_FLOW),
    format: new EnumXMLField('format', 'Format')
        .setMinApi(41)
        .setEditable()
        .addEnumValue('Calendar heat map', 'R2')
        .addEnumValue('Comparison table', 'R3', 49),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    securityPredicate: new StringXMLField('securityPredicate', 'Security Predicate')
        .setMinApi(41)
        .setEditable(),
    targetDatasetAlias: new StringXMLField('targetDatasetAlias', 'Target Dataset Alias')
        .setMinApi(41)
        .setEditable()
        .setMetadataType(MetadataTypes.WAVE_DATASET),
}