const { StringXMLField, ArrayXMLField } = require('@aurahelper/core').Types;

module.exports = function (intentName, intentApi, minApi) {
    return new ArrayXMLField(intentName, intentApi)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('developerName')
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('developerName', new StringXMLField('developerName', 'Developer Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
        )
        .addField('mlIntentUtterances', new ArrayXMLField('mlIntentUtterances', 'Machine Learning Intent Utterances')
            .setEditable()
            .setFieldKey('utterance')
            .setSortOrder(undefined)
            .addField('utterance', new StringXMLField('utterance', 'Utterance')
                .setEditable()
            )
        )
        .addField('relatedMlIntents', new ArrayXMLField('relatedMlIntents', 'Related Machine Learning Intents')
            .setEditable()
            .setFieldKey('relatedMlIntent')
            .setSortOrder(undefined)
            .addField('relatedMlIntent', new StringXMLField('relatedMlIntent', 'Related Machine Learning Intent')
                .setEditable()
            )
        )

}