const { StringXMLField, ObjectXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField, ArrayXMLField } = require('@aurahelper/core').Types;

module.exports = {
    available: new BooleanXMLField('available', 'Available')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    backgroundColor: new StringXMLField('backgroundColor', 'Background Color')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    bodyColor: new StringXMLField('bodyColor', 'Body Color')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    bottomLine: new ObjectXMLField('bottomLine', 'Bottom Line')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .setFieldKey('color')
        .setSortOrder(undefined)
        .addField('color', new StringXMLField('color', 'Color')
            .setEditable()
            .setRequired()
        )
        .addField('height', new StringXMLField('height', 'Height')
            .setEditable()
            .setRequired()
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(12)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(12)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    footer: new ObjectXMLField('footer', 'Footer')
        .setMinApi(12)
        .setEditable()
        .setFieldKey('logo')
        .setSortOrder(undefined)
        .addField('backgroundColor', new StringXMLField('backgroundColor', 'Background Color')
            .setEditable()
            .setRequired()
        )
        .addField('height', new IntegerXMLField('height', 'Height')
            .setEditable()
            .setRequired()
        )
        .addField('horizontalAlignment', new EnumXMLField('horizontalAlignment', 'Horizontal Alignment')
            .setEditable()
            .addEnumValue('None', 'None')
            .addEnumValue('Left', 'Left')
            .addEnumValue('Center', 'Center')
            .addEnumValue('Right', 'Right')
        )
        .addField('logo', new StringXMLField('logo', 'Logo')
            .setEditable()
        )
        .addField('verticalAlignment', new EnumXMLField('verticalAlignment', 'Vertical Alignment')
            .setEditable()
            .addEnumValue('None', 'None')
            .addEnumValue('Top', 'Top')
            .addEnumValue('Middle', 'Middle')
            .addEnumValue('Bottom', 'Bottom')
        ),
    header: new ObjectXMLField('header', 'Header')
        .setMinApi(12)
        .setEditable()
        .setFieldKey('logo')
        .setSortOrder(undefined)
        .addField('backgroundColor', new StringXMLField('backgroundColor', 'Background Color')
            .setEditable()
            .setRequired()
        )
        .addField('height', new IntegerXMLField('height', 'Height')
            .setEditable()
            .setRequired()
        )
        .addField('horizontalAlignment', new EnumXMLField('horizontalAlignment', 'Horizontal Alignment')
            .setEditable()
            .addEnumValue('None', 'None')
            .addEnumValue('Left', 'Left')
            .addEnumValue('Center', 'Center')
            .addEnumValue('Right', 'Right')
        )
        .addField('logo', new StringXMLField('logo', 'Logo')
            .setEditable()
        )
        .addField('verticalAlignment', new EnumXMLField('verticalAlignment', 'Vertical Alignment')
            .setEditable()
            .addEnumValue('None', 'None')
            .addEnumValue('Top', 'Top')
            .addEnumValue('Middle', 'Middle')
            .addEnumValue('Bottom', 'Bottom')
        ),
    middleLine: new ObjectXMLField('middleLine', 'Middle Line')
        .setMinApi(12)
        .setEditable()
        .setFieldKey('color')
        .setSortOrder(undefined)
        .addField('color', new StringXMLField('color', 'Color')
            .setEditable()
            .setRequired()
        )
        .addField('height', new IntegerXMLField('height', 'Height')
            .setEditable()
            .setRequired()
        ),
    name: new StringXMLField('name', 'Name')
        .setMinApi(12)
        .setEditable()
        .setRequired(),
    topLine: new ObjectXMLField('topLine', 'Top Line')
        .setMinApi(12)
        .setEditable()
        .setFieldKey('color')
        .setSortOrder(undefined)
        .addField('color', new StringXMLField('color', 'Color')
            .setEditable()
            .setRequired()
        )
        .addField('height', new IntegerXMLField('height', 'Height')
            .setEditable()
            .setRequired()
        ),

}