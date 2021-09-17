const { StringXMLField, IntegerXMLField, BooleanXMLField } = require('@aurahelper/core').Types;

module.exports = {
    buttonIconUrl: new StringXMLField('buttonIconUrl', 'Button Icon URL')
        .setMinApi(25)
        .setEditable(),
    buttonStyle: new StringXMLField('buttonStyle', 'Button Style')
        .setMinApi(25)
        .setEditable(),
    buttonText: new StringXMLField('buttonText', 'Button Text')
        .setMinApi(25)
        .setEditable(),
    buttonWidth: new IntegerXMLField('buttonWidth', 'Button Width')
        .setMinApi(25)
        .setEditable(),
    height: new IntegerXMLField('height', 'Height')
        .setMinApi(25)
        .setEditable(),
    isHeightFixed: new BooleanXMLField('isHeightFixed', 'Is Height Fixed')
        .setMinApi(25)
        .setEditable()
        .setRequired(),
    isHidden: new BooleanXMLField('isHidden', 'Is Hidden')
        .setMinApi(25)
        .setEditable()
        .setRequired(),
    isWidthFixed: new BooleanXMLField('isWidthFixed', 'Is Width Fixed')
        .setMinApi(25)
        .setEditable()
        .setRequired(),
    visualforcePage: new StringXMLField('visualforcePage', 'Visualforce Page')
        .setMinApi(25)
        .setEditable()
        .setRequired(),
    width: new IntegerXMLField('width', 'Width')
        .setMinApi(25)
        .setEditable(),
}