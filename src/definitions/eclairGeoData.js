const { StringXMLField, ArrayXMLField, DoubleXMLField, EnumXMLField } = require('../factory/xmlFactory');

module.exports = {
    maps: new ArrayXMLField('maps', 'Maps')
        .setMinApi(39)
        .setEditable()
        .setFieldKey('mapName')
        .addField('boundingBoxBottom', new DoubleXMLField('boundingBoxBottom', 'Bounding Box Bottom')
            .setEditable()
        )
        .addField('boundingBoxLeft', new DoubleXMLField('boundingBoxLeft', 'Bounding Box Left')
            .setEditable()
        )
        .addField('boundingBoxRight', new DoubleXMLField('boundingBoxRight', 'Bounding Box Right')
            .setEditable()
        )
        .addField('boundingBoxTop', new DoubleXMLField('boundingBoxTop', 'Bounding Box Top')
            .setEditable()
        )
        .addField('mapLabel', new StringXMLField('mapLabel', 'Map Label')
            .setEditable()
            .setRequired()
        )
        .addField('mapName', new StringXMLField('mapName', 'Map Name')
            .setEditable()
            .setRequired()
        )
        .addField('projection', new EnumXMLField('projection', 'Projection')
            .setEditable()
            .setRequired()
            .addEnumValue('Equirectangular', 'Equirectangular')
            .addEnumValue('Mercator', 'Mercator')
            .addEnumValue('AlbersUSA', 'AlbersUSA')
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(39)
        .setEditable()
        .setRequired()
        .setUnique()
}