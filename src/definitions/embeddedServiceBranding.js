const { StringXMLField } = require('@aurahelper/core').Types;

module.exports = {
    contrastInvertedColor: new StringXMLField('contrastInvertedColor', 'Contrast Inverted Color')
        .setMinApi(39)
        .setEditable(),
    contrastPrimaryColor: new StringXMLField('contrastPrimaryColor', 'Contrast Primary Color')
        .setMinApi(39)
        .setEditable(),
    embeddedServiceConfig: new StringXMLField('embeddedServiceConfig', 'Embedded Service Config')
        .setMinApi(39)
        .setEditable()
        .setRequired(),
    font: new StringXMLField('font', 'Font')
        .setMinApi(39)
        .setEditable(),
    height: new StringXMLField('height', 'Height')
        .setMinApi(43)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(39)
        .setEditable()
        .setRequired()
        .setUnique(),
    navBarColor: new StringXMLField('navBarColor', 'Navbar Color')
        .setMinApi(39)
        .setEditable(),
    navBarTextColor: new StringXMLField('navBarTextColor', 'Navbar Text Color')
        .setMinApi(49)
        .setEditable(),
    primaryColor: new StringXMLField('primaryColor', 'Primary Color')
        .setMinApi(39)
        .setEditable(),
    secondaryColor: new StringXMLField('secondaryColor', 'Secondary Color')
        .setMinApi(39)
        .setEditable(),
    secondaryNavBarColor: new StringXMLField('secondaryNavBarColor', 'Secondary Navbar Color')
        .setMinApi(49)
        .setEditable(),
    width: new StringXMLField('width', 'Width')
        .setMinApi(43)
        .setEditable(),
}