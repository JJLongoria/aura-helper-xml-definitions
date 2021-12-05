import { StringXMLField, BooleanXMLField, ArrayXMLField, EnumXMLField, DoubleXMLField, ObjectXMLField } from '@aurahelper/core';

export const LightningComponentBundle = {
    apiVersion: new DoubleXMLField('apiVersion', 'API Version')
        .setMinApi(45)
        .setEditable()
        .setRequired(),
    capabilities: new ArrayXMLField('capabilities', 'Capabilities')
        .setMinApi(48)
        .setEditable()
        .setFieldKey('capability')
        .setSortOrder(undefined)
        .addField('capability', new EnumXMLField('capability', 'Capability')
            .setRequired()
            .setEditable()
            .setDefaultValue('lightningCommunity__RelaxedCSP')
            .addEnumValue('Lightning Community Relaxed CSP', 'lightningCommunity__RelaxedCSP')
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(45)
        .setEditable(),
    isExplicitImport: new BooleanXMLField('isExplicitImport', 'Is Explicit Import')
        .setMinApi(45)
        .setEditable(),
    isExposed: new BooleanXMLField('isExposed', 'Is Exposed')
        .setMinApi(45)
        .setEditable(),
    lwcResources: new ArrayXMLField('lwcResources', 'LWC Resources')
        .setMinApi(45)
        .setEditable()
        .setFieldKey('lwcResource')
        .setSortOrder(undefined)
        .addField('lwcResource', new ObjectXMLField('lwcResource', 'LWC Resource')
            .setEditable()
            .setFieldKey('filePath')
            .setSortOrder(undefined)
            .addField('filePath', new StringXMLField('filePath', 'File Path')
                .setEditable()
                .setRequired()
            )
            .addField('source', new StringXMLField('source', 'Source')
                .setEditable()
                .setRequired()
                .setBase64()
            )
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(45)
        .setEditable()
        .setRequired()
        .setUnique(),
    targetConfigs: new StringXMLField('targetConfigs', 'Target Configs')
        .setMinApi(45)
        .setEditable()
        .setBase64(),
    targets: new ArrayXMLField('targets', 'Targets')
        .setMinApi(45)
        .setEditable()
        .setFieldKey('target')
        .setSortOrder(undefined)
        .addField('target', new EnumXMLField('target', 'Target')
            .setEditable()
            .addEnumValue('Lightning App Page', 'lightning__AppPage')
            .addEnumValue('Lightning Home Page', 'lightning__HomePage')
            .addEnumValue('Lightning Record Page', 'lightning__RecordPage')
        )


}