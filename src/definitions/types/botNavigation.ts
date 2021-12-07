import { ArrayXMLField,  StringXMLField, ObjectXMLField, EnumXMLField } from '@aurahelper/core';

export function botNavigation(botNavigationName: string, botNavigationLabel: string, minApi?: number | string) {
    return new ObjectXMLField(botNavigationName, botNavigationLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('botNavigationLinks')
        .setSortOrder(undefined)
        .addField('botNavigationLinks', new ArrayXMLField('botNavigationLinks', 'Bot Navigation Links')
            .setEditable()
            .setFieldKey('label')
            .setSortOrder(undefined)
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
        );
}