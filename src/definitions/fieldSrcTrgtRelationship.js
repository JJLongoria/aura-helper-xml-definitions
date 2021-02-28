const { StringXMLField, EnumXMLField } = require('@ah/core').Types;

module.exports = {
    definitionCreationType: new StringXMLField('definitionCreationType', 'Definition Creation Type')
        .setMinApi(51)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    relationshipCardinality: new EnumXMLField('relationshipCardinality', 'Relationship Cardinality')
        .setMinApi(51)
        .setEditable()
        .addEnumValue('One To One', 'OneToOne')
        .addEnumValue('One To Many', 'OneToMany')
        .addEnumValue('Many To Many', 'ManyToMany'),
    sourceFieldName: new StringXMLField('sourceFieldName', 'Source Field Name')
        .setMinApi(51)
        .setEditable(),
    targetFieldName: new StringXMLField('targetFieldName', 'Target Field Name')
        .setMinApi(51)
        .setEditable(),
}