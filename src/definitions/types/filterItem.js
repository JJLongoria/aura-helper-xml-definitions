const { StringXMLField, ArrayXMLField, EnumXMLField } = require('../../factory/xmlFactory');


module.exports = function (filterItemName, filterItemLabel, minApi) {
    return new ArrayXMLField(filterItemName, filterItemLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('field')
        .addField('field', new StringXMLField('field', 'Field')
            .setEditable()
        )
        .addField('operation', new EnumXMLField('operation', 'Operation')
            .setEditable()
            .addEnumValue('Equals', 'equals')
            .addEnumValue('Not Equal', 'notEqual')
            .addEnumValue('Less Than', 'lessThan')
            .addEnumValue('Greater Than', 'greaterThan')
            .addEnumValue('Less Or Equal', 'lessOrEqual')
            .addEnumValue('Greater Or Equal', 'greaterOrEqual')
            .addEnumValue('Contains', 'contains')
            .addEnumValue('Not Contain', 'notContain')
            .addEnumValue('Starts With', 'startsWith')
            .addEnumValue('Includes', 'includes')
            .addEnumValue('Excludes', 'excludes')
            .addEnumValue('Within', 'within')
        )
        .addField('value', new StringXMLField('value', 'Value')
            .setEditable()
        )
        .addField('valueField', new StringXMLField('valueField', 'Value Field')
            .setEditable()
        );
} 