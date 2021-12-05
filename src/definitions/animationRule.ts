import { StringXMLField, EnumXMLField, BooleanXMLField, MetadataTypes } from '@aurahelper/core';

export const AnimationRule = {
    animationFrequency: new EnumXMLField('animationFrequency', 'Animation Frequency')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .addEnumValue('Always', 'always')
        .addEnumValue('Often', 'often')
        .addEnumValue('Sometimes', 'sometimes')
        .addEnumValue('Rarely', 'rarely'),
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(46)
        .setUnique()
        .setEditable()
        .setRequired(),
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .setDefaultValue(true),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(46)
        .setEditable()
        .setRequired(),
    recordTypeContext: new EnumXMLField('recordTypeContext', 'Record Type Context')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .addEnumValue('All', 'All')
        .addEnumValue('Master', 'Master')
        .addEnumValue('Custom', 'Custom'),
    recordTypeName: new StringXMLField('recordTypeName', 'Record Type Name')
        .setMinApi(46)
        .setEditable()
        .setMetadataType(MetadataTypes.RECORD_TYPE),
    sobjectType: new StringXMLField('sobjectType', 'SObject Type')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT),
    targetField: new StringXMLField('targetField', 'Target Field')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    targetFieldChangeToValues: new StringXMLField('targetFieldChangeToValues', 'Target Field Change To Values')
        .setMinApi(46)
        .setEditable()
        .setRequired(),
}