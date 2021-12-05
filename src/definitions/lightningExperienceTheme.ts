import { StringXMLField, BooleanXMLField } from '@aurahelper/core';

export const LightningExperienceTheme = {
    defaultBrandingSet: new StringXMLField('defaultBrandingSet', 'Default Branding Set')
        .setMinApi(42)
        .setEditable()
        .setRequired(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(42)
        .setEditable()
        .setMaxLength(1000),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(42)
        .setEditable()
        .setRequired()
        .setUnique()
        .setMaxLength(70),
    shouldOverrideLoadingImage: new BooleanXMLField('shouldOverrideLoadingImage', 'Should Override Loading Image')
        .setMinApi(42)
        .setEditable()
}