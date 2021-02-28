const { StringXMLField, ObjectXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;
const MLIntentType = require('./types/mlIntent');
const MLSlotType = require('./types/mlSlot');
const BotVersion = require('./botVersion');

module.exports = {
    botMlDomain: new ObjectXMLField('botMlDomain', 'Bot Machine Learning Domain')
        .setMinApi(44)
        .setEditable()
        .setFieldKey('name')
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
        )
        .addField('mlIntents', MLIntentType('mlIntents', 'Machine Learning Intents'))
        .addField('mlSlotClasses', MLSlotType('mlSlotClasses', 'Machine Learning Slot Classes'))
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
        ),
    botUser: new StringXMLField('botUser', 'Bot User')
        .setMinApi(46)
        .setEditable(),
    botVersions: new ObjectXMLField('botVersions', 'Bot Versions')
        .setMinApi(43)
        .setEditable()
        .setFields(BotVersion),
    contextVariables: new ObjectXMLField('contextVariables', 'Context Variables')
        .setMinApi(45)
        .setEditable()
        .addField('contextVariableMappings', new ObjectXMLField('contextVariableMappings', 'Context Variable Mappings')
            .setEditable()
            .setFieldKey('fieldName')
            .addField('fieldName', new StringXMLField('fieldName', 'Field Name')
                .setEditable()
                .setRequired()
                .setMetadataType(MetadataTypes.CUSTOM_FIELD)
            )
            .addField('messageType', new EnumXMLField('messageType', 'Message Type')
                .setEditable()
                .setRequired()
                .addEnumValue('Text', 'Text')
                .addEnumValue('Facebook', 'Facebook')
                .addEnumValue('Line', 'Line')
                .addEnumValue('Google Home', 'GoogleHome')
                .addEnumValue('Alexa', 'Alexa')
                .addEnumValue('Omega', 'Omega')
                .addEnumValue('Apple Business Chat', 'AppleBusinessChat')
                .addEnumValue('WeChat', 'WeChat')
                .addEnumValue('Web Chat', 'WebChat')
                .addEnumValue('WhatsApp', 'WhatsApp')
                .addEnumValue('Phone', 'Phone')
            )
            .addField('SObjectType', new EnumXMLField('SObjectType', 'SObject Type')
                .setEditable()
                .setRequired()
                .addEnumValue('Live Chat Transcript', 'LiveChatTranscript')
                .addEnumValue('Messaging End User', 'MessagingEndUser')
                .addEnumValue('Messaging Session', 'MessagingSession')
            )
        )
        .addField('dataType', new EnumXMLField('dataType', 'Data Type')
            .setEditable()
            .setRequired()
            .addEnumValue('Text', 'Text')
            .addEnumValue('Number', 'Number')
            .addEnumValue('Boolean', 'Boolean')
            .addEnumValue('Object', 'Object')
            .addEnumValue('Date', 'Date')
            .addEnumValue('DateTime', 'DateTime')
            .addEnumValue('Currency', 'Currency')
            .addEnumValue('Id', 'Id')
        )
        .addField('developerName', new StringXMLField('developerName', 'Developer Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
        )
        .addField('SObjectType', new EnumXMLField('SObjectType', 'SObject Type')
            .setEditable()
            .addEnumValue('Bot Definition', 'BotDefinition')
            .addEnumValue('Queue', 'Queue')
        ),
    description: new StringXMLField('description', 'Description')
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setEditable(),
    logPrivateConversationData: new BooleanXMLField('logPrivateConversationData', 'Log Private Conversation Data')
        .setEditable(),
}