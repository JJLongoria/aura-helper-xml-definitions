import { StringXMLField, BooleanXMLField, MetadataTypes, EnumXMLField } from '@aurahelper/core';

export const CareProviderSearchConfig = {
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(48)
        .setEditable(),
    isProtected: new BooleanXMLField('isProtected', 'Is Protected')
        .setMinApi(48)
        .setEditable(),
    mappedObject: new EnumXMLField('mappedObject', 'Mapped Object')
        .setMinApi(48)
        .setEditable()
        .setRequired()
        .addEnumValue('Health Care Practitioner Facility', 'HealthCarePractitionerFacility')
        .addEnumValue('Health Care Provider', 'HealthCareProvider'),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(48)
        .setEditable()
        .setRequired(),
    sourceField: new StringXMLField('sourceField', 'Source Field')
        .setMinApi(48)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    targetField: new StringXMLField('targetField', 'Target Field')
        .setMinApi(48)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
};