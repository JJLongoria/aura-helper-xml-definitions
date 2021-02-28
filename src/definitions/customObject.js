const { StringXMLField, ObjectXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;
const { MetadataTypes, DataValues } = require('@ah/core').Values;
const ActionOverride = require('./actionOverride');
const BusinessProcess = require('./businessProcess');
const CustomField = require('./customField');
const FieldSet = require('./fieldSet');
const HistoryRetentionPolicy = require('./historyRetentionPolicy');
const Index = require('./indexXml');
const ListView = require('./listView');
const NamedFilter = require('./namedFilter');
const ProfileSearchLayouts = require('./profileSearchLayouts');
const RecordType = require('./recordType');
const SearchLayouts = require('./searchLayouts');
const SharingReason = require('./sharingReason');
const SharingRecalculation = require('./sharingRecalculation');
const ValidationRule = require('./validationRule');
const WebLink = require('./webLink');

module.exports = {
    actionOverrides: new ArrayXMLField('actionOverrides', 'ActionOverrides')
        .setMinApi(18)
        .setEditable()
        .setMetadataType(MetadataTypes.ACTION_OVERRIDE)
        .setFields(ActionOverride),
    allowInChatterGroups: new BooleanXMLField('allowInChatterGroups', 'Allow In Chatter Groups')
        .setMinApi(34)
        .setEditable(),
    businessProcesses: new ArrayXMLField('businessProcesses', 'Business Processes')
        .setMinApi(17)
        .setEditable()
        .setMetadataType(MetadataTypes.BUSINESS_PROCESS)
        .setFields(BusinessProcess),
    compactLayoutAssignment: new StringXMLField('compactLayoutAssignment', 'Compact Layout Assignment')
        .setMinApi(29)
        .setEditable()
        .setMetadataType(MetadataTypes.COMPACT_LAYOUT),
    compactLayouts: new ArrayXMLField('compactLayouts', 'Compact Layouts')
        .setMinApi(29)
        .setEditable()
        .setMetadataType(MetadataTypes.COMPACT_LAYOUT)
        .setFields(BusinessProcess),
    customHelp: new StringXMLField('customHelp', 'Custom Help')
        .setMinApi(14)
        .setEditable()
        .setMetadataType(MetadataTypes.S_CONTROL),
    customHelpPage: new StringXMLField('customHelpPage', 'Custom Help Page')
        .setMinApi(16)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE),
    customSettingsType: new EnumXMLField('customSettingsType', 'Custom Settings Type')
        .setMinApi(17)
        .setEditable()
        .addEnumValue('List', 'List')
        .addEnumValue('Hierarchy', 'Hierarchy'),
    customSettingsVisibility: new EnumXMLField('customSettingsVisibility', 'Custom Settings Visibility')
        .setMinApi(17)
        .setMaxApi(33)
        .setEditable()
        .addEnumValue('Public', 'Public')
        .addEnumValue('Protected', 'Protected'),
    dataStewardGroup: new StringXMLField('dataStewardGroup', 'Data Steward Group')
        .setMinApi(10)
        .setMaxApi(47)
        .setEditable(),
    dataStewardUser: new StringXMLField('dataStewardUser', 'Data Steward User')
        .setMinApi(10)
        .setMaxApi(47)
        .setEditable(),
    deploymentStatus: new EnumXMLField('deploymentStatus', 'Deployment Status')
        .setMinApi(10)
        .setEditable()
        .addEnumValue('In Development', 'InDevelopment')
        .addEnumValue('Deployed', 'Deployed'),
    deprecated: new BooleanXMLField('deprecated', 'Deprecated')
        .setMinApi(10)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(10)
        .setEditable()
        .setMaxLength(1000),
    enableActivities: new BooleanXMLField('enableActivities', 'Enable Activities')
        .setMinApi(10)
        .setEditable(),
    enableBulkApi: new BooleanXMLField('enableBulkApi', 'Enable Bulk API')
        .setMinApi(31)
        .setMinApi(10)
        .setEditable(),
    enableDivisions: new BooleanXMLField('enableDivisions', 'Enable Divisions')
        .setMinApi(10)
        .setEditable(),
    enableEnhancedLookup: new BooleanXMLField('enableEnhancedLookup', 'Enable Enhanced Lookup')
        .setMinApi(10)
        .setEditable(),
    enableFeeds: new BooleanXMLField('enableFeeds', 'Enable Feeds')
        .setMinApi(18)
        .setEditable(),
    enableHistory: new BooleanXMLField('enableHistory', 'Enable History')
        .setMinApi(29)
        .setEditable(),
    enableReports: new BooleanXMLField('enableReports', 'Enable Reports')
        .setMinApi(38)
        .setEditable(),
    enableSearch: new BooleanXMLField('enableSearch', 'Enable Search')
        .setMinApi(35)
        .setEditable(),
    enableSharing: new BooleanXMLField('enableSharing', 'Enable Sharing')
        .setMinApi(31)
        .setEditable(),
    enableStreamingApi: new BooleanXMLField('enableStreamingApi', 'Enable Streaming API')
        .setMinApi(31)
        .setEditable(),
    eventType: new EnumXMLField('eventType', 'Event Type')
        .setMinApi(41)
        .setEditable()
        .addEnumValue('High Volume', 'HighVolume')
        .addEnumValue('Standard Volume', 'StandardVolume'),
    externalDataSource: new StringXMLField('externalDataSource', 'External Data Source')
        .setMinApi(32)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.EXTERNAL_DATA_SOURCE),
    externalName: new StringXMLField('externalName', 'External Name')
        .setMinApi(32)
        .setEditable()
        .setRequired(),
    externalRepository: new StringXMLField('externalRepository', 'External Repository')
        .setMinApi(32)
        .setEditable()
        .setRequired(),
    externalSharingModel: new EnumXMLField('externalSharingModel', 'External Sharing Model')
        .setMinApi(31)
        .setEditable()
        .addEnumValue('Private', 'Private')
        .addEnumValue('Read', 'Read')
        .addEnumValue('Read Write', 'ReadWrite')
        .addEnumValue('Read Write Transfer', 'ReadWriteTransfer')
        .addEnumValue('Full Access', 'FullAccess')
        .addEnumValue('Controlled By Parent', 'ControlledByParent')
        .addEnumValue('Controlled By Campaign', 'ControlledByCampaign')
        .addEnumValue('Controlled By Lead Or Contact', 'ControlledByLeadOrContact'),
    fields: new ArrayXMLField('fields', 'Fields')
        .setMinApi(10)
        .setEditable()
        .setFieldKey('fullName')
        .setFields(CustomField),
    fieldSets: new ArrayXMLField('fieldSets', 'Field Sets')
        .setMinApi(10)
        .setEditable()
        .setFieldKey('label')
        .setFields(FieldSet),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(10)
        .setEditable()
        .setRequired()
        .setUnique(),
    gender: new EnumXMLField('gender', 'Gender')
        .setMinApi(10)
        .setEditable()
        .setEnumValues(DataValues.GENDER),
    household: new BooleanXMLField('household', 'House hold')
        .setMinApi(10)
        .setEditable(),
    historyRetentionPolicy: new ObjectXMLField('historyRetentionPolicy', 'History Retention Policy')
        .setMinApi(10)
        .setEditable()
        .setFields(HistoryRetentionPolicy),
    indexes: new ArrayXMLField('indexes', 'Indexes')
        .setMinApi(10)
        .setEditable()
        .setFieldKey('label')
        .setFields(Index),
    label: new StringXMLField('label', 'Label')
        .setMinApi(10)
        .setEditable()
        .setRequired(),
    listViews: new ArrayXMLField('listViews', 'List Views')
        .setMinApi(10)
        .setEditable()
        .setFieldKey('fullName')
        .setFields(ListView),
    namedFilter: new ArrayXMLField('namedFilter', 'Named Filter')
        .setMinApi(17)
        .setEditable()
        .setFieldKey('fullName')
        .setFields(NamedFilter),
    nameField: new ObjectXMLField('nameField', 'Name Field')
        .setMinApi(10)
        .setEditable()
        .setFieldKey('fullName')
        .setFields(CustomField),
    pluralLabel: new StringXMLField('pluralLabel', 'Plural Label')
        .setMinApi(10)
        .setEditable()
        .setRequired(),
    profileSearchLayouts: new ObjectXMLField('profileSearchLayouts', 'Profile Search Layouts')
        .setMinApi(47)
        .setEditable()
        .setFields(ProfileSearchLayouts),
    publishBehavior: new EnumXMLField('publishBehavior', 'Publish Behavior')
        .setMinApi(46)
        .setEditable()
        .addEnumValue('Publish After Commit', 'PublishAfterCommit')
        .addEnumValue('Publish Immediately', 'PublishImmediately'),
    recordTypes: new ArrayXMLField('recordTypes', 'Record Types')
        .setMinApi(10)
        .setEditable()
        .setFieldKey('fullName')
        .setFields(RecordType),
    recordTypeTrackFeedHistory: new BooleanXMLField('recordTypeTrackFeedHistory', 'Record Type Track Feed History')
        .setMinApi(19)
        .setEditable(),
    recordTypeTrackHistory: new BooleanXMLField('recordTypeTrackHistory', 'Record Type Track History')
        .setMinApi(19)
        .setEditable(),
    searchLayouts: new ObjectXMLField('searchLayouts', 'Search Layouts')
        .setMinApi(10)
        .setEditable()
        .setFields(SearchLayouts),
    sharingModel: new EnumXMLField('sharingModel', 'Sharing Model')
        .setMinApi(31)
        .setEditable()
        .addEnumValue('Private', 'Private')
        .addEnumValue('Read', 'Read')
        .addEnumValue('Read Write', 'ReadWrite')
        .addEnumValue('Read Write Transfer', 'ReadWriteTransfer')
        .addEnumValue('Full Access', 'FullAccess')
        .addEnumValue('Controlled By Parent', 'ControlledByParent')
        .addEnumValue('Controlled By Campaign', 'ControlledByCampaign')
        .addEnumValue('Controlled By Lead Or Contact', 'ControlledByLeadOrContact'),
    sharingReasons: new ArrayXMLField('sharingReasons', 'Sharing Reasons')
        .setMinApi(10)
        .setEditable()
        .setFieldKey('fullName')
        .setFields(SharingReason),
    sharingRecalculations: new ArrayXMLField('sharingRecalculations', 'Sharing Recalculations')
        .setMinApi(10)
        .setEditable()
        .setFieldKey('className')
        .setFields(SharingRecalculation),
    startsWith: new EnumXMLField('startsWith', 'Starts With')
        .setMinApi(10)
        .setEditable()
        .setEnumValues(DataValues.STARTS_WITH),
    validationRules: new ArrayXMLField('validationRules', 'Validation Rules')
        .setMinApi(10)
        .setEditable()
        .setFieldKey('fullName')
        .setFields(ValidationRule),
    visibility: new EnumXMLField('visibility', 'Visibility')
        .setMinApi(34)
        .setEditable()
        .setDefaultValue('Public')
        .addEnumValue('Public', 'Public')
        .addEnumValue('Protected', 'Protected')
        .addEnumValue('Package Protected', 'PackageProtected'),
    webLinks: new ArrayXMLField('webLinks', 'WebLinks')
        .setMinApi(10)
        .setEditable()
        .setFieldKey('fullName')
        .setFields(WebLink)

}