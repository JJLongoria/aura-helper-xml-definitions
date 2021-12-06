import { StringXMLField } from '@aurahelper/core';

export const RedirectWhitelistUrl = {
    Url: new StringXMLField('Url', 'URL')
        .setMinApi(48)
        .setEditable()
        .setRequired()
}