const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('../factory/xmlFactory');
const MetadataTypes = require('../values/metadataTypes');

module.exports = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(34)
        .setEditable(),
    entityName: new StringXMLField('entityName', 'Entity Name')
        .setMinApi(34)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT),
    fieldName: new StringXMLField('fieldName', 'Field Name')
        .setMinApi(34)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(34)
        .setEditable()
        .setRequired(),
    pathAssistantSteps: new ArrayXMLField('pathAssistantSteps', 'Path Assistant Steps')
        .setMinApi(34)
        .setEditable()
        .addField('fieldNames', new ArrayXMLField('fieldNames', 'Field Names')
            .setEditable()
        )
        .addField('info', new StringXMLField('info', 'Info')
            .setEditable()
        )
        .addField('picklistValueName', new StringXMLField('picklistValueName', 'Picklist Value Name')
            .setEditable()
        ),
    recordTypeName: new StringXMLField('recordTypeName', 'Record Type Name')
        .setMinApi(34)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.RECORD_TYPE),
}