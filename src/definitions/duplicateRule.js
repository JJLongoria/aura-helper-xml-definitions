const { StringXMLField, ObjectXMLField, ArrayXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    actionOnInsert: new EnumXMLField('actionOnInsert', 'Action On Insert')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addEnumValue('Allow', 'Allow')
        .addEnumValue('Block', 'Block'),
    actionOnUpdate: new EnumXMLField('actionOnUpdate', 'Action On Update')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addEnumValue('Allow', 'Allow')
        .addEnumValue('Block', 'Block'),
    alertText: new StringXMLField('alertText', 'Alert Text')
        .setMinApi(51)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    duplicateRuleFilter: new ObjectXMLField('duplicateRuleFilter', 'Duplicate Rule Filter')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
            .setEditable()
            .setRequired()
        )
        .addField('duplicateRuleFilterItems', new ArrayXMLField('duplicateRuleFilterItems', 'Duplicate Rule Filter Items')
            .setEditable()
            .setRequired()
            .addField('sortOrder', new IntegerXMLField('sortOrder', 'Sort Order')
                .setEditable()
                .setRequired()
            )
            .addField('table', new StringXMLField('table', 'Table')
                .setEditable()
                .setRequired()
                .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
            )
        ),
    duplicateRuleMatchRules: new ArrayXMLField('duplicateRuleMatchRules', 'Duplicate Rule Match Rules')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addField('matchRuleSObjectType', new StringXMLField('matchRuleSObjectType', 'Match Rule SObject Type')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        )
        .addField('matchingRule', new StringXMLField('matchingRule', 'Matching Rule')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.MATCHING_RULE)
        )
        .addField('objectMapping', new ObjectXMLField('objectMapping', 'Object Mapping')
            .setEditable()
            .setRequired()
            .addField('inputObject', new StringXMLField('inputObject', 'Input Object')
                .setEditable()
                .setRequired()
                .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
            )
            .addField('mappingFields', new ArrayXMLField('mappingFields', 'Mapping Fields')
                .addField('inputField', new StringXMLField('inputField', 'Input Field')
                    .setEditable()
                    .setRequired()
                    .setMetadataType(MetadataTypes.CUSTOM_FIELD)
                )
                .addField('outputField', new StringXMLField('outputField', 'Output Field')
                    .setEditable()
                    .setRequired()
                    .setMetadataType(MetadataTypes.CUSTOM_FIELD)
                )
            )
            .addField('outputObject', new StringXMLField('outputObject', 'Output Object')
                .setEditable()
                .setRequired()
                .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
            )
        ),
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setUnique(),
    operationsOnInsert: new ArrayXMLField('operationsOnInsert', 'Operations On Insert')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addAllowedValue('Alert', 'alert')
        .addAllowedValue('Report', 'report'),
    operationsOnUpdate: new ArrayXMLField('operationsOnUpdate', 'Operations On Update')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addAllowedValue('Alert', 'alert')
        .addAllowedValue('Report', 'report'),
    securityOption: new EnumXMLField('securityOption', 'Security Option')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .addEnumValue('Enforce Sharing Rules', 'EnforceSharingRules')
        .addEnumValue('Bypass Sharing Rules', 'BypassSharingRules'),
    sortOrder: new IntegerXMLField('sortOrder', 'Sort Order')
        .setMinApi(51)
        .setEditable()
        .setRequired()
}