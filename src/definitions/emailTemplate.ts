import { StringXMLField, BooleanXMLField, ArrayXMLField, XMLDependencyField, DataValues, MetadataTypes, EnumXMLField, DoubleXMLField, ObjectXMLField } from '@aurahelper/core';
import { packageVersion } from './types/packageVersion';

export const EmailTemplate = {
    apiVersion: new DoubleXMLField('apiVersion', 'API Version')
        .setMinApi(16)
        .setEditable(),
    attachedDocuments: new ArrayXMLField('attachedDocuments', 'Attached Documents')
        .setMinApi(12)
        .setEditable()
        .setMetadataType(MetadataTypes.DOCUMENT),
    attachments: new ObjectXMLField('attachments', 'Attachments')
        .setMinApi(12)
        .setEditable()
        .setFieldKey('name')
        .addField('content', new StringXMLField('content', 'Content')
            .setEditable()
            .setRequired()
            .setBase64()
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setBase64()
        ),
    available: new BooleanXMLField('available', 'Available')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    content: new StringXMLField('content', 'Content')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .setBase64(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(12)
        .setEditable(),
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
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    letterhead: new StringXMLField('letterhead', 'Letterhead')
        .setMinApi(12)
        .setEditable(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    packageVersions: packageVersion('packageVersions', 'Package Versions', 16),
    relatedEntityType: new EnumXMLField('relatedEntityType', 'Related Entity Type')
        .setMinApi(12),
    style: new EnumXMLField('style', 'Style')
        .setMinApi(12)
        .setEditable()
        .addEnumValue('None', 'none')
        .addEnumValue('FreeForm', 'freeForm')
        .addEnumValue('Formal Letter', 'formalLetter')
        .addEnumValue('Promotion Right', 'promotionRight')
        .addEnumValue('Promotion Left', 'promotionLeft')
        .addEnumValue('Newsletter', 'newsletter')
        .addEnumValue('Products', 'products')
        .addDependencyField(new XMLDependencyField('type', 'html', DataValues.NOT_NULL)),
    subject: new StringXMLField('subject', 'Subject')
        .setMinApi(12)
        .setEditable(),
    textOnly: new StringXMLField('textOnly', 'Text Only')
        .setMinApi(12)
        .setEditable()
        .addDependencyField(new XMLDependencyField('type', ['html', 'custom'], DataValues.NOT_NULL)),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .addEnumValue('Text', 'text')
        .addEnumValue('HTML', 'html')
        .addEnumValue('Custom', 'custom')
        .addEnumValue('Visuaforce', 'visualforce')
        .addDependencyField(new XMLDependencyField('UiType', ['SFX'], 'custom')),
    UiType: new EnumXMLField('UiType', 'UI Type')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .addEnumValue('Aloha (Salesforce Classic)', 'Aloha')
        .addEnumValue('SFX (Lightning Experience)', 'SFX')
        .addEnumValue('Custom', 'custom')
        .addEnumValue('SFX_Sample (Lightning Experience Sample)', 'SFX_Sample')
};