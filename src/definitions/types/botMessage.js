const { StringXMLField, ArrayXMLField } = require('../../factory/xmlFactory');

module.exports = function (botMessageName, botMessageLabel, minApi) {
    return new ArrayXMLField(botMessageName, botMessageLabel)
        .setMinApi(minApi)
        .setEditable()
        .addField('message', new StringXMLField('message', 'Message')
            .setEditable()
            .setRequired()
        )
}