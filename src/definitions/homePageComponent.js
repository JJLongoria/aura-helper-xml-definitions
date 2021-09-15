const { StringXMLField, ArrayXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    body: new StringXMLField('body', 'Body')
        .setMinApi(12)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    height: new IntegerXMLField('height', 'Height')
        .setMinApi(31)
        .setEditable(),
    links: new ArrayXMLField('links', 'Links')
        .setMinApi(12)
        .setEditable()
        .addAllowedValue('ObjectWebLink')
        .addAllowedValue('CustomPageWebLink'),
    page: new StringXMLField('page', 'Page')
        .setMinApi(31)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    pageComponentType: new EnumXMLField('pageComponentType', 'Page Component Type')
        .setMinApi()
        .setEditable()
        .setRequired()
        .addEnumValue('Links', 'links')
        .addEnumValue('HTML Area', 'htmlArea')
        .addEnumValue('Image Or Note', 'imageOrNote')
        .addEnumValue('Visualforce Page', 'visualforcePage', 31),
    showLabel: new BooleanXMLField('showLabel', 'Show Label')
        .setMinApi(31)
        .setEditable(),
    showScrollbars: new BooleanXMLField('showScrollbars', 'Show Scrollbars')
        .setMinApi(31)
        .setEditable(),
    width: new EnumXMLField('width', 'Width')
        .setMinApi(12)
        .setEditable()
        .addEnumValue('Narrow Components', 'narrowComponents')
        .addEnumValue('Wide Components', 'wideComponents')

}