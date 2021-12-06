import { StringXMLField, BooleanXMLField, EnumXMLField } from '@aurahelper/core';

export const Scontrol = {
    content: new StringXMLField('content', 'Content')
        .setMinApi(10)
        .setEditable()
        .setBase64(),
    contentSource: new EnumXMLField('contentSource', 'Content Source')
        .setMinApi(10)
        .setEditable()
        .setReserved()
        .addEnumValue('HTML', 'HTML')
        .addEnumValue('URL', 'URL')
        .addEnumValue('Snippet', 'Snippet'),
    description: new StringXMLField('description', 'Description')
        .setMinApi(10)
        .setEditable(),
    encodingKey: new EnumXMLField('encodingKey', 'Encoding Key')
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
    fileContent: new StringXMLField('fileContent', 'File Content')
        .setMinApi(10)
        .setEditable()
        .setBase64(),
    fileName: new StringXMLField('fileName', 'File Name')
        .setMinApi(14)
        .setEditable()
        .setRequired()
        .setUnique(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(10)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(10)
        .setEditable()
        .setRequired(),
    supportsCaching: new BooleanXMLField('supportsCaching', 'Supports Caching')
        .setMinApi()
        .setEditable()
        .setRequired()
}