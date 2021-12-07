import { StringXMLField, BooleanXMLField, MetadataTypes, EnumXMLField, IntegerXMLField, ObjectXMLField } from '@aurahelper/core';

export const EmbeddedServiceLiveAgent = {
    avatarImg: new StringXMLField('avatarImg', 'Avatar Image')
        .setMinApi(38)
        .setEditable(),
    customPrechatComponent: new StringXMLField('customPrechatComponent', 'Custom Prechat Component')
        .setMinApi(38)
        .setEditable()
        .setMetadataType(MetadataTypes.AURA_DEFINITION_BUNDLE),
    embeddedServiceConfig: new StringXMLField('embeddedServiceConfig', 'Embedded Service Config')
        .setMinApi(38)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.EMBEDDED_SERVICE_CONFIG),
    embeddedServiceQuickActions: new ObjectXMLField('embeddedServiceQuickActions', 'Embedded Service Quick Actions')
        .setMinApi(38)
        .setEditable()
        .setFieldKey('quickActionDefinition')
        .setSortOrder(undefined)
        .addField('embeddedServiceLiveAgent', new StringXMLField('embeddedServiceLiveAgent', 'Embedded Service LiveAgent')
            .setEditable()
            .setMetadataType(MetadataTypes.EMBEDDED_SERVICE_LIVE_AGENT)
        )
        .addField('order', new IntegerXMLField('order', 'Order')
            .setEditable()
        )
        .addField('quickActionDefinition', new IntegerXMLField('quickActionDefinition', 'Quick Action Definition')
            .setEditable()
            .setMetadataType(MetadataTypes.QUICK_ACTION)
        )
        .addField('quickActionType', new EnumXMLField('quickActionType', 'Quick Action Type')
            .setMinApi(43)
            .setEditable()
            .addEnumValue('Pre Chat', 'Prechat')
            .addEnumValue('Offline Cases Support', 'OfflineCase')
        ),
    enabled: new BooleanXMLField('enabled', 'Enabled')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    fontSize: new EnumXMLField('fontSize', 'Font Size')
        .setMinApi(38)
        .setEditable()
        .setRequired()
        .addEnumValue('Small', 'Small')
        .addEnumValue('Medium', 'Medium')
        .addEnumValue('Large', 'Large'),
    headerBackgroundImg: new StringXMLField('headerBackgroundImg', 'Header Background Image')
        .setMinApi(49)
        .setEditable(),
    isOfflineCaseEnabled: new BooleanXMLField('isOfflineCaseEnabled', 'Is Offline Case Enabled')
        .setMinApi(43)
        .setEditable(),
    isQueuePositionEnabled: new BooleanXMLField('isQueuePositionEnabled', 'Is Queue Position Enabled')
        .setMinApi(43)
        .setEditable(),
    liveAgentChatUrl: new BooleanXMLField('liveAgentChatUrl', 'Live Agent Chat URL')
        .setMinApi(43)
        .setEditable(),
    liveAgentContentUrl: new BooleanXMLField('liveAgentContentUrl', 'Live Agent Content URL')
        .setMinApi(43)
        .setEditable(),
    liveChatButton: new BooleanXMLField('liveChatButton', 'Live Chat Button')
        .setMinApi(43)
        .setEditable()
        .setRequired(),
    liveChatDeployment: new StringXMLField('liveChatDeployment', 'Live Chat Deployment')
        .setMinApi(43)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(43)
        .setEditable()
        .setRequired()
        .setUnique(),
    offlineCaseBackgroundImg: new StringXMLField('offlineCaseBackgroundImg', 'Offline Case Background Image')
        .setMinApi(43)
        .setEditable()
        .setRequired(),
    prechatBackgroundImg: new StringXMLField('prechatBackgroundImg', 'Pre Chat Background Image')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    prechatEnabled: new BooleanXMLField('prechatEnabled', 'Prechat Enabled')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    prechatJson: new StringXMLField('prechatJson', 'Pre Chat JSON')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    scenario: new EnumXMLField('scenario', 'Scenario')
        .setMinApi(38)
        .setEditable()
        .setRequired()
        .addEnumValue('Sales', 'Sales')
        .addEnumValue('Service', 'Service')
        .addEnumValue('Basic', 'Basic'),
    smallCompanyLogoImg: new StringXMLField('smallCompanyLogoImg', 'Small Company Logo Image')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    waitingStateBackgroundImg: new StringXMLField('waitingStateBackgroundImg', 'Waiting State Background Image')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
};