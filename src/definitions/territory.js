const { StringXMLField, EnumXMLField, BooleanXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;

module.exports = {
    accountAccessLevel: new EnumXMLField('accountAccessLevel', 'Account Access Level')
        .setMinApi(31)
        .setEditable()
        .addEnumValue('Read', 'Read')
        .addEnumValue('Edit', 'Edit')
        .addEnumValue('None', 'None'),
    caseAccessLevel: new EnumXMLField('caseAccessLevel', 'Case Access Level')
        .setMinApi(24)
        .setEditable()
        .addEnumValue('Read', 'Read')
        .addEnumValue('Edit', 'Edit')
        .addEnumValue('None', 'None'),
    contactAccessLevel: new EnumXMLField('contactAccessLevel', 'Contact Access Level')
        .setMinApi(24)
        .setEditable()
        .addEnumValue('Read', 'Read')
        .addEnumValue('Edit', 'Edit')
        .addEnumValue('None', 'None'),
    description: new StringXMLField('description', 'Description')
        .setMinApi(24)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(24)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    mayForecastManagerShare: new BooleanXMLField('mayForecastManagerShare', 'May Forecast Manager Share')
        .setMinApi(24)
        .setEditable(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(24)
        .setEditable()
        .setRequired(),
    opportunityAccessLevel: new EnumXMLField('opportunityAccessLevel', 'Opportunity Access Level')
        .setMinApi(24)
        .setEditable()
        .addEnumValue('Read', 'Read')
        .addEnumValue('Edit', 'Edit')
        .addEnumValue('None', 'None'),
    parentTerritory: new StringXMLField('parentTerritory', 'Parent Territory')
        .setMinApi(24)
        .setEditable()
        .setMetadataType(MetadataTypes.TERRITORY),
}