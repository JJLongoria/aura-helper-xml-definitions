const { StringXMLField, ObjectXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    channelConfigurations: new ObjectXMLField('channelConfigurations', 'Channel Configurations')
        .setMinApi(45)
        .setEditable()
        .addField('channel', new EnumXMLField('channel', 'Channel')
            .setEditable()
            .setRequired()
        )
        .addField('channelItems', new ObjectXMLField('channelItems', 'Channel Items')
            .setEditable()
            .addField('action', new StringXMLField('action', 'Action')
                .setEditable()
                .setRequired()
            )
            .addField('isMandatory', new BooleanXMLField('isMandatory', 'Is Mandatory')
                .setEditable()
            )
            .addField('isUiRemoveHidden', new BooleanXMLField('isUiRemoveHidden', 'Is UI RemoveHidden')
                .setEditable()
            )
            .addField('pinned', new EnumXMLField('pinned', 'Pinned')
                .setEditable()
                .setRequired()
                .setDefaultValue('None')
                .addEnumValue('None', 'None')
                .addEnumValue('Top', 'Top')
                .addEnumValue('Bottom', 'Bottom')
            )
            .addField('position', new IntegerXMLField('position', 'Position')
                .setEditable()
                .setRequired()
            )
            .addField('type', new EnumXMLField('type', 'Type')
                .setEditable()
                .setRequired()
                .addEnumValue('Flow', 'Flow')
                .addEnumValue('Quick Action', 'QuickAction', 46)
            )
        )
        .addField('isAutopopEnabled', new BooleanXMLField('isAutopopEnabled', 'Is Autopop Enabled')
            .setEditable()
        ),
    deploymentContexts: new ObjectXMLField('deploymentContexts', 'Deployment Contexts')
        .setMinApi(46)
        .setEditable()
        .addField('channel', new EnumXMLField('channel', 'Channel')
            .setEditable()
            .setRequired()
        )
        .addField('channelItems', new ObjectXMLField('channelItems', 'Channel Items')
            .setEditable()
            .addField('action', new StringXMLField('action', 'Action')
                .setEditable()
                .setRequired()
            )
            .addField('isMandatory', new BooleanXMLField('isMandatory', 'Is Mandatory')
                .setEditable()
            )
            .addField('isUiRemoveHidden', new BooleanXMLField('isUiRemoveHidden', 'Is UI RemoveHidden')
                .setEditable()
            )
            .addField('pinned', new EnumXMLField('pinned', 'Pinned')
                .setEditable()
                .setRequired()
                .setDefaultValue('None')
                .addEnumValue('None', 'None')
                .addEnumValue('Top', 'Top')
                .addEnumValue('Bottom', 'Bottom')
            )
            .addField('position', new IntegerXMLField('position', 'Position')
                .setEditable()
                .setRequired()
            )
            .addField('type', new EnumXMLField('type', 'Type')
                .setEditable()
                .setRequired()
                .addEnumValue('Flow', 'Flow')
                .addEnumValue('Quick Action', 'QuickAction', 46)
            )
        )
        .addField('isAutopopEnabled', new BooleanXMLField('isAutopopEnabled', 'Is Autopop Enabled')
            .setEditable()
        ),
    hasGuidedActions: new BooleanXMLField('hasGuidedActions', 'Has Guided Actions')
        .setMinApi(46)
        .setEditable(),
    hasRecommendations: new BooleanXMLField('hasRecommendations', 'Has Recommendations')
        .setMinApi(46)
        .setEditable(),
    masterLabel: new BooleanXMLField('masterLabel', 'Master Label')
        .setMinApi(45)
        .setEditable()
        .setRequired(),
    recommendation: new ObjectXMLField('recommendation', 'Recommendation')
        .setMinApi(46)
        .setEditable()
        .addField('defaultStrategy', new StringXMLField('defaultStrategy', 'Default Strategy')
            .setEditable()
            .setMetadataType(MetadataTypes.RECOMMENDATION_STRATEGY)
        )
        .addField('hasDescription', new StringXMLField('hasDescription', 'Has Description')
            .setEditable()
            .setRequired()
        )
        .addField('hasImage', new StringXMLField('hasImage', 'Has Image')
            .setEditable()
            .setRequired()
        )
        .addField('hasRejectAction', new StringXMLField('hasRejectAction', 'Has Reject Action')
            .setEditable()
            .setRequired()
        )
        .addField('hasTitle', new StringXMLField('hasTitle', 'Has Title')
            .setEditable()
            .setRequired()
        )
        .addField('maxDisplayRecommendations', new IntegerXMLField('maxDisplayRecommendations', 'Max Display Recommendations')
            .setEditable()
            .setRequired()
            .setMinValue(1)
            .setMaxValue(4)
        ),
    selectableItems: new ObjectXMLField('selectableItems', 'Selectable Items')
        .setMinApi(45)
        .setEditable()
        .addField('action', new StringXMLField('action', 'Action')
            .setEditable()
            .setRequired()
        )
        .addField('type', new EnumXMLField('type', 'Type')
            .setEditable()
            .setRequired()
            .addEnumValue('Flow', 'Flow')
            .addEnumValue('Quick Action', 'QuickAction', 46)
        ),
    shouldLaunchActionOnReject: new BooleanXMLField('shouldLaunchActionOnReject', 'Should Launch Action On Reject')
        .setMinApi(48)
        .setEditable()
        .setRequired(),

}