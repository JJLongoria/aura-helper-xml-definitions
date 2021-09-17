const { StringXMLField, ArrayXMLField } = require('@aurahelper/core').Types;

module.exports = function (botMessageName, botMessageLabel, minApi) {
    return new ArrayXMLField(botMessageName, botMessageLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('message')
        .setSortOrder(undefined)
        .addField('message', new StringXMLField('message', 'Message')
            .setEditable()
            .setRequired()
        )
}