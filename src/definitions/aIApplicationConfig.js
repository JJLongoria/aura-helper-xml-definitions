const { StringXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField } = require('../factory/xmlFactory');


module.exports = {
    aiApplicationDeveloperName: new StringXMLField('aiApplicationDeveloperName', 'AI Application Developer Name')
        .setMinApi(50)
        .setUnique()
        .setRequired(),
    applicationId: new StringXMLField('applicationId', 'Application ID')
        .setMinApi(50)
        .setUnique()
        .setRequired(),
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(50)
        .setUnique()
        .setRequired(),
    insightReasonEnabled: new BooleanXMLField('insightReasonEnabled', 'Insight Reason Enabled')
        .setMinApi(50)
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(50)
        .setRequired(),
    rank: new IntegerXMLField('rank', 'Rank')
        .setMinApi(50)
        .setRequired(),
    scoringMode: new EnumXMLField('scoringMode', 'Scoring Mode')
        .setMinApi(50)
        .setRequired()
        .addEnumValue('Batch', 'Batch')
        .addEnumValue('On Demand', 'OnDemand')
        .addEnumValue('Streaming', 'Streaming'),
}