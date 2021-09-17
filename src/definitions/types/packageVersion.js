const { StringXMLField, ArrayXMLField, IntegerXMLField } = require('@aurahelper/core').Types;


module.exports = function (pkgVersionsName, pkgVersionsLabel, minApi) {
    return new ArrayXMLField(pkgVersionsName, pkgVersionsLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('namespace')
        .addField('namespace', new StringXMLField('namespace', 'Namespace')
            .setEditable()
            .setRequired()
        )
        .addField('majorNumber', new IntegerXMLField('majorNumber', 'Major Number')
            .setEditable()
            .setRequired()
        )
        .addField('minorNumber', new IntegerXMLField('minorNumber', 'Minor Number')
            .setEditable()
            .setRequired()
        );
} 