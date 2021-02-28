const { StringXMLField, ArrayXMLField } = require('@ah/core').Types;

module.exports = {
    adapterUrl: new StringXMLField('adapterUrl', 'Adapter URL')
        .setMinApi(27)
        .setEditable(),
    displayName: new StringXMLField('displayName', 'Display Name')
        .setMinApi(27)
        .setEditable(),
    displayNameLabel: new StringXMLField('displayNameLabel', 'Display Name Label')
        .setMinApi(27)
        .setEditable(),
    internalNameLabel: new StringXMLField('internalNameLabel', 'Internal Name Label')
        .setMinApi(27)
        .setEditable(),
    version: new StringXMLField('version', 'Version')
        .setMinApi(27)
        .setEditable(),
    sections: new ArrayXMLField('sections', 'Sections')
        .setMinApi(27)
        .setEditable()
        .setFieldKey('name')
        .addField('items', new ArrayXMLField('items', 'Items')
            .setEditable()
            .setFieldKey('name')
            .addField('label', new StringXMLField('label', 'Label')
                .setEditable()
            )
            .addField('name', new StringXMLField('name', 'Name')
                .setEditable()
            )
            .addField('value', new StringXMLField('value', 'Value')
                .setEditable()
            )
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
        )
}