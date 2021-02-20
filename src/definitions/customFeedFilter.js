const { StringXMLField, ArrayXMLField, EnumXMLField } = require('../factory/xmlFactory');
const MetadataTypes = require('../values/metadataTypes');

module.exports = {
    criteria: new ArrayXMLField('criteria', 'Criteria')
        .setMinApi(35)
        .setEditable()
        .setFieldKey('relatedSObjectType')
        .addField('feedItemType', new EnumXMLField('feedItemType', 'Feed Item Type')
            .setEditable()
            .setRequired()
            .addEnumValue('Attach Article Event', 'AttachArticleEvent')
            .addEnumValue('Call Log Post', 'CallLogPost')
            .addEnumValue('Canvas Post', 'CanvasPost')
            .addEnumValue('Case Comment Post', 'CaseCommentPost')
            .addEnumValue('Change Status Post', 'ChangeStatusPost')
            .addEnumValue('Chat Transcript Post', 'ChatTranscriptPost')
            .addEnumValue('Content Post', 'ContentPost')
            .addEnumValue('Create Record Event', 'CreateRecordEvent')
            .addEnumValue('Email Message Event', 'EmailMessageEvent')
            .addEnumValue('Link Post', 'LinkPost')
            .addEnumValue('Milestone Event', 'MilestoneEvent')
            .addEnumValue('Question Post', 'QuestionPost')
            .addEnumValue('Poll Post', 'PollPost')
            .addEnumValue('Reply Post', 'ReplyPost')
            .addEnumValue('Social Post', 'SocialPost')
            .addEnumValue('Text Post', 'TextPost')
        )
        .addField('feedItemVisibility', new EnumXMLField('feedItemVisibility', 'Feed Item Visibility')
            .setEditable()
            .addEnumValue('All Users', 'AllUsers')
            .addEnumValue('Internal Users', 'InternalUsers')
        )
        .addField('relatedSObjectType', new StringXMLField('relatedSObjectType', 'Related SObject Type')
            .setEditable()
            .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(35)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(35)
        .setEditable()
        .setRequired(),
    isProtected: new StringXMLField('isProtected', 'Is Protected')
        .setMinApi(35)
        .setEditable(),
}