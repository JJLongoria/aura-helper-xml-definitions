const { StringXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;

module.exports = {
    context: new EnumXMLField('context', 'Context')
        .setMinApi(44)
        .setEditable()
        .setDefaultValue('LEX')
        .addEnumValue('All', 'All')
        .addEnumValue('Communities', 'Communities')
        .addEnumValue('Field Service Mobile Extension', 'FieldServiceMobileExtension', 47)
        .addEnumValue('LEX', 'LEX'),
    description: new StringXMLField('description', 'Description')
        .setMinApi(39)
        .setEditable(),
    endpointUrl: new StringXMLField('endpointUrl', 'Endpoint URL')
        .setMinApi(39)
        .setEditable()
        .setRequired(),
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(39)
        .setEditable()
        .setRequired(),
    isApplicableToConnectSrc: new BooleanXMLField('isApplicableToConnectSrc', 'Is Applicable To Connect Source')
        .setMinApi(48)
        .setEditable(),
    isApplicableToFontSrc: new BooleanXMLField('isApplicableToFontSrc', 'Is Applicable To Font Source')
        .setMinApi(48)
        .setEditable(),
    isApplicableToFrameSrc: new BooleanXMLField('isApplicableToFrameSrc', 'Is Applicable To Frame Source')
        .setMinApi(48)
        .setEditable(),
    isApplicableToImgSrc: new BooleanXMLField('isApplicableToImgSrc', 'Is Applicable To Imgage Source')
        .setMinApi(48)
        .setEditable(),
    isApplicableToMediaSrc: new BooleanXMLField('isApplicableToMediaSrc', 'Is Applicable To Media Source')
        .setMinApi(48)
        .setEditable(),
    isApplicableToStyleSrc: new BooleanXMLField('isApplicableToStyleSrc', 'Is Applicable To Style Source')
        .setMinApi(48)
        .setEditable(),
    mobileExtension: new StringXMLField('mobileExtension', 'Mobile Extension')
        .setMinApi(39)
        .setEditable(),

}