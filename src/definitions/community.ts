import { StringXMLField, BooleanXMLField, ArrayXMLField, MetadataTypes, IntegerXMLField, ObjectXMLField } from '@aurahelper/core';

export const Community = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(27)
        .setEditable(),
    chatterAnswersFacebookSsoUrl: new StringXMLField('chatterAnswersFacebookSsoUrl', 'Chatter Answers Facebook Single Sing-On URL')
        .setMinApi(27),
    communityFeedPage: new StringXMLField('communityFeedPage', 'Community Feed Page')
        .setMinApi(27)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(27)
        .setEditable(),
    emailFooterDocument: new StringXMLField('emailFooterDocument', 'Email Footer Document')
        .setMinApi(27)
        .setEditable(),
    emailHeaderDocument: new StringXMLField('emailHeaderDocument', 'Email Header Document')
        .setMinApi(27)
        .setEditable(),
    emailNotificationUrl: new StringXMLField('emailNotificationUrl', 'Email Notification URL')
        .setMinApi(28)
        .setEditable(),
    enableChatterAnswers: new BooleanXMLField('enableChatterAnswers', 'Enable Chatter Answers')
        .setMinApi(27)
        .setEditable(),
    enablePrivateQuestions: new BooleanXMLField('enablePrivateQuestions', 'Enable Private Questions')
        .setMinApi(27)
        .setEditable(),
    expertsGroup: new StringXMLField('expertsGroup', 'Experts Group')
        .setMinApi(27)
        .setEditable(),
    portal: new StringXMLField('portal', 'Portal')
        .setMinApi(27)
        .setEditable(),
    portalEmailNotificationUrl: new StringXMLField('portalEmailNotificationUrl', 'Portal Email Notification URL')
        .setMinApi(28)
        .setEditable(),
    reputationLevels: new ObjectXMLField('reputationLevels', 'Reputation Levels')
        .setMinApi(28)
        .setEditable()
        .setFieldKey('ideaReputationLevels')
        .setSortOrder(undefined)
        .addField('chatterAnswersReputationLevels', new ArrayXMLField('chatterAnswersReputationLevels', 'Chatter Answers Reputation Levels')
            .setMinApi(28)
            .setEditable()
            .setFieldKey('name')
            .addField('name', new StringXMLField('name', 'Name')
                .setEditable()
            )
            .addField('value', new IntegerXMLField('value', 'Value')
                .setEditable()
            )
        )
        .addField('ideaReputationLevels', new ObjectXMLField('ideaReputationLevels', 'Idea Reputation Levels')
            .setMinApi(28)
            .setEditable()
            .setFieldKey('name')
            .addField('name', new StringXMLField('name', 'Name')
                .setEditable()
            )
            .addField('value', new IntegerXMLField('value', 'Value')
                .setEditable()
            )
        ),
    showInPortal: new BooleanXMLField('showInPortal', 'Show In Portal')
        .setMinApi(27)
        .setEditable(),
    site: new StringXMLField('site', 'Site')
        .setMinApi(27)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_SITE),
};