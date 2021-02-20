const { StringXMLField, ArrayXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField, XMLDependencyField } = require('../factory/xmlFactory');
const NavigationLinkSetType = require('../definitions/types/navigationLinkSet');

module.exports = {
    baseTemplate: new EnumXMLField('baseTemplate', 'Base Template')
        .setMinApi(41)
        .setEditable()
        .addEnumValue('Community Template', 'c'),
    bundlesInfo: new ArrayXMLField('bundlesInfo', 'Bundles Info')
        .setMinApi(38)
        .setEditable()
        .setFieldKey('title')
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('image', new StringXMLField('image', 'Image')
            .setEditable()
            .setRequired()
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
    category: new EnumXMLField('category', 'Category')
        .setEditable()
        .setRequired()
        .addEnumValue('Commerce', 'Commerce')
        .addEnumValue('IT', 'IT')
        .addEnumValue('Marketing', 'Marketing')
        .addEnumValue('Sales', 'Sales')
        .addEnumValue('Service', 'Service'),
    defaultBrandingSet: new StringXMLField('defaultBrandingSet', 'defaultBrandingSet')
        .setMinApi(40)
        .setEditable()
        .setRequired(),
    defaultThemeDefinition: new StringXMLField('defaultThemeDefinition', 'Default Theme Definition')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
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
    navigationLinkSet: NavigationLinkSetType('navigationLinkSet', 'Navigation Link Set', 37, 46),
    pageSetting: new ArrayXMLField('pageSetting', 'Page Setting')
        .setMinApi(38)
        .setEditable()
        .setFieldKey('page')
        .addField('page', new StringXMLField('page', 'Page')
            .setEditable()
            .setRequired()
        )
        .addField('themeLayout', new StringXMLField('themeLayout', 'Theme Layout')
            .setMinApi(39)
            .setEditable()
            .setRequired()
        ),
    publisher: new StringXMLField('publisher', 'Publisher')
        .setMinApi(45)
        .setEditable()
        .setRequired(),
}