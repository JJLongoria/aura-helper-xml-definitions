const { StringXMLField, EnumXMLField } = require('../factory/xmlFactory');
const MetadataTypes = require('../values/metadataTypes');

module.exports = {
    assetIcon: new EnumXMLField('assetIcon', 'Asset Icon')
        .setMinApi(35)
        .setEditable()
        .addEnumValue('Icon 1', '1.png')
        .addEnumValue('Icon 2', '2.png')
        .addEnumValue('Icon 3', '3.png')
        .addEnumValue('Icon 4', '4.png')
        .addEnumValue('Icon 5', '5.png')
        .addEnumValue('Icon 6', '6.png')
        .addEnumValue('Icon 7', '7.png')
        .addEnumValue('Icon 8', '8.png')
        .addEnumValue('Icon 9', '9.png')
        .addEnumValue('Icon 10', '10.png')
        .addEnumValue('Icon 11', '11.png')
        .addEnumValue('Icon 12', '12.png')
        .addEnumValue('Icon 13', '13.png')
        .addEnumValue('Icon 14', '14.png')
        .addEnumValue('Icon 15', '15.png')
        .addEnumValue('Icon 16', '16.png')
        .addEnumValue('Icon 17', '17.png')
        .addEnumValue('Icon 18', '18.png')
        .addEnumValue('Icon 19', '19.png')
        .addEnumValue('Icon 20', '20.png'),
    description: new StringXMLField('description', 'Description')
        .setMinApi(35)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(35)
        .setEditable()
        .setRequired(),
    templateType: new EnumXMLField('templateType', 'Template Type')
        .setMinApi(35)
        .setEditable()
        .addEnumValue('App', 'App')
        .addEnumValue('Dashboard', 'Dashboard')
        .addEnumValue('Lens', 'Lens')
}