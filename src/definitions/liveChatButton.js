const { StringXMLField, ObjectXMLField, ArrayXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes, DataValues } = require('@aurahelper/core').Values;

module.exports = {
    animation: new EnumXMLField('animation', 'Animation')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('Slide', 'Slide')
        .addEnumValue('Fade', 'Fade')
        .addEnumValue('Appear', 'Appear')
        .addEnumValue('Custom', 'Custom'),
    autoGreeting: new StringXMLField('autoGreeting', 'Auto Greeting')
        .setMinApi(29)
        .setEditable(),
    chasitorIdleTimeout: new IntegerXMLField('chasitorIdleTimeout', 'Chasitor Idle Timeout')
        .setMinApi(35)
        .setEditable(),
    chasitorIdleTimeoutWarning: new IntegerXMLField('chasitorIdleTimeoutWarning', 'chasitor Idle Timeout Warning')
        .setMinApi(35)
        .setEditable(),
    chatPage: new StringXMLField('chatPage', 'Chat Page')
        .setMinApi()
        .setEditable(),
    customAgentName: new StringXMLField('customAgentName', 'Custom Agent Name')
        .setMinApi(29)
        .setEditable(),
    deployments: new ObjectXMLField('deployments', 'Deployments')
        .setMinApi(28)
        .setEditable()
        .setFieldKey('deployment')
        .setSortOrder(undefined)
        .addField('deployment', new ArrayXMLField('deployment', 'Deployment')
            .setEditable()
            .setMetadataType(MetadataTypes.LIVE_CHAT_DEPLOYMENT)
        ),
    enableQueue: new BooleanXMLField('enableQueue', 'Enable Queue')
        .setMinApi(28)
        .setEditable(),
    inviteEndPosition: new EnumXMLField('inviteEndPosition', 'Invite End Position')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('Top Left', 'TopLeft')
        .addEnumValue('Top', 'Top')
        .addEnumValue('Top Right', 'TopRight')
        .addEnumValue('Left', 'Left')
        .addEnumValue('Center', 'Center')
        .addEnumValue('Right', 'Right')
        .addEnumValue('Bottom Left', 'BottomLeft')
        .addEnumValue('Bottom', 'Bottom')
        .addEnumValue('Bottom Right', 'BottomRight'),
    inviteImage: new StringXMLField('inviteImage', 'Invite Image')
        .setMinApi(28)
        .setEditable(),
    inviteStartPosition: new EnumXMLField('inviteStartPosition', 'Invite Start Position')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('Top Left', 'TopLeft')
        .addEnumValue('Top Left Top', 'TopLeftTop')
        .addEnumValue('Top', 'Top')
        .addEnumValue('Top Right Top', 'TopRightTop')
        .addEnumValue('Top Right', 'TopRight')
        .addEnumValue('Top Right Right', 'TopRightRight')
        .addEnumValue('Right', 'Right')
        .addEnumValue('Bottom Right Right', 'BottomRightRight')
        .addEnumValue('Bottom Right', 'BottomRight')
        .addEnumValue('Bottom Right Bottom', 'BottomRightBottom')
        .addEnumValue('Bottom', 'Bottom')
        .addEnumValue('Bottom Left Bottom', 'BottomLeftBottom')
        .addEnumValue('Bottom Left', 'BottomLeft')
        .addEnumValue('Bottom Left Left', 'BottomLeftLeft')
        .addEnumValue('Left', 'Left')
        .addEnumValue('Top Left Left', 'TopLeftLeft'),
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(28)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(28)
        .setEditable(),
    numberOfReroutingAttempts: new IntegerXMLField('numberOfReroutingAttempts', 'Number Of Rerouting Attempts')
        .setMinApi(30)
        .setEditable(),
    offlineImage: new StringXMLField('offlineImage', 'Offline Image')
        .setMinApi(28)
        .setEditable(),
    onlineImage: new StringXMLField('onlineImage', 'Online Image')
        .setMinApi(28)
        .setEditable(),
    optionsCustomRoutingIsEnabled: new BooleanXMLField('optionsCustomRoutingIsEnabled', 'Options Custom Routing Is Enabled')
        .setMinApi(30)
        .setEditable(),
    optionsHasChasitorIdleTimeout: new BooleanXMLField('optionsHasChasitorIdleTimeout', 'Options Has Chasitor Idle Timeout')
        .setMinApi(35)
        .setEditable(),
    optionsHasInviteAfterAccept: new BooleanXMLField('optionsHasInviteAfterAccept', 'Options Has Invite After Accept')
        .setMinApi(28)
        .setEditable(),
    optionsHasInviteAfterReject: new BooleanXMLField('optionsHasInviteAfterReject', 'Options Has Invite After Reject')
        .setMinApi(28)
        .setEditable(),
    optionsHasRerouteDeclinedRequest: new BooleanXMLField('optionsHasRerouteDeclinedRequest', 'Options Has Reroute Declined Request')
        .setMinApi(30)
        .setEditable(),
    optionsIsAutoAccept: new BooleanXMLField('optionsIsAutoAccept', 'Options Is Auto Accept')
        .setMinApi(30)
        .setEditable(),
    optionsIsInviteAutoRemove: new BooleanXMLField('optionsIsInviteAutoRemove', 'Options Is Invite Auto Remove')
        .setMinApi(28)
        .setEditable(),
    overallQueueLength: new IntegerXMLField('overallQueueLength', 'Overall Queue Length')
        .setMinApi(28)
        .setEditable(),
    perAgentQueueLength: new IntegerXMLField('perAgentQueueLength', 'Per Agent Queue Length')
        .setMinApi(28)
        .setEditable(),
    postChatPage: new StringXMLField('postChatPage', 'Post Chat Page')
        .setMinApi(28)
        .setEditable(),
    postChatUrl: new StringXMLField('postChatUrl', 'Post Chat URL')
        .setMinApi(28)
        .setEditable(),
    preChatFormPage: new StringXMLField('preChatFormPage', 'Pre Chat Form Page')
        .setMinApi(28)
        .setEditable(),
    preChatFormUrl: new StringXMLField('preChatFormUrl', 'Pre Chat Form URL')
        .setMinApi(28)
        .setEditable(),
    pushTimeOut: new IntegerXMLField('pushTimeOut', 'Push Time Out')
        .setMinApi(28)
        .setEditable(),
    routingType: new EnumXMLField('routingType', 'Routing Type')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('Choice', 'Choice')
        .addEnumValue('Least Active', 'LeastActive')
        .addEnumValue('Most Available', 'MostAvailable'),
    site: new StringXMLField('site', 'Site')
        .setMinApi(28)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_SITE),
    skills: new ObjectXMLField('skills', 'Skills')
        .setMinApi(28)
        .setEditable()
        .setFieldKey('skill')
        .setSortOrder(undefined)
        .addField('skill', new ArrayXMLField('skill', 'Skill')
            .setEditable()
        ),
    timeToRemoveInvite: new IntegerXMLField('timeToRemoveInvite', 'Time To Remove Invite')
        .setMinApi(28)
        .setEditable(),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(28)
        .setEditable()
        .setRequired()
        .addEnumValue('Standard', 'Standard')
        .addEnumValue('Invite', 'Invite'),
    windowLanguage: new EnumXMLField('windowLanguage', 'Window Language')
        .setMinApi(28)
        .setEditable()
        .setEnumValues(DataValues.SF_LANGUAGES)

}