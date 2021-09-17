const { StringXMLField, EnumXMLField, BooleanXMLField } = require('@aurahelper/core').Types;

module.exports = {
    compositionComponent: new StringXMLField('compositionComponent', 'Composition Component')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    extensionName: new StringXMLField('extensionName', 'Extension Name')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    headerText: new StringXMLField('headerText', 'Header Text')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    hoverText: new StringXMLField('hoverText', 'Hover Text')
        .setMinApi(41)
        .setEditable(),
    icon: new StringXMLField('icon', 'Icon')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    isProtected: new BooleanXMLField('isProtected', 'Is Protected')
        .setMinApi(41)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    renderComponent: new StringXMLField('renderComponent', 'Render Component')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(41)
        .setEditable()
        .setRequired()
        .addEnumValue('Lightning', 'Lightning'),
}