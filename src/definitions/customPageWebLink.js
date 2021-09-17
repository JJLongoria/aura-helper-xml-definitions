const { StringXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField, XMLDependencyField } = require('@aurahelper/core').Types;
const { MetadataTypes, DataValues } = require('@aurahelper/core').Values;

module.exports = {
    availability: new EnumXMLField('availability', 'Availability')
        .setMinApi(13)
        .setEditable()
        .setRequired()
        .addEnumValue('Online', 'online')
        .addEnumValue('Offline', 'offline'),
    description: new StringXMLField('description', 'Description')
        .setMinApi(13)
        .setEditable(),
    displayType: new EnumXMLField('displayType', 'Display Type')
        .setMinApi(13)
        .setEditable()
        .addEnumValue('Link', 'link')
        .addEnumValue('Button', 'button')
        .addEnumValue('Mass Action Button', 'massActionButton'),
    encodingKey: new EnumXMLField('encodingKey', 'Encoding Key')
        .setMinApi(13)
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
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(13)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    hasMenubar: new BooleanXMLField('hasMenubar', 'Has Menu Bar')
        .setMinApi(13)
        .setEditable()
        .addDependencyField(new XMLDependencyField('openType', 'newWindow', DataValues.NOT_NULL)),
    hasScrollbars: new BooleanXMLField('hasScrollbars', 'Has Scrollbars')
        .setMinApi(13)
        .setEditable()
        .addDependencyField(new XMLDependencyField('openType', 'newWindow', DataValues.NOT_NULL)),
    hasToolbar: new BooleanXMLField('hasToolbar', 'Has Toolbar')
        .setMinApi(13)
        .setEditable()
        .addDependencyField(new XMLDependencyField('openType', 'newWindow', DataValues.NOT_NULL)),
    height: new IntegerXMLField('height', 'Height')
        .setMinApi(13)
        .setEditable()
        .addDependencyField(new XMLDependencyField('openType', 'newWindow', DataValues.NOT_NULL)),
    isResizable: new BooleanXMLField('isResizable', 'Is Resizable')
        .setMinApi(13)
        .setEditable()
        .addDependencyField(new XMLDependencyField('openType', 'newWindow', DataValues.NOT_NULL)),
    linkType: new EnumXMLField('linkType', 'Link Type')
        .setMinApi(13)
        .setEditable()
        .setRequired()
        .addEnumValue('URL', 'url')
        .addEnumValue('S-Control', 'sControl')
        .addEnumValue('Javascript', 'javascript')
        .addEnumValue('Page', 'page')
        .addEnumValue('Flow', 'flow'),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(13)
        .setEditable()
        .setRequired(),
    openType: new EnumXMLField('openType', 'Open Type')
        .setMinApi(13)
        .setEditable()
        .setRequired()
        .addEnumValue('New Window', 'newWindow')
        .addEnumValue('Sidebar', 'sidebar')
        .addEnumValue('No Sidebar', 'noSidebar')
        .addEnumValue('Replace', 'replace')
        .addEnumValue('On Click JavaScript', 'onClickJavaScript'),
    page: new StringXMLField('page', 'Page')
        .setMinApi(13)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE)
        .addDependencyField(new XMLDependencyField('openType', 'page', DataValues.NOT_NULL)),
    position: new EnumXMLField('position', 'Position')
        .setMinApi(13)
        .setEditable()
        .addEnumValue('Full Screen', 'fullScreen')
        .addEnumValue('None', 'none')
        .addEnumValue('Top Left', 'topLeft')
        .addDependencyField(new XMLDependencyField('openType', 'newWindow', DataValues.NOT_NULL)),
    protected: new BooleanXMLField('protected', 'Protected')
        .setMinApi(13)
        .setEditable()
        .setRequired(),
    requireRowSelection: new BooleanXMLField('requireRowSelection', 'Require Row Selection')
        .setMinApi(13)
        .setEditable()
        .addDependencyField(new XMLDependencyField('displayType', 'massActionButton', DataValues.NOT_NULL)),
    scontrol: new StringXMLField('scontrol', 'S-Control')
        .setMinApi(13)
        .setEditable()
        .setMetadataType(MetadataTypes.S_CONTROL)
        .addDependencyField(new XMLDependencyField('linkType', 'sControl', DataValues.NOT_NULL)),
    showsLocation: new BooleanXMLField('showsLocation', 'Shows Location')
        .setMinApi(13)
        .setEditable()
        .addDependencyField(new XMLDependencyField('openType', 'newWindow', DataValues.NOT_NULL)),
    showsStatus: new BooleanXMLField('showsStatus', 'Shows Status')
        .setMinApi(13)
        .setEditable()
        .addDependencyField(new XMLDependencyField('openType', 'newWindow', DataValues.NOT_NULL)),
    url: new BooleanXMLField('url', 'URL')
        .setMinApi(13)
        .setEditable()
        .addDependencyField(new XMLDependencyField('linkType', 'url', DataValues.NOT_NULL))
        .addDependencyField(new XMLDependencyField('linkType', 'javascript', DataValues.NOT_NULL)),
    width: new BooleanXMLField('width', 'Width')
        .setMinApi(13)
        .setEditable()
        .addDependencyField(new XMLDependencyField('openType', 'newWindow', DataValues.NOT_NULL)),
}