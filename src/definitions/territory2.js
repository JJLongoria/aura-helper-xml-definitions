const { StringXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;

module.exports = {
    accountAccessLevel: new EnumXMLField('accountAccessLevel', 'Account Access Level')
        .setMinApi(32)
        .setEditable()
        .addEnumValue('Read', 'Read')
        .addEnumValue('Edit', 'Edit')
        .addEnumValue('None', 'None'),
    caseAccessLevel: new EnumXMLField('caseAccessLevel', 'Case Access Level')
        .setMinApi(32)
        .setEditable()
        .addEnumValue('Read', 'Read')
        .addEnumValue('Edit', 'Edit')
        .addEnumValue('None', 'None'),
    contactAccessLevel: new EnumXMLField('contactAccessLevel', 'Contact Access Level')
        .setMinApi(32)
        .setEditable()
        .addEnumValue('Read', 'Read')
        .addEnumValue('Edit', 'Edit')
        .addEnumValue('None', 'None'),
    customFields: new ArrayXMLField('customFields', 'Custom Fields')
        .setMinApi(32)
        .setEditable()
        .setFieldKey('name')
        .setSortOrder(undefined)
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
        )
        .addField('value', new StringXMLField('value', 'Value')
            .setEditable()
            .setRequired()
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(32)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(32)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(32)
        .setEditable()
        .setRequired(),
    opportunityAccessLevel: new EnumXMLField('opportunityAccessLevel', 'Opportunity Access Level')
        .setMinApi(32)
        .setEditable()
        .addEnumValue('Read', 'Read')
        .addEnumValue('Edit', 'Edit')
        .addEnumValue('None', 'None'),
    parentTerritory: new StringXMLField('parentTerritory', 'Parent Territory')
        .setMinApi(32)
        .setEditable()
        .setMetadataType(MetadataTypes.TERRITORY),
    ruleAssociations: new ArrayXMLField('ruleAssociations', 'Rule Associations')
        .setMinApi(32)
        .setEditable()
        .setFieldKey('ruleName')
        .setSortOrder(undefined)
        .addField('inherited', new BooleanXMLField('inherited', 'Inherited')
            .setEditable()
            .setRequired()
        )
        .addField('ruleName', new StringXMLField('ruleName', 'Rule Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.TERRITORY_2_RULE)
        ),
    territory2Type: new StringXMLField('territory2Type', 'Territory 2 Type')
        .setMinApi(32)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.TERRITORY_2_TYPE)
}