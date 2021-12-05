import { StringXMLField, BooleanXMLField, ArrayXMLField, XMLDependencyField, DataValues, MetadataTypes, EnumXMLField, IntegerXMLField, DoubleXMLField, ObjectXMLField, CoreUtils } from '@aurahelper/core';

export const IPAddressRange = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(52)
        .setEditable(),
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(52)
        .setEditable(),
    endIpAddress: new StringXMLField('endIpAddress', 'End IP Address')
        .setMinApi(52)
        .setEditable()
        .addMatchPattern(CoreUtils.Validator.getIpv4Regexp())
        .addMatchPattern(CoreUtils.Validator.getIpv6Regexp()),
    ipAddressFeature: new EnumXMLField('ipAddressFeature', 'IP Address Feature')
        .setMinApi(52)
        .setEditable()
        .setDefaultValue('EmailIpFiltering')
        .addEnumValue('Email IP Filtering', 'EmailIpFiltering'),
    ipAddressUsageScope: new EnumXMLField('ipAddressUsageScope', 'IP Address Usage Scope')
        .setMinApi(52)
        .setEditable()
        .setDefaultValue('EmailIpFiltering')
        .addEnumValue('Exclusion', 'Exclusion')
        .addEnumValue('Inclusion', 'Inclusion'),
    isProtected: new BooleanXMLField('isProtected', 'Is Protected')
        .setMinApi(52)
        .setEditable()
        .setDefaultValue(false),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(52)
        .setEditable(),
    startIpAddress: new StringXMLField('startIpAddress', 'Start IP Address')
        .setMinApi(52)
        .setEditable()
        .addMatchPattern(CoreUtils.Validator.getIpv4Regexp())
        .addMatchPattern(CoreUtils.Validator.getIpv6Regexp()),

}