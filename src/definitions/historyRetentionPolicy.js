const { StringXMLField, IntegerXMLField } = require('../factory/xmlFactory');

module.exports = {
    archiveAfterMonths: new IntegerXMLField('archiveAfterMonths', 'Archive After Months')
        .setMinApi(31)
        .setEditable()
        .setDefaultValue(18)
        .setMinValue(1)
        .setMaxValue(18),
    archiveRetentionYears: new IntegerXMLField('archiveRetentionYears', 'Archive Retention Years')
        .setMinApi(31)
        .setEditable()
        .setDefaultValue(10)
        .setMinValue(0)
        .setMaxValue(10),
    description: new StringXMLField('description', 'Description')
        .setMinApi(31)
        .setEditable(),
    gracePeriodDays: new IntegerXMLField('gracePeriodDays', 'Grace Period Days')
        .setMinApi(31)
        .setEditable()
        .setDefaultValue(1)
        .setMinValue(0)
        .setMaxValue(10),
}