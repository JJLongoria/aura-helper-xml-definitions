const { StringXMLField, ObjectXMLField, ArrayXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    customApplications: new ArrayXMLField('customApplications', 'Custom Applications')
        .setMinApi(14)
        .setEditable()
        .setFieldKey('name')
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
            .setMaxLength(765)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_APPLICATION)
        ),
    customLabels: new ArrayXMLField('customLabels', 'Custom Labels')
        .setMinApi(14)
        .setEditable()
        .setFieldKey('name')
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
            .setMaxLength(765)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_LABEL)
        ),
    customPageWebLinks: new ArrayXMLField('customPageWebLinks', 'Custom Page Web Links')
        .setMinApi(14)
        .setEditable()
        .setFieldKey('name')
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
            .setMaxLength(765)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.WEBLINK)
        ),
    customTabs: new ArrayXMLField('customTabs', 'Custom Tabs')
        .setMinApi(14)
        .setEditable()
        .setFieldKey('name')
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
            .setMaxLength(765)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_TAB)
        ),
    flowDefinitions: new ArrayXMLField('flowDefinitions', 'Flow Definitions')
        .setMinApi(41)
        .setEditable()
        .setFieldKey('fullName')
        .addField('flows', new ArrayXMLField('flows', 'Flows')
            .setEditable()
            .setFieldKey('fullName')
            .addField('choices', new ArrayXMLField('choices', 'Choices')
                .setEditable()
                .setFieldKey('name')
                .setSortOrder(undefined)
                .addField('choiceText', new StringXMLField('choiceText', 'Choice Text')
                    .setEditable()
                )
                .addField('name', new StringXMLField('name', 'Name')
                    .setEditable()
                    .setRequired()
                )
                .addField('userInput', new ObjectXMLField('userInput', 'User Input')
                    .setEditable()
                    .setFieldKey('promptText')
                    .setSortOrder(undefined)
                    .addField('promptText', new StringXMLField('promptText', 'Prompt Text')
                        .setEditable()
                    )
                    .addField('validationRule', new ObjectXMLField('validationRule', 'Validation Rule')
                        .setMinApi(41)
                        .setEditable()
                        .setFieldKey('errorMessage')
                        .setSortOrder(undefined)
                        .addField('errorMessage', new StringXMLField('errorMessage', 'Error Message')
                            .setEditable()
                        )
                    )
                )
            )
            .addField('fullName', new StringXMLField('fullName', 'Full Name')
                .setEditable()
                .addMatchPattern(/^[^\d\s_](\w)+$/)
                .setMetadataType(MetadataTypes.FLOW)
            )
            .addField('label', new StringXMLField('label', 'Label')
                .setEditable()
            )
            .addField('screens', new ArrayXMLField('screens', 'Screens')
                .setMinApi(41)
                .setEditable()
                .setFieldKey('name')
                .addField('fields', new ArrayXMLField('fields', 'Fields')
                    .setEditable()
                    .setFieldKey('name')
                    .addField('fieldText', new StringXMLField('fieldText', 'Field Text')
                        .setEditable()
                    )
                    .addField('helpText', new StringXMLField('helpText', 'Help Text')
                        .setEditable()
                    )
                    .addField('name', new StringXMLField('name', 'Name')
                        .setEditable()
                        .setRequired()
                    )
                    .addField('validationRule', new ObjectXMLField('validationRule', 'Validation Rule')
                        .setEditable()
                        .setFieldKey('errorMessage')
                        .setSortOrder(undefined)
                        .addField('errorMessage', new StringXMLField('errorMessage', 'Error Message')
                            .setEditable()
                        )
                    )
                )
                .addField('helpText', new StringXMLField('helpText', 'Help Text')
                    .setEditable()
                )
                .addField('name', new StringXMLField('name', 'Name')
                    .setEditable()
                    .setRequired()
                )
                .addField('pausedText', new StringXMLField('pausedText', 'Paused Text')
                    .setEditable()
                )
            )
            .addField('stages', new ArrayXMLField('stages', 'Stages')
                .setMinApi(43)
                .setEditable()
                .setFieldKey('name')
                .addField('label', new StringXMLField('label', 'Label')
                    .setEditable()
                )
                .addField('name', new StringXMLField('name', 'Name')
                    .setEditable()
                    .setRequired()
                )
            )
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .addMatchPattern(/^[^\d\s_](\w)+$/)
            .setMetadataType(MetadataTypes.FLOW)
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
        ),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi()
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    globalPicklists: new ArrayXMLField('globalPicklists', 'Global Picklists')
        .setMinApi(37)
        .setEditable()
        .setFieldKey('name')
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.GLOBAL_PICKLIST)
        )
        .addField('picklistValues', new ArrayXMLField('picklistValues', 'Picklist Values')
            .setEditable()
            .setFieldKey('masterLabel')
            .setSortOrder(undefined)
            .addField('masterLabel', new StringXMLField('masterLabel', 'Master Label')
                .setEditable()
                .setRequired()
            )
            .addField('translation', new StringXMLField('translation', 'Translation')
                .setEditable()
                .setRequired()
            )
        ),
    prompts: new ObjectXMLField('prompts', 'Prompts')
        .setMinApi(48)
        .setEditable()
        .setFieldKey('name')
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.PROMPT)
        )
        .addField('promptVersions', new ObjectXMLField('promptVersions', 'Prompt Versions')
            .setEditable()
            .setFieldKey('name')
            .setSortOrder(undefined)
            .addField('actionButtonLabel', new StringXMLField('actionButtonLabel', 'Action Button Label')
                .setEditable()
            )
            .addField('actionButtonLink', new StringXMLField('actionButtonLink', 'Action Button Link')
                .setEditable()
            )
            .addField('body', new StringXMLField('body', 'Body')
                .setEditable()
            )
            .addField('description', new StringXMLField('description', 'Description')
                .setEditable()
            )
            .addField('dismissButtonLabel', new StringXMLField('dismissButtonLabel', 'Dismiss Button Label')
                .setEditable()
            )
            .addField('header', new StringXMLField('header', 'Header')
                .setEditable()
            )
            .addField('label', new StringXMLField('label', 'Label')
                .setEditable()
            )
            .addField('name', new StringXMLField('name', 'Name')
                .setEditable()
                .setRequired()
            )
            .addField('title', new StringXMLField('title', 'Title')
                .setEditable()
            )
            .addField('videoLink', new StringXMLField('videoLink', 'Video Link')
                .setEditable()
            )
        ),
    quickActions: new ArrayXMLField('quickActions', 'Quick Actions')
        .setMinApi(14)
        .setEditable()
        .setFieldKey('name')
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
            .setMaxLength(765)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.QUICK_ACTION)
        ),
    reportTypes: new ArrayXMLField('reportTypes', 'Report Types')
        .setMinApi(14)
        .setEditable()
        .setFieldKey('name')
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.REPORT_TYPE)
        )
        .addField('sections', new ArrayXMLField('sections', 'Sections')
            .setEditable()
            .setFieldKey('name')
            .addField('columns', new ArrayXMLField('columns', 'Columns')
                .setEditable()
                .setFieldKey('name')
                .setSortOrder(undefined)
                .addField('label', new StringXMLField('label', 'Label')
                    .setEditable()
                    .setRequired()
                )
                .addField('name', new StringXMLField('name', 'Name')
                    .setEditable()
                    .setRequired()
                )
            )
            .addField('label', new StringXMLField('label', 'Label')
                .setEditable()
            )
            .addField('name', new StringXMLField('name', 'Name')
                .setEditable()
                .setRequired()
            )
        ),
    scontrols: new ArrayXMLField('scontrols', 'S-Controls')
        .setMinApi(14)
        .setEditable()
        .setFieldKey('name')
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
            .setMaxLength(765)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.QUICK_ACTION)
        ),
}