import { StringXMLField, ObjectXMLField, ArrayXMLField, DataValues, EnumXMLField } from '@aurahelper/core';
import { CustomField } from './customField';

export const ArticleType = {
    articleTypeChannelDisplay: new ObjectXMLField('articleTypeChannelDisplay', 'Article Type Channel Display')
        .setMinApi(19)
        .setEditable()
        .setFieldKey('articleTypeTemplates')
        .setSortOrder(undefined)
        .addField('articleTypeTemplates', new ArrayXMLField('articleTypeTemplates', 'Article Type Templates')
            .setEditable()
            .setFieldKey('page')
            .addField('channel', new EnumXMLField('channel', 'Channel')
                .setEditable()
                .setDefaultValue('AllChannels')
                .addEnumValue('All Channels', 'AllChannels')
                .addEnumValue('App', 'App')
                .addEnumValue('Publick Knowledge Base', 'Pkb')
                .addEnumValue('Custom Portal', 'Csp')
                .addEnumValue('Partner Portal', 'Prm')
            )
            .addField('page', new StringXMLField('page', 'Page')
                .setEditable()
            )
            .addField('template', new EnumXMLField('template', 'Template')
                .setEditable()
                .setDefaultValue('AllChannels')
                .addEnumValue('Page', 'Page')
                .addEnumValue('Tab', 'Tab')
                .addEnumValue('Table of Content', 'Toc')
            )
        ),
    deploymentStatus: new EnumXMLField('deploymentStatus', 'Deployment Status')
        .setMinApi(19)
        .setEditable()
        .setDefaultValue('InDevelopment')
        .addEnumValue('In Development', 'InDevelopment')
        .addEnumValue('Deployed', 'Deployed'),
    description: new StringXMLField('description', 'Description')
        .setMinApi(19)
        .setEditable()
        .setMaxLength(100),
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(19)
        .setEditable()
        .setFieldKey('fullName')
        .setFields(CustomField),
    gender: new EnumXMLField('gender', 'Gender')
        .setMinApi(19)
        .setEditable()
        .setEnumValues(DataValues.GENDER),
    label: new StringXMLField('label', 'Label')
        .setMinApi(19)
        .setEditable(),
    pluralLabel: new StringXMLField('pluralLabel', 'Plural Label')
        .setMinApi(19)
        .setEditable(),
    startsWith: new EnumXMLField('startsWith', 'Starts With')
        .setMinApi(19)
        .setEditable()
        .setEnumValues(DataValues.STARTS_WITH),
}