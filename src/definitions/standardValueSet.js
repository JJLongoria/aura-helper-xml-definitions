const { StringXMLField, ArrayXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;

module.exports = {
    groupingStringEnum: new EnumXMLField('groupingStringEnum', 'Grouping String Enum')
        .setMinApi(41)
        .setEditable()
        .addEnumValue('Done', 'Done')
        .addEnumValue('Finished', 'Finished')
        .addEnumValue('Completed', 'Completed'),
    sorted: new BooleanXMLField('sorted', 'Sorted')
        .setMinApi(38)
        .setEditable()
        .setRequired()
        .setDefaultValue(false),
    standardValue: new ArrayXMLField('standardValue', 'Standard Value')
        .setMinApi(33)
        .setEditable()
        .addField('allowEmail', new BooleanXMLField('allowEmail', 'Allow Email')
            .setEditable()
        )
        .addField('closed', new BooleanXMLField('closed', 'Closed')
            .setMaxApi(36)
            .setEditable()
        )
        .addField('color', new StringXMLField('color', 'Color')
            .setEditable()
        )
        .addField('converted', new BooleanXMLField('converted', 'Converted')
            .setEditable()
        )
        .addField('cssExposed', new BooleanXMLField('cssExposed', 'CSS Exposed')
            .setEditable()
        )
        .addField('default', new BooleanXMLField('default', 'Default')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('forecastCategory', new EnumXMLField('forecastCategory', 'Forecast Category')
            .setEditable()
            .addEnumValue('Omitted', 'Omitted')
            .addEnumValue('Pipeline', 'Pipeline')
            .addEnumValue('Best Case', 'BestCase')
            .addEnumValue('Forecast', 'Forecast')
            .addEnumValue('Closed', 'Closed')
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('highPriority', new BooleanXMLField('highPriority', 'High Priority')
            .setEditable()
        )
        .addField('isActive', new BooleanXMLField('isActive', 'Is Active')
            .setEditable()
            .setRequired()
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setMinApi(39)
            .setEditable()
        )
        .addField('probability', new IntegerXMLField('probability', 'Probability')
            .setEditable()
        )
        .addField('reverseRole', new StringXMLField('reverseRole', 'Reverse Role')
            .setEditable()
        )
        .addField('reviewed', new BooleanXMLField('reviewed', 'Reviewed')
            .setEditable()
        )
        .addField('won', new BooleanXMLField('won', 'Won')
            .setEditable()
        )

}