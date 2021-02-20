const { StringXMLField, EnumXMLField, BooleanXMLField } = require('../factory/xmlFactory');
const MetadataTypes = require('../values/metadataTypes');

module.exports = {
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
    parentRole: new StringXMLField('parentRole', 'Parent Role')
        .setMinApi(24)
        .setEditable()
        .setMetadataType(MetadataTypes.ROLE),
}