const { StringXMLField, IntegerXMLField, EnumXMLField } = require('../factory/xmlFactory');


module.exports = {
    index: new IntegerXMLField('index', 'Index')
        .setMinApi(41)
        .setEditable()
        .setRequired(),
    textField: new StringXMLField('textField', 'Text Field')
        .setMinApi(41)
        .setEditable(),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(41)
        .setEditable()
        .setRequired()
        .addEnumValue('Provided String', 'ProvidedString')
        .addEnumValue('Source', 'Source')
        .addEnumValue('Message Type', 'MessageType')
        .addEnumValue('Social Handle', 'SocialHandle')
        .addEnumValue('Social Network', 'SocialNetwork')
        .addEnumValue('Sentiment', 'Sentiment')
        .addEnumValue('Real Name', 'RealName')
        .addEnumValue('Content', 'Content')
        .addEnumValue('Pipe Separator', 'PipeSeparator')
        .addEnumValue('Colon Separator', 'ColonSeparator')
        .addEnumValue('Hyphen Separator', 'HyphenSeparator')
}