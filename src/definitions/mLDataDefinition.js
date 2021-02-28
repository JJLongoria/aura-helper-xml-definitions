const { StringXMLField, ArrayXMLField, EnumXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;
const MLFilterType = require('./types/mLFilter');

module.exports = {
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .setUnique(),
    entityDeveloperName: new StringXMLField('entityDeveloperName', 'Entity Developer Name')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT),
    excludedFields: new ArrayXMLField('excludedFields', 'Excluded Fields')
        .setMinApi(50)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    includedFields: new ArrayXMLField('includedFields', 'Included Fields')
        .setMinApi(50)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    joinFields: new ArrayXMLField('joinFields', 'Join Fields')
        .setMinApi(50)
        .setEditable()
        .setReserved()
        .addField('entity', new StringXMLField('entity', 'Entity')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        )
        .addField('field', new StringXMLField('field', 'Field')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('relatedField', new StringXMLField('relatedField', 'Related Field')
            .setEditable()
            .setRequired()
            .setReserved()
        )
        .addField('relationType', new EnumXMLField('relationType', 'Relation Type')
            .setEditable()
            .setReserved()
            .addEnumValue('Full', 'Full')
            .addEnumValue('Inner', 'Inner')
            .addEnumValue('Left Inner', 'Leftinner')
            .addEnumValue('Left Outer', 'Leftouter')
        )
        .addField('type', new EnumXMLField('type', 'Type')
            .setEditable()
            .setRequired()
            .addEnumValue('Excluded', 'Excluded')
            .addEnumValue('Expression', 'Expression')
            .addEnumValue('Included', 'Included')
            .addEnumValue('Join', 'Join')
            .addEnumValue('Prediction', 'Prediction')
            .addEnumValue('Pushback', 'Pushback')
            .addEnumValue('Related', 'Related')
        ),
    parentDefinitionDevName: new StringXMLField('parentDefinitionDevName', 'Parent Definition Dev Name')
        .setMinApi(50)
        .setEditable()
        .setReserved(),
    scoringFilter: MLFilterType('scoringFilter', 'Scoring Filter', 50),
    segmentFilter: MLFilterType('segmentFilter', 'Segment Filter', 50),
    trainingFilter: MLFilterType('trainingFilter', 'Training Filter', 50),
    type: new EnumXMLField('type', 'Type')
        .setEditable()
        .setRequired()
        .addEnumValue('Candidate', 'Candidate')
        .addEnumValue('Interaction', 'Interaction')
        .addEnumValue('Prediction', 'Prediction')
        .addEnumValue('Recipient', 'Recipient')
}