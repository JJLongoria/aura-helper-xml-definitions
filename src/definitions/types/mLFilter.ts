import { StringXMLField, IntegerXMLField, ObjectXMLField, EnumXMLField, MetadataTypes } from '@aurahelper/core';

export function mlFilter(filterName: string, filterLabel: string, minApi?: number | string) {
    return new ObjectXMLField(filterName, filterLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('filterName')
        .setSortOrder(undefined)
        .addField('filterName', new StringXMLField('filterName', 'Filter Name')
            .setEditable()
            .setRequired()
        )
        .addField('lhFilter', new ObjectXMLField('lhFilter', 'Left-hand filter')
            .setEditable()
            .setDefinitionReference('this>'+filterName+'>lhFilter')
        )
        .addField('lhPredictionField', new StringXMLField('lhPredictionField', 'Left-hand Pridiction Field')
            .setEditable()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('lhType', new EnumXMLField('lhType', 'Left-hand Type')
            .setEditable()
            .addEnumValue('Boolean', 'Boolean')
            .addEnumValue('Comparison', 'Comparison')
            .addEnumValue('Currency', 'Currency')
            .addEnumValue('Date', 'Date')
            .addEnumValue('Date Time', 'DateTime')
            .addEnumValue('Number', 'Number')
            .addEnumValue('String', 'String')
            .addEnumValue('Supplier', 'Supplier')
            .addEnumValue('Varchar', 'Varchar')
        )
        .addField('lhUnit', new EnumXMLField('lhUnit', 'Left-hand Unit')
            .setEditable()
            .addEnumValue('Milliseconds', 'Milliseconds')
            .addEnumValue('Seconds', 'Seconds')
            .addEnumValue('Minutes', 'Minutes')
            .addEnumValue('Hours', 'Hours')
            .addEnumValue('Days', 'Days')
            .addEnumValue('Weeks', 'Weeks')
            .addEnumValue('Months', 'Months')
            .addEnumValue('Years', 'Years')
        )
        .addField('lhValue', new StringXMLField('lhValue', 'Left-hand Value')
            .setEditable()
        )
        .addField('lhUnit', new EnumXMLField('lhUnit', 'Left-hand Unit')
            .setEditable()
            .setRequired()
            .addEnumValue('And', 'And')
            .addEnumValue('Or', 'Or')
            .addEnumValue('Not', 'Not')
            .addEnumValue('Less Than', 'LessThan')
            .addEnumValue('Less Than Or Equal', 'LessThanOrEqual')
            .addEnumValue('Greater Than', 'GreaterThan')
            .addEnumValue('Greater Than Or Equal', 'GreaterThanOrEqual')
            .addEnumValue('Equals', 'Equals')
            .addEnumValue('Not Equals', 'NotEquals')
            .addEnumValue('Add', 'Add')
            .addEnumValue('Subtract', 'Subtract')
            .addEnumValue('Multiply', 'Multiply')
            .addEnumValue('Divide', 'Divide')
            .addEnumValue('Is Null', 'IsNull')
            .addEnumValue('Is Not Null', 'IsNotNull')
            .addEnumValue('Starts With', 'StartsWith')
            .addEnumValue('Ends With', 'EndsWith')
            .addEnumValue('Contains', 'Contains')
            .addEnumValue('Concat', 'Concat')
            .addEnumValue('Does Not Contain', 'DoesNotContain')
            .addEnumValue('Between', 'Between')
            .addEnumValue('In', 'In')
        )
        .addField('rhFilter', new ObjectXMLField('rhFilter', 'Right-hand filter')
            .setEditable()
            .setDefinitionReference('this>'+filterName+'>rhFilter')
        )
        .addField('rhPredictionField', new StringXMLField('rhPredictionField', 'Right-hand Pridiction Field')
            .setEditable()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('rhType', new EnumXMLField('rhType', 'Right-hand Type')
            .setEditable()
            .addEnumValue('Boolean', 'Boolean')
            .addEnumValue('Comparison', 'Comparison')
            .addEnumValue('Currency', 'Currency')
            .addEnumValue('Date', 'Date')
            .addEnumValue('Date Time', 'DateTime')
            .addEnumValue('Number', 'Number')
            .addEnumValue('String', 'String')
            .addEnumValue('Supplier', 'Supplier')
            .addEnumValue('Varchar', 'Varchar')
        )
        .addField('rhUnit', new EnumXMLField('rhUnit', 'Right-hand Unit')
            .setEditable()
            .addEnumValue('Milliseconds', 'Milliseconds')
            .addEnumValue('Seconds', 'Seconds')
            .addEnumValue('Minutes', 'Minutes')
            .addEnumValue('Hours', 'Hours')
            .addEnumValue('Days', 'Days')
            .addEnumValue('Weeks', 'Weeks')
            .addEnumValue('Months', 'Months')
            .addEnumValue('Years', 'Years')
        )
        .addField('rhValue', new StringXMLField('rhValue', 'Right-hand Value')
            .setEditable()
        )
        .addField('sortOrder', new IntegerXMLField('sortOrder', 'Sort Order')
            .setEditable()
        );

}