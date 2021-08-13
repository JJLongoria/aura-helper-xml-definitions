const { StringXMLField, EnumXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    accessLevel: new EnumXMLField('accessLevel', 'Access Level')
        .setMinApi(45)
        .setEditable()
        .setDefaultValue('Read')
        .addEnumValue('Read', 'Read')
        .addEnumValue('Edit', 'Edit'),
    accountToCriteriaField: new EnumXMLField('accountToCriteriaField', 'Account To Criteria Field')
        .setMinApi(45)
        .setEditable()
        .addEnumValue('Account Owner', 'Account.OwnerId')
        .addEnumValue('Parent Account', 'Account.ParentId')
        .addEnumValue('Campaign Owner', 'Campaign.OwnerId')
        .addEnumValue('Case Account', 'Case.AccountId')
        .addEnumValue('Case Owner', 'Case.OwnerId')
        .addEnumValue('Contact Account', 'Contact.AccountId')
        .addEnumValue('Contact Owner', 'Contact.OwnerId')
        .addEnumValue('Lead Converted Account', 'Lead.ConvertedAccountId')
        .addEnumValue('Lead Owner', 'Lead.OwnerId')
        .addEnumValue('Lead Partner Account', 'Lead.PartnerAccountId')
        .addEnumValue('Opportunity Account', 'Opportunity.AccountId')
        .addEnumValue('Opportunity Owner', 'Opportunity.OwnerId')
        .addEnumValue('Opportunity Parent Account', 'Opportunity.PartnerAccountId')
        .addEnumValue('Order Account', 'Order.AccountId')
        .addEnumValue('Order Owner', 'Order.OwnerId'),
    description: new StringXMLField('description', 'Description')
        .setMinApi(45)
        .setEditable(),
    entityType: new StringXMLField('entityType', 'Entity Type')
        .setMinApi(45)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(45)
        .setEditable()
        .setRequired(),
    staticFormulaCriteria: new StringXMLField('staticFormulaCriteria', 'Static Formula Criteria')
        .setMinApi(45)
        .setEditable(),
    type: new StringXMLField('type', 'Type')
        .setMinApi(45)
        .setEditable(),
};