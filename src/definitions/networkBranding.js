const { StringXMLField } = require('@ah/core').Types;

module.exports = {
    loginFooterText: new StringXMLField('loginFooterText', 'Login Footer Text')
        .setMinApi(41)
        .setEditable(),
    loginLogo: new StringXMLField('loginLogo', 'Login Logo')
        .setMinApi(41)
        .setEditable(),
    pageFooter: new StringXMLField('pageFooter', 'Page Footer')
        .setMinApi(41)
        .setEditable(),
    pageHeader: new StringXMLField('pageHeader', 'Page Header')
        .setMinApi(41)
        .setEditable(),
    primaryColor: new StringXMLField('primaryColor', 'Primary Color')
        .setMinApi(41)
        .setEditable(),
    primaryComplementColor: new StringXMLField('primaryComplementColor', 'Primary Complement Color')
        .setMinApi(41)
        .setEditable(),
    quaternaryColor: new StringXMLField('quaternaryColor', 'Quaternary Color')
        .setMinApi(41)
        .setEditable(),
    quaternaryComplementColor: new StringXMLField('quaternaryComplementColor', 'Quaternary Complement Color')
        .setMinApi(41)
        .setEditable(),
    secondaryColor: new StringXMLField('secondaryColor', 'Secondary Color')
        .setMinApi(41)
        .setEditable(),
    tertiaryColor: new StringXMLField('tertiaryColor', 'Tertiary Color')
        .setMinApi(41)
        .setEditable(),
    tertiaryComplementColor: new StringXMLField('tertiaryComplementColor', 'Tertiary Complement Color')
        .setMinApi(41)
        .setEditable(),
    zeronaryColor: new StringXMLField('zeronaryColor', 'Zeronary Color')
        .setMinApi(41)
        .setEditable(),
    zeronaryComplementColor: new StringXMLField('zeronaryComplementColor', 'Zeronary Complement Color')
        .setMinApi(41)
        .setEditable(),
}
