import { ArrayXMLField,  StringXMLField } from '@aurahelper/core';

export function botMessage(botMessageName: string, botMessageLabel: string, minApi?: number | string) {
    return new ArrayXMLField(botMessageName, botMessageLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('messageIdentifier')
        .setSortOrder('messageIdentifier')
        .addField('message', new StringXMLField('message', 'Message')
            .setEditable()
            .setRequired()
        )
        .addField('messageIdentifier', new StringXMLField('messageIdentifier', 'Message Identifier')
            .setEditable()
            .setRequired()
            .setMinApi(53)
            .setMaxLength(255)
        );
}