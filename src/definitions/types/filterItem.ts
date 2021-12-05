import { ArrayXMLField,  StringXMLField, EnumXMLField } from '@aurahelper/core';


export function filterItem(filterItemName: string, filterItemLabel: string, minApi?: number | string) {
    return new ArrayXMLField(filterItemName, filterItemLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('field')
        .setSortOrder(undefined)
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