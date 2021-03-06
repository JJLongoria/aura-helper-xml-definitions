const { StringXMLField, ArrayXMLField } = require('@ah/core').Types;

module.exports = {
    valueTranslation: new ArrayXMLField('valueTranslation', 'Value Translation')
        .setMinApi(38)
        .setEditable()
        .addField('masterLabel', new StringXMLField('Master Label', 'masterLabel')
            .setEditable()
            .setRequired()
        )
        .addField('translation', new StringXMLField('translation', 'Translation')
            .setEditable()
        )
}