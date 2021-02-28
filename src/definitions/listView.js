const { StringXMLField, ObjectXMLField, ArrayXMLField, EnumXMLField } = require('@ah/core').Types;
const { MetadataTypes, DataValues } = require('@ah/core').Values;
const SharedTo = require('./sharedTo');

module.exports = {
    booleanFilter: new StringXMLField('booleanFilter', 'Boolean Filter')
        .setMinApi(14)
        .setEditable(),
    columns: new ArrayXMLField('columns', 'Columns')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    division: new StringXMLField('division', 'Division')
        .setMinApi(17)
        .setEditable(),
    filterScope: new EnumXMLField('filterScope', 'Filter Scope')
        .setMinApi(14)
        .setEditable()
        .addEnumValue('Everything', 'Everything')
        .addEnumValue('Mine', 'Mine')
        .addEnumValue('Mine And My Groups', 'MineAndMyGroups')
        .addEnumValue('Queue', 'Queue')
        .addEnumValue('Delegated', 'Delegated', 17)
        .addEnumValue('My Territory', 'MyTerritory', 17)
        .addEnumValue('My Team Territory', 'MyTeamTerritory', 17)
        .addEnumValue('Team', 'Team', 17)
        .addEnumValue('Sales Team', 'SalesTeam', 49),
    filters: new ArrayXMLField('filters', 'Filters')
        .setMinApi(17)
        .setEditable()
        .setFieldKey('filter')
        .addField('filter', new StringXMLField('filter', 'Filter')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('operation', new EnumXMLField('operation', 'Operation')
            .setEditable()
            .setRequired()
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
        ),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(17)
        .setEditable()
        .setRequired(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(17)
        .setEditable()
        .setRequired(),
    language: new EnumXMLField('language', 'Language')
        .setMinApi(17)
        .setEditable()
        .setEnumValues(DataValues.SF_LANGUAGES),
    queue: new StringXMLField('queue', 'Queue')
        .setMinApi(17)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.QUEUE),
    sharedTo: new ObjectXMLField('sharedTo', 'Shared To')
        .setMinApi(17)
        .setEditable()
        .setFields(SharedTo)
}