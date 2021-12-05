import { StringXMLField, BooleanXMLField, IntegerXMLField } from '@aurahelper/core';

module.exports = {
    collaborationGroup: new StringXMLField('collaborationGroup', 'Collaboration Group')
        .setMinApi(49)
        .setEditable()
        .setRequired(),
    customQuestion: new StringXMLField('customQuestion', 'Custom Question')
        .setMinApi(49)
        .setEditable()
        .setMaxLength(1000),
    feedbackFormDaysFrequency: new IntegerXMLField('feedbackFormDaysFrequency', 'Feedback Form Days Frequency')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .setMaxValue(30),
    isCustom: new BooleanXMLField('isCustom', 'Is Custom')
        .setMinApi(49)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .setUnique()
        .setMaxLength(80),
    promptDelayTime: new IntegerXMLField('promptDelayTime', 'Prompt Delay Time')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .setMinApi(0)
        .setMaxValue(359940),
    sendFeedbackToSalesforce: new BooleanXMLField('sendFeedbackToSalesforce', 'Send Feedback To Salesforce')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .setDefaultValue(false)
}