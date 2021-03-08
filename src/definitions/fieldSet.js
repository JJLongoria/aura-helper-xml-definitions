const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    availableFields: new ArrayXMLField('availableFields', 'Available Fields')
        .setMinApi(21)
        .setEditable()
        .setFieldKey('field')
        .addField('field', new StringXMLField('field', 'Field')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('field', new BooleanXMLField('isFieldManaged', 'Is Field Managed'))
        .addField('isRequired', new BooleanXMLField('isRequired', 'Is Required')
            .setRequired()
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(21)
        .setEditable()
        .setRequired(),
    displayedFields: new ArrayXMLField('displayedFields', 'Displayed Fields')
        .setMinApi(21)
        .setEditable()
        .setFieldKey('field')
        .addField('field', new StringXMLField('field', 'Field')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('field', new BooleanXMLField('isFieldManaged', 'Is Field Managed'))
        .addField('isRequired', new BooleanXMLField('isRequired', 'Is Required')
            .setRequired()
        ),
    label: new StringXMLField('label', 'Label')
        .setMinApi(21)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.FIELD_SET),
}