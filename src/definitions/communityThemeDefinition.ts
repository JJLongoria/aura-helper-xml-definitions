import { StringXMLField, BooleanXMLField, ArrayXMLField, XMLDependencyField, DataValues, EnumXMLField, IntegerXMLField } from '@aurahelper/core';

export const CommunityThemeDefinition = {
    bundlesInfo: new ArrayXMLField('bundlesInfo', 'Bundles Info')
        .setMinApi(44)
        .setEditable()
        .setFieldKey('title')
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('image', new StringXMLField('image', 'Image')
            .setEditable()
            .addDependencyField(new XMLDependencyField('type', 'PreviewImage', DataValues.NOT_NULL))
        )
        .addField('order', new IntegerXMLField('order', 'Order')
            .setEditable()
            .setRequired()
            .setMinValue(1)
            .setMaxValue(4)
            .addDependencyField(new XMLDependencyField('type', 'PreviewImage', [1, 2, 3]))
            .addDependencyField(new XMLDependencyField('type', 'Highlight', [1, 2, 3, 4]))
        )
        .addField('title', new StringXMLField('title', 'Title')
            .setEditable()
            .setRequired()
        )
        .addField('type', new EnumXMLField('type', 'Type')
            .setEditable()
            .setRequired()
            .addEnumValue('Highlight', 'Highlight')
            .addEnumValue('Preview Image', 'PreviewImage')
        ),
    customThemeLayoutType: new ArrayXMLField('customThemeLayoutType', 'Custom Theme Layout Type')
        .setMinApi(38)
        .setEditable()
        .setFieldKey('label')
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
        ),
    defaultBrandingSet: new StringXMLField('defaultBrandingSet', 'Default Branding Set')
        .setMinApi(44)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(38)
        .setEditable(),
    enableExtendedCleanUpOnDelete: new BooleanXMLField('enableExtendedCleanUpOnDelete', 'Enable Extended Clean Up​ On Delete')
        .setMinApi(38)
        .setEditable()
        .setDefaultValue(false),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    publisher: new StringXMLField('publisher', 'Publisher')
        .setMinApi(45)
        .setEditable(),
    themeRouteOverride: new ArrayXMLField('themeRouteOverride', 'Theme Route Override')
        .setMinApi(44)
        .setEditable()
        .setFieldKey('pageType')
        .setSortOrder(undefined)
        .addField('customThemeLayoutType', new StringXMLField('customThemeLayoutType', 'Custom Theme Layout Type')
            .setEditable()
            .setRequired()
            .addDependencyField(new XMLDependencyField('themeLayoutType', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
        )
        .addField('pageAttributes', new EnumXMLField('pageAttributes', 'Page Attributes')
            .setEditable()
            .setRequired()
            .setDefaultValue('{"PageName":"Home"}')
            .addEnumValue('Home', '{"PageName":"Home"}')
        )
        .addField('pageType', new EnumXMLField('pageType', 'Page Type')
            .setEditable()
            .setRequired()
            .setDefaultValue('comm__standardPage')
            .addEnumValue('Community Standard Page', 'comm__standardPage')
        )
        .addField('themeLayoutType', new EnumXMLField('themeLayoutType', 'Theme Layout Type')
            .setEditable()
            .setRequired()
            .addEnumValue('Inner', 'Inner')
            .addEnumValue('Home', 'Home')
            .addEnumValue('Login', 'Login')
            .addDependencyField(new XMLDependencyField('customThemeLayoutType', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
        ),
    themeSetting: new ArrayXMLField('themeSetting', 'Theme Setting')
        .setEditable()
        .setRequired()
        .setFieldKey('themeLayout')
        .setSortOrder(undefined)
        .addField('customThemeLayoutType', new StringXMLField('customThemeLayoutType', 'Custom Theme Layout Type')
            .setEditable()
            .setRequired()
            .addDependencyField(new XMLDependencyField('themeLayoutType', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
        )
        .addField('themeLayout', new StringXMLField('themeLayout', 'Theme Layout')
            .setEditable()
            .setRequired()
        )
        .addField('themeLayoutType', new EnumXMLField('themeLayoutType', 'Theme Layout Type')
            .setEditable()
            .setRequired()
            .addEnumValue('Inner', 'Inner')
            .addEnumValue('Home', 'Home')
            .addEnumValue('Login', 'Login')
            .addDependencyField(new XMLDependencyField('customThemeLayoutType', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
        )

};