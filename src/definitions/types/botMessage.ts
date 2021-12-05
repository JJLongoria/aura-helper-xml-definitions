import { ArrayXMLField,  StringXMLField } from '@aurahelper/core';

export function botMessage(botMessageName: string, botMessageLabel: string, minApi?: number | string) {
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