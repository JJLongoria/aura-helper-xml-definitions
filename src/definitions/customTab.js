const { StringXMLField, ArrayXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;
const ActionOverride = require('./actionOverride');

module.exports = {
    actionOverrides: new ArrayXMLField('actionOverrides', 'ActionOverrides')
        .setMinApi(37)
        .setEditable()
        .setFieldKey('actionName')
        .setSortOrder(undefined)
        .setMetadataType(MetadataTypes.ACTION_OVERRIDE)
        .setFields(ActionOverride),
    auraComponent: new StringXMLField('auraComponent', 'Aura Component')
        .setMinApi(10)
        .setEditable()
        .setMetadataType(MetadataTypes.AURA_DEFINITION_BUNDLE),
    customObject: new BooleanXMLField('customObject', 'Custom Object')
        .setMinApi(10)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(10)
        .setEditable(),
    flexiPage: new StringXMLField('flexiPage', 'Flexi Page')
        .setMinApi(10)
        .setEditable()
        .setMetadataType(MetadataTypes.FLEXI_PAGE),
    frameHeight: new IntegerXMLField('frameHeight', 'Frame Height')
        .setMinApi(10)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'FullName')
        .setMinApi(10)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    hasSidebar: new BooleanXMLField('hasSidebar', 'Has Sidebar')
        .setMinApi(10)
        .setEditable(),
    icon: new StringXMLField('icon', 'Icon')
        .setMinApi(14)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(10)
        .setEditable(),
    lwcComponent: new StringXMLField('lwcComponent', 'LWC Component')
        .setMinApi(10)
        .setEditable()
        .setMetadataType(MetadataTypes.LWC),
    motif: new StringXMLField('motif', 'Motif')
        .setMinApi(10)
        .setEditable()
        .setRequired(),
    page: new StringXMLField('page', 'Page')
        .setMinApi(10)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    scontrol: new StringXMLField('scontrol', 'S-Control')
        .setMinApi(10)
        .setEditable()
        .setMetadataType(MetadataTypes.S_CONTROL),
    splashPageLink: new StringXMLField('splashPageLink', 'Splash Page Link')
        .setMinApi(10)
        .setEditable(),
    url: new StringXMLField('url', 'URL')
        .setMinApi(10)
        .setEditable(),
    urlEncodingKey: new EnumXMLField('urlEncodingKey', 'URL Encoding Key')
        .setMinApi(10)
        .setEditable()
        .setRequired()
        .setDefaultValue('UTF-8')
        .addEnumValue('Unicode (UTF-8)', 'UTF-8')
        .addEnumValue('General US & Western Europe (ISO-8859–1, ISO-LATIN-1)', 'ISO-8859-1')
        .addEnumValue('Japanese (Shift-JIS)', 'Shift_JIS')
        .addEnumValue('Japanese (JIS)', 'ISO-2022-JP')
        .addEnumValue('Japanese (EUC-JP)', 'EUC-JP')
        .addEnumValue('Japanese (Shift-JIS_2004)', 'x-SJIS_0213')
        .addEnumValue('Korean (ks_c_5601-1987)', 'ks_c_5601-1987')
        .addEnumValue('Traditional Chinese (Big5)', 'Big5')
        .addEnumValue('Simplified Chinese (GB2312)', 'GB2312')
        .addEnumValue('Traditional Chinese Hong Kong (Big5–HKSCS)', 'Big5-HKSCS'),
}