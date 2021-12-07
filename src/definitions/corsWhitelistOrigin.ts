import { StringXMLField } from "@aurahelper/core";

export const CorsWhitelistOrigin = {
    urlPattern: new StringXMLField('urlPattern', 'URL Pattern')
        .setMinApi(32)
        .setEditable()
};