const { StringXMLField, ArrayXMLField, EnumXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    matchingRules: new ArrayXMLField('matchingRules', 'Matching Rules')
        .setMinApi(33)
        .setEditable()
        .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
            .setMinApi(33)
            .setEditable()
        )
        .addField('description', new StringXMLField('description', 'Description')
            .setMinApi(33)
            .setEditable()
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setMinApi(33)
            .setEditable()
            .setRequired()
        )
        .addField('fullname', new StringXMLField('fullname', 'Full Name')
            .setMinApi(33)
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.MATCHING_RULE)
        )
        .addField('matchingRuleItems', new ArrayXMLField('matchingRuleItems', 'Matching Rule Items')
            .setEditable()
            .addField('blankValueBehavior', new EnumXMLField('blankValueBehavior', 'Blank Value Behavior')
                .setEditable()
                .setDefaultValue('NullNotAllowed')
                .addEnumValue('Match Blanks', 'MatchBlanks')
                .addEnumValue('Null Not Allowed', 'NullNotAllowed')
            )
            .addField('fieldName', new EnumXMLField('fieldName', 'Field Name')
                .setEditable()
                .setRequired()
                .setMetadataType(MetadataTypes.CUSTOM_FIELD)
            )
            .addField('blankValueBehavior', new EnumXMLField('blankValueBehavior', 'Blank Value Behavior')
                .setEditable()
                .setRequired()
                .addEnumValue('Exact', 'Exact')
                .addEnumValue('First Name', 'FirstName')
                .addEnumValue('Last Name', 'LastName')
                .addEnumValue('Company Name', 'CompanyName')
                .addEnumValue('Phone', 'Phone')
                .addEnumValue('City', 'City')
                .addEnumValue('Street', 'Street')
                .addEnumValue('Zip', 'Zip')
                .addEnumValue('Title', 'Title')
            )
        )
        .addField('ruleStatus', new EnumXMLField('ruleStatus', 'Rule Status')
            .setEditable()
            .setRequired()
            .addEnumValue('Inactive', 'Inactive')
            .addEnumValue('Deactivating', 'Deactivating')
            .addEnumValue('Deactivation Failed', 'DeactivationFailed')
            .addEnumValue('Active', 'Active')
            .addEnumValue('Activating', 'Activating')
            .addEnumValue('Activation Failed', 'ActivationFailed')
        )
}