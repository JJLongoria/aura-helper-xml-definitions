const { StringXMLField, ObjectXMLField, EnumXMLField, ArrayXMLField } = require('@ah/core').Types;

module.exports = function (botNavigationName, botNavigationLabel, minApi) {
    return new ObjectXMLField(botNavigationName, botNavigationLabel)
        .setMinApi(minApi)
        .setEditable()
        .addField('botNavigationLinks', new ArrayXMLField('botNavigationLinks', 'Bot Navigation Links')
            .setEditable()
            .addField('label', new StringXMLField('label', 'Label')
                .setEditable()
            )
            .addField('targetBotDialog', new StringXMLField('targetBotDialog', 'Target Bot Dialog')
                .setEditable()
                .setRequired()
            )
        )
        .addField('type', new EnumXMLField('type', 'Type')
            .setEditable()
            .addEnumValue('Call', 'Call')
            .addEnumValue('Redirect', 'Redirect')
            .addEnumValue('Transfer To Agent', 'TransferToAgent')
        )
}