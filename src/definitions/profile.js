const { StringXMLField, ObjectXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField, XMLDataControlledField } = require('@ah/core').Types;
const { MetadataTypes, DataValues } = require('@ah/core').Values;
const { Validator } = require('@ah/core').Utils;

module.exports = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(30)
        .setEditable()
        .setMaxLength(255),
    userLicense: new StringXMLField('userLicense', 'User License')
        .setMinApi(17)
        .setEditable(),
    custom: new BooleanXMLField('custom', 'Custom')
        .setMinApi(30),
    applicationVisibilities: new ArrayXMLField('applicationVisibilities', 'Application ')
        .setMinApi(30)
        .setEditable()
        .setMergeable()
        .setMetadataType(MetadataTypes.CUSTOM_APPLICATION)
        .setFieldKey('application')
        .addField('application', new StringXMLField('application', 'Application')
            .setUnique()
        )
        .addField('visible', new BooleanXMLField('visible', 'Visible')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('default', new BooleanXMLField('default', 'Default')
            .setEditable()
            .setUnique()
            .addControlledField(new XMLDataControlledField('visible', true, true))
        ),
    categoryGroupVisibilities: new ArrayXMLField('categoryGroupVisibilities', 'Category Group Visibilities')
        .setMinApi(41)
        .setEditable()
        .setMetadataType(MetadataTypes.DATA_CATEGORY_GROUP)
        .setFieldKey('dataCategoryGroup')
        .addField('dataCategories', new ArrayXMLField('dataCategories', 'Data Categories')
            .setEditable()
            .setDefaultValue([])
        )
        .addField('dataCategoryGroup', new StringXMLField('dataCategoryGroup', 'Data Category Group')
            .setEditable()
            .setUnique()
        )
        .addField('visibility', new EnumXMLField('visibility', 'Visibility')
            .setEditable()
            .setDefaultValue('ALL')
            .addEnumValue('ALL', 'ALL')
            .addEnumValue('CUSTOM', 'CUSTOM')
            .addEnumValue('NONE', 'NONE')
        ),
    classAccesses: new ArrayXMLField('classAccesses', 'Class Accesses')
        .setMinApi(10)
        .setEditable()
        .setMergeable()
        .setMetadataType(MetadataTypes.APEX_CLASS)
        .setFieldKey('apexClass')
        .addField('apexClass', new StringXMLField('apexClass', 'Apex Class')
            .setUnique()
        )
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        ),
    customMetadataTypeAccesses: new ArrayXMLField('customMetadataTypeAccesses', 'Custom Metadata Type Accesses')
        .setMinApi(47)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_METADATA)
        .setFieldKey('name')
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setUnique()
        ),
    customPermissions: new ArrayXMLField('customPermissions', 'Custom Permissions')
        .setMinApi(31)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_PERMISSION)
        .setFieldKey('name')
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setUnique()
        ),
    customSettingAccesses: new ArrayXMLField('customSettingAccesses', 'Custom Settings Accesses')
        .setMinApi(47)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        .setFieldKey('name')
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setUnique()
        ),
    externalDataSourceAccesses: new ArrayXMLField('externalDataSourceAccesses', 'External Data Source Accesses')
        .setMinApi(27)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        .setFieldKey('externalDataSource')
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('externalDataSource', new StringXMLField('externalDataSource', 'externalDataSource')
            .setUnique()
        ),
    fieldLevelSecurities: new ArrayXMLField('fieldLevelSecurities', 'Field Level Securities')
        .setMinApi(10)
        .setMaxApi(22)
        .setEditable()
        .setMergeable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        .setFieldKey('field')
        .addField('readable', new BooleanXMLField('readable', 'Readable')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('field', new StringXMLField('field', 'Field')
            .setUnique()
            .setSeparator(DataValues.POINT)
        )
        .addField('editable', new BooleanXMLField('editable', 'Editable')
            .setEditable()
            .setDefaultValue(false)
            .addControlledField(new XMLDataControlledField('readable', true, true))
        )
        .addField('hidden', new BooleanXMLField('hidden', 'Hidden')
            .setEditable()
            .setDefaultValue(false)
            .addControlledField(new XMLDataControlledField('readable', true, false))
            .addControlledField(new XMLDataControlledField('editable', true, false))
        ),
    fieldPermissions: new ArrayXMLField('fieldPermissions', 'Field Permissions')
        .setMinApi(23)
        .setEditable()
        .setMergeable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        .setFieldKey('field')
        .addField('readable', new BooleanXMLField('readable', 'Readable')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('field', new StringXMLField('field', 'Field')
            .setUnique()
            .setSeparator(DataValues.POINT)
        )
        .addField('editable', new BooleanXMLField('editable', 'Editable')
            .setEditable()
            .setDefaultValue(false)
            .addControlledField(new XMLDataControlledField('readable', true, true))
        ),
    flowAccesses: new ArrayXMLField('flowAccesses', 'Flow Accesses')
        .setMinApi(47)
        .setEditable()
        .setMergeable()
        .setMetadataType(MetadataTypes.FLOWS)
        .setFieldKey('flow')
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('flow', new StringXMLField('flow', 'Flow')
            .setUnique()
        ),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(10)
        .setEditable()
        .setUnique(),
    layoutAssignments: new ArrayXMLField('layoutAssignments', 'Layout Assignments')
        .setMinApi(10)
        .setEditable()
        .setMetadataType(MetadataTypes.LAYOUT)
        .setFieldKey('layout')
        .setSortOrder('recordType')
        .addField('layout', new StringXMLField('layout', 'Layout')
            .setUnique()
            .setSeparator(DataValues.DASH)
            .setMetadataType(MetadataTypes.LAYOUT)
        )
        .addField('recordType', new StringXMLField('recordType', 'Record Type')
            .setUnique()
            .setEditable()
            .setSeparator(DataValues.POINT)
            .setMetadataType(MetadataTypes.RECORD_TYPE)
        ),
    loginFlows: new ArrayXMLField('loginFlows', 'Login Flows')
        .setMinApi(51)
        .setEditable()
        .setMetadataType(MetadataTypes.FLOW)
        .setFieldKey('flow')
        .addField('flow', new StringXMLField('flow', 'Flow')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.FLOW)
        )
        .addField('flowtype', new EnumXMLField('flowtype', 'Flow Type')
            .setEditable()
            .setRequired()
            .setDefaultValue('UI')
            .addEnumValue('UI', 'UI')
        )
        .addField('friendlyname', new StringXMLField('friendlyname', 'Friendly name')
            .setEditable()
            .setRequired()
        )
        .addField('uiLoginFlowType', new EnumXMLField('uiLoginFlowType', 'UI Login Flow Type')
            .setEditable()
            .setRequired()
            .setDefaultValue('UI')
            .addEnumValue('Visual Workflow', 'VisualWorkflow')
            .addEnumValue('Visualforce', 'VisualForce')
        )
        .addField('useLightningRuntime', new BooleanXMLField('useLightningRuntime', 'Use Lightning Runtime')
            .setEditable()
            .setDefaultValue(false)
            .addDependencyField(new XMLDataControlledField('uiLoginFlowType', 'VisualWorkflow', DataValues.NOT_NULL))
        )
        .addField('vfFlowPage', new StringXMLField('vfFlowPage', 'Visualforce Flow Page')
            .setEditable()
            .setMetadataType(MetadataTypes.APEX_PAGE)
            .addDependencyField(new XMLDataControlledField('uiLoginFlowType', 'VisualForce', DataValues.NOT_NULL))
        )
        .addField('vfFlowPageTitle', new StringXMLField('vfFlowPageTitle', 'Visualforce Page Title')
            .setEditable()
            .addDependencyField(new XMLDataControlledField('uiLoginFlowType', 'VisualForce', DataValues.NOT_NULL))
        ),
    loginHours: new ObjectXMLField('loginHours', 'Login Hours')
        .setMinApi(25)
        .setEditable()
        .addField('mondayStart', new EnumXMLField('mondayStart', 'Monday Start')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('mondayEnd', new EnumXMLField('mondayEnd', 'Monday End')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('tuesdayStart', new EnumXMLField('tuesdayStart', 'Tuesday Start')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('tuesdayEnd', new EnumXMLField('tuesdayEnd', 'Tuesday End')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('wednesdayStart', new EnumXMLField('wednesdayStart', 'Wednesday Start')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('wednesdayEnd', new EnumXMLField('wednesdayEnd', 'Wednesday End')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('thursdayStart', new EnumXMLField('thursdayStart', 'Thursday Start')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('thursdayEnd', new EnumXMLField('thursdayEnd', 'Thursday End')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('fridayStart', new EnumXMLField('fridayStart', 'Friday Start')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('fridayEnd', new EnumXMLField('fridayEnd', 'Friday End')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('saturdayStart', new EnumXMLField('saturdayStart', 'Saturday Start')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('saturdayEnd', new EnumXMLField('saturdayEnd', 'Saturday End')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('sundayStart', new EnumXMLField('sundayStart', 'Sunday Start')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        )
        .addField('sundayEnd', new EnumXMLField('sundayEnd', 'Sunday End')
            .setEditable()
            .setEnumValues(DataValues.LOGIN_HOURS_VALUES)
        ),
    loginIpRanges: new ObjectXMLField('loginIpRanges', 'Login IP Ranges')
        .setMinApi(17)
        .setEditable()
        .setFieldKey('startAddress+endAddress')
        .setSortOrder(['startAddress', 'endAddress'])
        .addField('description', new StringXMLField('description', 'Description')
            .setMinApi(31)
            .setEditable()
            .setMaxLength(255)
        )
        .addField('endAddress', new StringXMLField('endAddress', 'End Address')
            .setRequired()
            .setEditable()
            .addMatchPattern(Validator.getIpv4Regexp())
            .addMatchPattern(Validator.getIpv6Regexp())
        )
        .addField('startAddress', new StringXMLField('startAddress', 'Start Address')
            .setRequired()
            .setEditable()
            .addMatchPattern(Validator.getIpv4Regexp())
            .addMatchPattern(Validator.getIpv6Regexp())
        ),
    objectPermissions: new ArrayXMLField('objectPermissions', 'Object Permissions')
        .setMinApi(28)
        .setEditable()
        .setMergeable()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        .setFieldKey('object')
        .addField('allowRead', new BooleanXMLField('allowRead', 'Allow Read')
            .setEditable()
            .setDefaultValue(true)
            .addControlledField(new XMLDataControlledField('allowCreate', false, false))
            .addControlledField(new XMLDataControlledField('allowEdit', false, false))
            .addControlledField(new XMLDataControlledField('allowDelete', false, false))
            .addControlledField(new XMLDataControlledField('viewAllRecords', false, false))
            .addControlledField(new XMLDataControlledField('modifyAllRecords', false, false))
        )
        .addField('allowCreate', new BooleanXMLField('allowCreate', 'Allow Create')
            .setEditable()
            .setDefaultValue(true)
            .addControlledField(new XMLDataControlledField('allowRead', true, true))
        )
        .addField('allowEdit', new BooleanXMLField('allowEdit', 'Allow Edit')
            .setEditable()
            .addControlledField(new XMLDataControlledField('allowRead', true, true))
            .addControlledField(new XMLDataControlledField('allowDelete', false, false))
            .addControlledField(new XMLDataControlledField('modifyAllRecords', false, false))
        )
        .addField('allowDelete', new BooleanXMLField('allowDelete', 'Allow Delete')
            .setEditable()
            .addControlledField(new XMLDataControlledField('allowRead', true, true))
            .addControlledField(new XMLDataControlledField('allowEdit', true, true))
            .addControlledField(new XMLDataControlledField('modifyAllRecords', false, false))
        )
        .addField('object', new StringXMLField('object', 'Object')
            .setUnique()
        )
        .addField('viewAllRecords', new BooleanXMLField('viewAllRecords', 'View All Records')
            .setEditable()
            .addControlledField(new XMLDataControlledField('allowRead', true, true))
            .addControlledField(new XMLDataControlledField('modifyAllRecords', false, false))
        )
        .addField('modifyAllRecords', new BooleanXMLField('modifyAllRecords', 'Modify All Records')
            .setEditable()
            .addControlledField(new XMLDataControlledField('allowRead', true, true))
            .addControlledField(new XMLDataControlledField('allowEdit', true, true))
            .addControlledField(new XMLDataControlledField('allowDelete', true, true))
            .addControlledField(new XMLDataControlledField('viewAllRecords', true, true))
        ),
    pageAccesses: new ArrayXMLField('pageAccesses', 'Visualforce Accesses')
        .setMinApi(10)
        .setEditable()
        .setMergeable()
        .setMetadataType(MetadataTypes.APEX_PAGE)
        .setFieldKey('apexPage')
        .addField('apexPage', new StringXMLField('apexPage', 'Apex Page')
            .setUnique()
        )
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        ),
    profileActionOverrides: new ArrayXMLField('profileActionOverrides', 'Profile Action Overrides')
        .setMinApi(37)
        .setMaxApi(44)
        .setSortOrder(['actionName', 'pageOrSobjectType'])
        .addField('actionName', new EnumXMLField('actionName', 'Action Name')
            .setEditable()
            .addEnumValue('Accept', 'accept')
            .addEnumValue('Clone', 'clone')
            .addEnumValue('Delete', 'delete')
            .addEnumValue('Edit', 'edit')
            .addEnumValue('List', 'list')
            .addEnumValue('New', 'new')
            .addEnumValue('Tab', 'tab')
            .addEnumValue('View', 'view')
        )
        .addField('pageOrSobjectType', new StringXMLField('pageOrSobjectType', 'Page or SObject Type')
            .setEditable()
            .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        )
        .addField('recordType', new StringXMLField('recordType', 'Record Type')
            .setEditable()
            .setMetadataType(MetadataTypes.RECORD_TYPE)
        )
        .addField('content', new StringXMLField('content', 'Content')
            .setEditable()
        )
        .addField('formFactor', new EnumXMLField('formFactor', 'Form Factor')
            .setEditable()
            .setUnique()
            .setDefaultValue('default')
            .addEnumValue('Default', 'default')
            .addEnumValue('Flexi Page', 'flexipage')
            .addEnumValue('Lightning Component', 'lightningcomponent')
        )
        .addField('type', new EnumXMLField('type', 'Type')
            .setEditable()
            .setDefaultValue('default')
            .addEnumValue('Default', 'default')
            .addEnumValue('Flexi Page', 'flexipage')
            .addEnumValue('Lightning Component', 'lightningcomponent')
            .addEnumValue('S-Control', 'scontrol')
            .addEnumValue('Standard', 'standard')
            .addEnumValue('Visualforce', 'visualforce')
        ),
    recordTypeVisibilities: new ArrayXMLField('recordTypeVisibilities', 'Record Type Visibilities')
        .setMinApi(29)
        .setEditable()
        .setMetadataType(MetadataTypes.RECORD_TYPE)
        .setFieldKey('recordType')
        .addField('default', new BooleanXMLField('default', 'Default')
            .setEditable()
            .setUnique()
        )
        .addField('personAccountDefault', new BooleanXMLField('personAccountDefault', 'Person Account Default')
            .setEditable()
            .setUnique()
        )
        .addField('recordType', new StringXMLField('recordType', 'Record Type')
            .setUnique()
            .setSeparator(DataValues.POINT)
        )
        .addField('visible', new BooleanXMLField('visible', 'Visible')
            .setEditable()
            .setDefaultValue(true)
        ),
    tabVisibilities: new ArrayXMLField('tabVisibilities', 'Tab Visibilities')
        .setMinApi(10)
        .setEditable()
        .setMetadataType(MetadataTypes.TAB)
        .addField('tab', new StringXMLField('tab', 'Tab')
            .setUnique()
        )
        .addField('visibility', new EnumXMLField('visibility', 'visibility')
            .setEditable()
            .setDefaultValue('DefaultOn')
            .addEnumValue('Default On', 'DefaultOn')
            .addEnumValue('Default Off', 'DefaultOff')
            .addEnumValue('Hidden', 'Hidden')
        ),
    userPermissions: new ArrayXMLField('userPermissions', 'User Permissions')
        .setMinApi(29)
        .setEditable()
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setUnique()
        )
}