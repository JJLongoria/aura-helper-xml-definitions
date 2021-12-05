import { StringXMLField, ArrayXMLField, XMLDependencyField, DataValues, MetadataTypes, EnumXMLField, IntegerXMLField, ObjectXMLField } from '@aurahelper/core';

function componentInstanceProperties(name: string, label: string) {
    return new ArrayXMLField(name, label)
        .setEditable()
        .setFieldKey('name')
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
        )
        .addField('type', new EnumXMLField('type', 'Type')
            .setEditable()
            .addEnumValue('Decorator', 'decorator')
        )
        .addField('value', new StringXMLField('value', 'Value')
            .setEditable()
        )
        .addField('valueList', new ObjectXMLField('valueList', 'Value List')
            .setEditable()
            .setFieldKey('valueListItems')
            .setSortOrder(undefined)
            .addField('valueListItems', new ArrayXMLField('valueListItems', 'Value List Items')
                .setEditable()
                .setFieldKey('value')
                .addField('value', new StringXMLField('value', 'Value')
                    .setEditable()
                )
            )
        )
}

function componentInstance(type: any, name: string, label: string) {
    return new type(name, label)
        .setMaxApi(48)
        .setEditable()
        .setFieldKey('componentName')
        .addField('componentInstanceProperties', componentInstanceProperties('componentInstanceProperties', 'Component Instance Properties'))
        .addField('componentName', new StringXMLField('componentName', 'Component Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.AURA_DEFINITION_BUNDLE)
        )
        .addField('identifier', new StringXMLField('identifier', 'Identifier')
            .setEditable()
            .setMinApi(53)
            .setRequired()
            .setMaxLength(120)
        )
        .addField('visibilityRule', new ObjectXMLField('visibilityRule', 'Visibility Rule')
            .setEditable()
            .setRequired()
            .setFieldKey('booleanFilter')
            .setSortOrder(undefined)
            .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
                .setEditable()
            )
            .addField('criteria', new ArrayXMLField('criteria', 'Criteria')
                .setEditable()
                .setFieldKey('leftValue')
                .setSortOrder(undefined)
                .addField('leftValue', new StringXMLField('leftValue', 'Left Value')
                    .setEditable()
                    .setRequired()
                )
                .addField('operator', new EnumXMLField('operator', 'Operator')
                    .setEditable()
                    .setRequired()
                    .addEnumValue('Contains', 'CONTAINS')
                    .addEnumValue('Equal', 'EQUAL')
                    .addEnumValue('Not Equal', 'NE')
                    .addEnumValue('Greater Than', 'GT')
                    .addEnumValue('Greater Than Or Equal', 'GE')
                    .addEnumValue('Less Than', 'LT')
                    .addEnumValue('Less Than Or Equal', 'LE')
                )
                .addField('rightValue', new StringXMLField('rightValue', 'Right Value')
                    .setEditable()
                    .setRequired()
                )
            )
        )
}

