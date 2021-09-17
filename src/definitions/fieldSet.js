const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;

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
        .addField('isFieldManaged', new BooleanXMLField('isFieldManaged', 'Is Field Managed')
            .setEditable()
            .setRequired()
        )
        .addField('isRequired', new BooleanXMLField('isRequired', 'Is Required')
            .setEditable()
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
        .addField('isFieldManaged', new BooleanXMLField('isFieldManaged', 'Is Field Managed')
            .setEditable()
            .setRequired()
        )
        .addField('isRequired', new BooleanXMLField('isRequired', 'Is Required')
            .setRequired()
        ),
    label: new StringXMLField('label', 'Label')
        .setMinApi(21)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.FIELD_SET),
}