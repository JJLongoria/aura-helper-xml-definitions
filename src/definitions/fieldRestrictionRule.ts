import { StringXMLField, BooleanXMLField, ArrayXMLField, XMLDependencyField, DataValues, MetadataTypes, EnumXMLField, IntegerXMLField, DoubleXMLField, ObjectXMLField } from '@aurahelper/core';

export const FieldRestrictionRule = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(52)
        .setEditable()
        .setDefaultValue(false)
        .setRequired(),
    classification: new ArrayXMLField('classification', 'Classification')
        .setMinApi(52)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(52)
        .setEditable(),
    enforcementType: new EnumXMLField('enforcementType', 'Enforcement Type')
        .setEditable()
        .setMinApi(52)
        .addEnumValue('Field Restrict', 'FieldRestrict')
        .addEnumValue('Restrict', 'Restrict')
        .addEnumValue('Scoping', 'Scoping'),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(52)
        .setEditable(),
    recordFilter: new StringXMLField('recordFilter', 'Record Filter')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    targetEntity: new StringXMLField('targetEntity', 'Target Entity')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    userCriteria: new StringXMLField('userCriteria', 'User Criteria')
        .setMinApi(52)
        .setEditable()
        .setRequired(),
    version: new IntegerXMLField('version', 'Version')
        .setMinApi(52)
        .setEditable(),
};