export const FlexiPage = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(29)
        .setEditable(),
    events: new ArrayXMLField('events', 'Events')
        .setEditable()
        .setMinApi(53)
        .addField('sourceName', new StringXMLField('sourceName', 'Source Name')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.LIGHTNING_COMPONENT_BUNDLE)
        )
        .addField('sourceProperties', new ArrayXMLField('sourceProperties', 'Source Properties')
            .setEditable()
            .addField('name', new StringXMLField('name', 'Name')
                .setEditable()
                .setRequired()
            )
            .addField('value', new StringXMLField('value', 'Value')
                .setEditable()
                .setRequired()
            )
        )
        .addField('sourceType', new EnumXMLField('sourceType', 'Source Type')
            .setEditable()
            .addEnumValue('Component', 'Component')
        )
        .addField('targets', new ArrayXMLField('targets', 'Targets')
            .setEditable()
            .addField('mappings', new ArrayXMLField('mappings', 'Mappings')
                .setEditable()
                .addField('name', new StringXMLField('name', 'Name')
                    .setEditable()
                    .setRequired()
                )
                .addField('value', new StringXMLField('value', 'Value')
                    .setEditable()
                    .setRequired()
                )
            )
            .addField('method', new EnumXMLField('method', 'Method')
                .setEditable()
                .setRequired()
                .addEnumValue('Update Properties', 'updateProperties')
            )
            .addField('name', new EnumXMLField('name', 'Name')
                .setEditable()
                .setRequired()
                .addEnumValue('Component Service', 'flexipage:componentService')
            )
            .addField('properties', new ArrayXMLField('properties', 'Properties')
                .setEditable()
                .addField('name', new StringXMLField('name', 'Name')
                    .setEditable()
                    .setRequired()
                )
                .addField('value', new StringXMLField('value', 'Value')
                    .setEditable()
                    .setRequired()
                )
            )
            .addField('type', new EnumXMLField('type', 'Type')
                .setEditable()
                .setRequired()
                .addEnumValue('Flexipage Services', 'FlexipageServices')
            )
        ),
    flexiPageRegions: new ArrayXMLField('flexiPageRegions', 'Flexi Page Regions')
        .setMinApi(29)
        .setEditable()
        .setMaxItems(100)
        .setFieldKey('name')
        .setSortOrder(undefined)
        .addField('appendable', new EnumXMLField('appendable', 'Appendable')
            .setMinApi(35)
            .setEditable()
            .addEnumValue('Disabled', 'disabled')
            .addEnumValue('Enabled', 'enabled')
        )
        .addField('componentInstances', componentInstance(ArrayXMLField, 'componentInstances', 'Component Instances'))
        .addField('itemInstances', new ArrayXMLField('itemInstances', 'Item Instances')
            .setMinApi(49)
            .setEditable()
            .setFieldKey('componentInstance')
            .setSortOrder(undefined)
            .addField('componentInstance', componentInstance(ObjectXMLField, 'componentInstance', 'Component Instance'))
            .addField('fieldInstance', new ObjectXMLField('fieldInstance', 'Field Instance')
                .setEditable()
                .setFieldKey('fieldItem')
                .addField('fieldInstanceProperties', new ArrayXMLField('fieldInstanceProperties', 'Field Instance Properties')
                    .setEditable()
                    .setFieldKey('name')
                    .addField('name', new EnumXMLField('name', 'Name')
                        .setEditable()
                        .setDefaultValue('uiBehavior')
                        .addEnumValue('UI Behavior', 'uiBehavior')
                    )
                    .addField('value', new EnumXMLField('value', 'Value')
                        .setEditable()
                        .addEnumValue('None', 'None')
                        .addEnumValue('Read Only', 'Readonly')
                        .addEnumValue('Required', 'Required')
                    )
                )
                .addField('fieldItem', new ArrayXMLField('fieldItem', 'Field Item')
                    .setEditable()
                    .setMetadataType(MetadataTypes.CUSTOM_FIELD)
                )
                .addField('identifier', new StringXMLField('identifier', 'Identifier')
                    .setEditable()
                    .setMinApi(53)
                    .setRequired()
                    .setMaxLength(120)
                )
                .addField('visibilityRule', new ObjectXMLField('visibilityRule', 'Visibility Rule')
                    .setEditable()
                    .setRequired()
                    .setFieldKey('booleanFilter')
                    .setSortOrder(undefined)
                    .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
                        .setEditable()
                    )
                    .addField('criteria', new ArrayXMLField('criteria', 'Criteria')
                        .setEditable()
                        .setFieldKey('leftValue')
                        .setSortOrder(undefined)
                        .addField('leftValue', new StringXMLField('leftValue', 'Left Value')
                            .setEditable()
                            .setRequired()
                        )
                        .addField('operator', new EnumXMLField('operator', 'Operator')
                            .setEditable()
                            .setRequired()
                            .addEnumValue('Contains', 'CONTAINS')
                            .addEnumValue('Equal', 'EQUAL')
                            .addEnumValue('Not Equal', 'NE')
                            .addEnumValue('Greater Than', 'GT')
                            .addEnumValue('Greater Than Or Equal', 'GE')
                            .addEnumValue('Less Than', 'LT')
                            .addEnumValue('Less Than Or Equal', 'LE')
                        )
                        .addField('rightValue', new StringXMLField('rightValue', 'Right Value')
                            .setEditable()
                            .setRequired()
                        )
                    )
                )
            )
        )
        .addField('mode', new EnumXMLField('mode', 'Mode')
            .setMinApi(35)
            .setEditable()
            .addEnumValue('Append', 'Append')
            .addEnumValue('Prepend', 'Prepend')
            .addEnumValue('Replace', 'Replace')
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setMinApi(35)
            .setEditable()
        )
        .addField('prependable', new EnumXMLField('prependable', 'Prependable')
            .setMinApi(35)
            .setEditable()
            .addEnumValue('Disabled', 'disabled')
            .addEnumValue('Enabled', 'enabled')
        )
        .addField('replaceable', new EnumXMLField('replaceable', 'Replaceable')
            .setMinApi(35)
            .setEditable()
            .addEnumValue('Disabled', 'disabled')
            .addEnumValue('Enabled', 'enabled')
        )
        .addField('type', new EnumXMLField('type', 'Type')
            .setMinApi(35)
            .setEditable()
            .setRequired()
            .addEnumValue('Background', 'Background')
            .addEnumValue('Facet', 'Facet')
            .addEnumValue('Region', 'Region')
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(29)
        .setEditable()
        .setRequired()
        .setUnique(),
    pageTemplate: new StringXMLField('pageTemplate', 'Page Template')
        .setMinApi(33)
        .setMaxApi(38)
        .setEditable()
        .setRequired(),
    parentFlexiPage: new StringXMLField('parentFlexiPage', 'Parent Flexi Page')
        .setMinApi(37)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.FLEXI_PAGE),
    platformActionList: new ObjectXMLField('platformActionList', 'Platform Action List')
        .setMinApi(34)
        .setEditable()
        .setFieldKey('actionListContext')
        .setSortOrder(undefined)
        .addField('actionListContext', new EnumXMLField('actionListContext', 'Action List Context')
            .setEditable()
            .setRequired()
            .addEnumValue('Action Definition', 'ActionDefinition')
            .addEnumValue('Assistant', 'Assistant')
            .addEnumValue('Banner Photo', 'BannerPhoto')
            .addEnumValue('Chatter', 'Chatter')
            .addEnumValue('Dockable', 'Dockable')
            .addEnumValue('Feed Element', 'FeedElement')
            .addEnumValue('Flexi Page', 'Flexipage')
            .addEnumValue('Global', 'Global')
            .addEnumValue('List View', 'ListView')
            .addEnumValue('List View Definition', 'ListViewDefinition')
            .addEnumValue('List View Record', 'ListViewRecord')
            .addEnumValue('Lookup', 'Lookup')
            .addEnumValue('MRU List', 'MruList')
            .addEnumValue('MRU Row', 'MruRow')
            .addEnumValue('Object Home Chart', 'ObjectHomeChart')
            .addEnumValue('Photo', 'Photo')
            .addEnumValue('Record', 'Record')
            .addEnumValue('Record Edit', 'RecordEdit')
            .addEnumValue('Related List', 'RelatedList')
            .addEnumValue('Related List Record', 'RelatedListRecord')
        )
        .addField('platformActionListItems', new ArrayXMLField('platformActionListItems', 'Platform Action List Items')
            .setEditable()
            .setFieldKey('actionName')
            .addField('actionName', new StringXMLField('actionName', 'Action Name')
                .setEditable()
                .setRequired()
            )
            .addField('actionType', new EnumXMLField('actionType', 'Action Type')
                .setEditable()
                .setRequired()
                .addEnumValue('Action Link', 'ActionLink')
                .addEnumValue('Custom Button', 'CustomButton')
                .addEnumValue('Invocable Action', 'InvocableAction')
                .addEnumValue('Productivity Action', 'ProductivityAction')
                .addEnumValue('Quick Action', 'QuickAction')
                .addEnumValue('Standard Button', 'StandardButton')
            )
            .addField('sortOrder', new IntegerXMLField('sortOrder', 'Sort Order')
                .setEditable()
                .setRequired()
            )
            .addField('subtype', new EnumXMLField('subtype', 'Subtype')
                .setEditable()
                .addEnumValue('Weblink Type Enum', 'WebLinkTypeEnum')
                .addEnumValue('API', 'Api')
                .addEnumValue('API Async', 'ApiAsync')
                .addEnumValue('Download', 'Download')
                .addEnumValue('UI', 'Ui')
                .addDependencyField(new XMLDependencyField('actionType', 'QuickAction', 'QuickActionType'))
                .addDependencyField(new XMLDependencyField('actionType', 'CustomButton', 'WebLinkTypeEnum'))
                .addDependencyField(new XMLDependencyField('actionType', 'ActionLink', ['Api', 'ApiAsync', 'Download', 'Ui']))
                .addDependencyField(new XMLDependencyField('actionType', ['StandardButton', 'ProductivityAction', 'InvocableAction'], DataValues.NOT_AVAILABLE))
            )
        )
        .addField('relatedSourceEntity', new StringXMLField('relatedSourceEntity', 'Related Source Entity')
            .setEditable()
        ),
    quickActionList: new ObjectXMLField('quickActionList', 'Quick Action List')
        .setMinApi(29)
        .setEditable()
        .setFieldKey('quickActionListItems')
        .setSortOrder(undefined)
        .addField('quickActionListItems', new ArrayXMLField('quickActionListItems', 'Quick Action List Items')
            .setEditable()
            .setFieldKey('quickActionName')
            .addField('quickActionName', new StringXMLField('quickActionName', 'Quick Action Name')
                .setEditable()
                .setRequired()
            )
        ),
    sobjectType: new StringXMLField('sobjectType', 'SObject Type')
        .setMinApi(39)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        .addDependencyField(new XMLDependencyField('type', ['HomePage', 'AppPage'], DataValues.NULL)),
    template: new ObjectXMLField('template', 'Template')
        .setMinApi(39)
        .setEditable()
        .setRequired()
        .setFieldKey('name')
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
        )
        .addField('properties', new ArrayXMLField('properties', 'Properties')
            .setEditable()
            .setRequired()
            .setFieldKey('actionListContext')
            .setSortOrder(undefined)
            .addField('actionListContext', new EnumXMLField('actionListContext', 'Action List Context')
                .setEditable()
                .setRequired()
                .addEnumValue('Action Definition', 'ActionDefinition')
                .addEnumValue('Assistant', 'Assistant')
                .addEnumValue('Banner Photo', 'BannerPhoto')
                .addEnumValue('Chatter', 'Chatter')
                .addEnumValue('Dockable', 'Dockable')
                .addEnumValue('Feed Element', 'FeedElement')
                .addEnumValue('Flexi Page', 'Flexipage')
                .addEnumValue('Global', 'Global')
                .addEnumValue('List View', 'ListView')
                .addEnumValue('List View Definition', 'ListViewDefinition')
                .addEnumValue('List View Record', 'ListViewRecord')
                .addEnumValue('Lookup', 'Lookup')
                .addEnumValue('MRU List', 'MruList')
                .addEnumValue('MRU Row', 'MruRow')
                .addEnumValue('Object Home Chart', 'ObjectHomeChart')
                .addEnumValue('Photo', 'Photo')
                .addEnumValue('Record', 'Record')
                .addEnumValue('Record Edit', 'RecordEdit')
                .addEnumValue('Related List', 'RelatedList')
                .addEnumValue('Related List Record', 'RelatedListRecord')
            )
            .addField('platformActionListItems', new ArrayXMLField('platformActionListItems', 'Platform Action List Items')
                .setEditable()
                .setFieldKey('actionName')
                .addField('actionName', new StringXMLField('actionName', 'Action Name')
                    .setEditable()
                    .setRequired()
                )
                .addField('actionType', new EnumXMLField('actionType', 'Action Type')
                    .setEditable()
                    .setRequired()
                    .addEnumValue('Action Link', 'ActionLink')
                    .addEnumValue('Custom Button', 'CustomButton')
                    .addEnumValue('Invocable Action', 'InvocableAction')
                    .addEnumValue('Productivity Action', 'ProductivityAction')
                    .addEnumValue('Quick Action', 'QuickAction')
                    .addEnumValue('Standard Button', 'StandardButton')
                )
                .addField('sortOrder', new IntegerXMLField('sortOrder', 'Sort Order')
                    .setEditable()
                    .setRequired()
                )
                .addField('subtype', new EnumXMLField('subtype', 'Subtype')
                    .setEditable()
                    .addEnumValue('Weblink Type Enum', 'WebLinkTypeEnum')
                    .addEnumValue('API', 'Api')
                    .addEnumValue('API Async', 'ApiAsync')
                    .addEnumValue('Download', 'Download')
                    .addEnumValue('UI', 'Ui')
                    .addDependencyField(new XMLDependencyField('actionType', 'QuickAction', 'QuickActionType'))
                    .addDependencyField(new XMLDependencyField('actionType', 'CustomButton', 'WebLinkTypeEnum'))
                    .addDependencyField(new XMLDependencyField('actionType', 'ActionLink', ['Api', 'ApiAsync', 'Download', 'Ui']))
                    .addDependencyField(new XMLDependencyField('actionType', ['StandardButton', 'ProductivityAction', 'InvocableAction'], DataValues.NOT_AVAILABLE))
                )
            )
            .addField('relatedSourceEntity', new ArrayXMLField('relatedSourceEntity', 'Related Source Entity')
                .setEditable()
            )
        ),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(32)
        .setEditable()
        .setRequired()
        .addEnumValue('App Page', 'AppPage')
        .addEnumValue('Comm App Page', 'CommAppPage', 37)
        .addEnumValue('Comm Checkout Page', 'CommCheckoutPage', 46)
        .addEnumValue('Comm Flow Page', 'CommFlowPage', 45)
        .addEnumValue('Comm Forgot Password Page', 'CommForgotPasswordPage', 39)
        .addEnumValue('Comm Flow Page', 'CommFlowPage', 45)
        .addEnumValue('Comm Global Search Result Page', 'CommGlobalSearchResultPage', 41)
        .addEnumValue('Comm Login Page', 'CommLoginPage', 39)
        .addEnumValue('Comm No Search Results Page', 'CommNoSearchResultsPage', 48)
        .addEnumValue('Comm Object Page', 'CommObjectPage', 38)
        .addEnumValue('Comm Order Comfirmation Page', 'CommOrderComfirmationPage', 46)
        .addEnumValue('Comm Quick Action Create Page', 'CommQuickActionCreatePage', 38)
        .addEnumValue('Comm Record Page', 'CommRecordPage', 38)
        .addEnumValue('Comm Related List Page', 'CommRelatedListPage', 38)
        .addEnumValue('Comm Search Result Page', 'CommSearchResultPage', 38)
        .addEnumValue('Comm Self Register Page', 'CommSelfRegisterPage', 39)
        .addEnumValue('Comm Theme Layout Page', 'CommThemeLayoutPage', 38)
        .addEnumValue('Embedded Service Page', 'EmbeddedServicePage', 45)
        .addEnumValue('Email Content Page', 'EmailContentPage', 37)
        .addEnumValue('Email Template Page', 'EmailTemplatePage', 37)
        .addEnumValue('Home Page', 'HomePage', 37)
        .addEnumValue('Mail App App Page', 'MailAppAppPage', 38)
        .addEnumValue('Record Page', 'RecordPage', 37)
        .addEnumValue('Record Preview', 'RecordPreview', 45)
        .addEnumValue('Utility Bar', 'UtilityBar', 38)
}