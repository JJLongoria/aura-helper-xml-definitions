const { StringXMLField, ObjectXMLField, ArrayXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField, XMLDependencyField } = require('../factory/xmlFactory');
const DataValues = require('../values/dataValues');
const MetadataTypes = require('../values/metadataTypes');
const FilterItemType = require('./types/filterItem');
const PicklistValuesType = require('./types/picklistValues');

module.exports = {
    businessOwnerGroup: new StringXMLField('businessOwnerGroup', 'Business Owner Group')
        .setMinApi(45)
        .setEditable(true)
        .linkFieldToSObject('Group'),
    businessOwnerUser: new StringXMLField('businessOwnerUser', 'Business Owner User')
        .setMinApi(45)
        .setEditable(true)
        .linkFieldToSObject('User'),
    businessStatus: new EnumXMLField('businessStatus', 'Business Status')
        .setMinApi(45)
        .setEditable(true)
        .setDefaultValue('Active')
        .addEnumValue('Active', 'Active')
        .addEnumValue('Deprecate Candidate', 'DeprecateCandidate')
        .addEnumValue('Hidden', 'Hidden'),
    caseSensitive: new BooleanXMLField('caseSensitive', 'caseSensitive')
        .setMinApi(10)
        .setEditable()
        .setDefaultValue(true),
    complianceGroup: new EnumXMLField('complianceGroup', 'Compliance Group')
        .setMinApi(47)
        .setEditable()
        .setMultiChoice()
        .addEnumValue('CCPA', 'CCPA')
        .addEnumValue('COPPA', 'COPPA')
        .addEnumValue('GDPR', 'GDPR')
        .addEnumValue('HIPAA', 'HIPAA')
        .addEnumValue('PCI', 'PCI')
        .addEnumValue('PII', 'PII'),
    customDataType: new StringXMLField('customDataType', 'Custom Data Type')
        .setMinApi(10)
        .setMaxApi(45)
        .setEditable(),
    defaultValue: new StringXMLField('defaultValue', 'Default Value')
        .setMinApi(10)
        .setEditable(),
    deleteConstraint: new EnumXMLField('deleteConstraint', 'Delete Constraint')
        .setMinApi(10)
        .setEditable()
        .setDefaultValue('SetNull')
        .addEnumValue('Set Null', 'SetNull')
        .addEnumValue('Restrict', 'Restrict')
        .addEnumValue('Cascade', 'Cascade'),
    deprecated: new BooleanXMLField('deprecated', 'Deprecated')
        .setMinApi(10)
        .setEditable()
        .setDefaultValue(true),
    description: new StringXMLField('description', 'Description')
        .setMinApi(10)
        .setEditable(),
    displayFormat: new StringXMLField('displayFormat', 'Display Format')
        .setMinApi(10)
        .setEditable(),
    displayLocationInDecimal: new BooleanXMLField('displayLocationInDecimal', 'Display Location In Decimal')
        .setMinApi(10)
        .setEditable()
        .setDefaultValue(true),
    encrypted: new BooleanXMLField('encrypted', 'Encrypted')
        .setMinApi(34)
        .setMaxApi(43)
        .setEditable(),
    encryptionScheme: new EnumXMLField('encryptionScheme', 'Encryption Scheme')
        .setMinApi(44)
        .setEditable()
        .setDefaultValue('None')
        .addEnumValue('None', 'None')
        .addEnumValue('Probabilistic Encryption', 'ProbabilisticEncryption')
        .addEnumValue('Case Sensitive Deterministic Encryption', 'CaseSensitiveDeterministicEncryption')
        .addEnumValue('Case Insensitive Deterministic Encryption', 'CaseInsensitiveDeterministicEncryption'),
    externalDeveloperName: new StringXMLField('externalDeveloperName', 'External Developer Name')
        .setMinApi(32)
        .setEditable(),
    fieldManageability: new EnumXMLField('fieldManageability', 'Field Manageability')
        .setMinApi(10)
        .setEditable()
        .addEnumValue('Locked', 'Locked')
        .addEnumValue('Developer Controlled', 'DeveloperControlled')
        .addEnumValue('Subscriber Controlled', 'SubscriberControlled'),
    formula: new StringXMLField('formula', 'Formula')
        .setMinApi(10)
        .setEditable(),
    formulaTreatBlanksAs: new EnumXMLField('formulaTreatBlanksAs', 'Formula Treat Blanks As')
        .setMinApi(10)
        .setEditable()
        .addEnumValue('Blank As Blank', 'BlankAsBlank')
        .addEnumValue('Blank As Zero', 'BlankAsZero'),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(10)
        .setEditable()
        .setUnique(),
    globalPicklist: new StringXMLField('globalPicklist', 'Global Picklist')
        .setMinApi(37)
        .setMaxApi(37)
        .setEditable(),
    indexed: new BooleanXMLField('indexed', 'Indexed')
        .setMinApi(10)
        .setMaxApi(14)
        .setEditable(),
    inlineHelpText: new StringXMLField('inlineHelpText', 'Inline Help Text')
        .setMinApi(10)
        .setEditable(),
    isAIPredictionField: new BooleanXMLField('isAIPredictionField', 'Is AI Prediction Field')
        .setMinApi(43)
        .setEditable(),
    isFilteringDisabled: new BooleanXMLField('isFilteringDisabled', 'Is Filtering Disabled')
        .setMinApi(32)
        .setEditable(),
    isNameField: new BooleanXMLField('isNameField', 'Is Name Field')
        .setMinApi(32)
        .setEditable(),
    isSortingDisabled: new BooleanXMLField('isSortingDisabled', 'Is Sorting Disabled')
        .setMinApi(32)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(10)
        .setEditable(),
    length: new IntegerXMLField('length', 'Length')
        .setMinApi(10)
        .setEditable(),
    lookupFilter: new ObjectXMLField('lookupFilter', 'Lookup Filter')
        .setMinApi(30)
        .setEditable()
        .addField('active', new BooleanXMLField('active', 'Active')
            .setEditable()
        )
        .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
            .setEditable()
        )
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('errorMessage', new StringXMLField('errorMessage', 'Error Message')
            .setEditable()
        )
        .addField('filterItems', FilterItemType('filterItems', 'Filter Items', 10))
        .addField('infoMessage', new StringXMLField('infoMessage', 'Info Message')
            .setEditable()
        )
        .addField('isOptional', new BooleanXMLField('isOptional', 'Is Optional')
            .setEditable()
        ),
    maskChar: new EnumXMLField('maskChar', 'Mask Char')
        .setMinApi(10)
        .setEditable()
        .addEnumValue('Asterisk', 'asterisk')
        .addEnumValue('X', 'X'),
    maskType: new EnumXMLField('maskType', 'Mask Type')
        .setMinApi(10)
        .setEditable()
        .addEnumValue('Mask All Characters', 'all')
        .addEnumValue('Credit Card Number', 'creditCard')
        .addEnumValue('Social Security Number', 'ssn')
        .addEnumValue('Last Four Characters Clear', 'lastFour')
        .addEnumValue('Social Insurance Number', 'sin')
        .addEnumValue('National Insurance Number', 'nino'),
    metadataRelationshipControllingField: new StringXMLField('metadataRelationshipControllingField', 'Metadata Relationship Controlling Field')
        .setMinApi(39)
        .setEditable(),
    picklist: new ObjectXMLField('picklist', 'Picklist')
        .setMinApi(10)
        .setMaxApi(37)
        .setEditable()
        .setFieldKey('controllingField')
        .addField('controllingField', new StringXMLField('controllingField', 'Controlling Field')
            .setMinApi(14)
            .setEditable()
        )
        .addField('picklistValues', PicklistValuesType('picklistValues', 'Picklist Values'))
        .addField('restrictedPicklist', new BooleanXMLField('restrictedPicklist', 'Restricted Picklist')
            .setMinApi(37)
            .setEditable()
        )
        .addField('sorted', new BooleanXMLField('sorted', 'Sorted')
            .setEditable()
        ),
    populateExistingRows: new BooleanXMLField('populateExistingRows', 'Populate Existing Rows')
        .setMinApi(10)
        .setEditable(),
    precision: new IntegerXMLField('precision', 'Precision')
        .setMinApi(10)
        .setEditable(),
    referenceTargetField: new StringXMLField('referenceTargetField', 'Reference Target Field')
        .setMinApi(32)
        .setEditable(),
    referenceTo: new StringXMLField('referenceTo', 'referenceTo')
        .setMinApi(10)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT),
    relationshipLabel: new StringXMLField('relationshipLabel', 'Relationship Label')
        .setMinApi(10)
        .setEditable(),
    relationshipName: new StringXMLField('relationshipName', 'Relationship Name')
        .setMinApi(10)
        .setEditable(),
    relationshipOrder: new IntegerXMLField('relationshipOrder', 'Relationship Order')
        .setMinApi(10)
        .setEditable()
        .setValidation(function (value) {
            if (value != 0 && value != 1) {
                return "Not Allowed Vaue. Valid values are 0 or 1 ";
            }
            return undefined;
        }),
    reparentableMasterDetail: new BooleanXMLField('reparentableMasterDetail', 'Reparentable Master Detail')
        .setMinApi(25)
        .setEditable()
        .setDefaultValue(false),
    required: new BooleanXMLField('required', 'Required')
        .setMinApi(10)
        .setEditable(),
    scale: new IntegerXMLField('scale', 'Scale')
        .setMinApi(10)
        .setEditable(),
    securityClassification: new EnumXMLField('securityClassification', 'Security Classification')
        .setMinApi(45)
        .setEditable()
        .addEnumValue('Public', 'Public')
        .addEnumValue('Internal', 'Internal')
        .addEnumValue('Confidential', 'Confidential')
        .addEnumValue('Restricted', 'Restricted')
        .addEnumValue('Mission Critical', 'MissionCritical'),
    startingNumber: new IntegerXMLField('startingNumber', 'Starting Number')
        .setMinApi(10)
        .setEditable()
        .setDefaultValue(0),
    stripMarkup: new BooleanXMLField('stripMarkup', 'Strip Markup')
        .setMinApi(10)
        .setEditable(),
    summarizedField: new StringXMLField('summarizedField', 'Summarized Field')
        .setMinApi(10)
        .setEditable()
        .addDependencyField(new XMLDependencyField('summaryOperation', 'Count', DataValues.NOT_NULL)),
    summaryFilterItems: FilterItemType('summaryFilterItems', 'Summary Filter Items', 10),
    summaryForeignKey: new StringXMLField('summaryForeignKey', 'Summary Foreign Key')
        .setMinApi(10)
        .setEditable(),
    summaryOperation: new EnumXMLField('summaryOperation', 'Summary Operation')
        .setMinApi(10)
        .setEditable()
        .addEnumValue('Count', 'Count')
        .addEnumValue('Min', 'Min')
        .addEnumValue('Max', 'Max')
        .addEnumValue('Sum', 'Sum'),
    trackFeedHistory: new BooleanXMLField('trackFeedHistory', 'Track Feed History')
        .setMinApi(18)
        .setEditable(),
    trackHistory: new BooleanXMLField('trackHistory', 'Track History')
        .setMinApi(30)
        .setEditable(),
    trueValueIndexed: new BooleanXMLField('trueValueIndexed', 'True Value Indexed')
        .setMinApi(14)
        .setEditable(),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(10)
        .setEditable()
        .addEnumValue('Auto Number', 'AutoNumber')
        .addEnumValue('Lookup', 'Lookup')
        .addEnumValue('Master Detail', 'MasterDetail')
        .addEnumValue('Metadata Relationship', 'MetadataRelationship')
        .addEnumValue('Checkbox', 'Checkbox')
        .addEnumValue('Currency', 'Currency')
        .addEnumValue('Date', 'Date')
        .addEnumValue('DateTime', 'DateTime')
        .addEnumValue('Email', 'Email')
        .addEnumValue('Encrypted Text', 'EncryptedText')
        .addEnumValue('External Lookup', 'ExternalLookup')
        .addEnumValue('Indirect Lookup', 'IndirectLookup')
        .addEnumValue('Number', 'Number')
        .addEnumValue('Percent', 'Percent')
        .addEnumValue('Phone', 'Phone')
        .addEnumValue('Picklist', 'Picklist')
        .addEnumValue('Multiselect Picklist', 'MultiselectPicklist')
        .addEnumValue('Summary', 'Summary')
        .addEnumValue('Text', 'Text')
        .addEnumValue('Text Area', 'TextArea')
        .addEnumValue('Long Text Area', 'LongTextArea')
        .addEnumValue('Url', 'Url')
        .addEnumValue('Hierarchy', 'Hierarchy')
        .addEnumValue('File', 'File')
        .addEnumValue('Html', 'Html')
        .addEnumValue('Location', 'Location')
        .addEnumValue('Time', 'Time'),
    unique: new BooleanXMLField('unique', 'Unique')
        .setMinApi(10)
        .setEditable(),
    valueSet: new ObjectXMLField('valueSet', 'Value Set')
        .setMinApi(38)
        .setEditable()
        .setFieldKey('controllingField')
        .addField('controllingField', new StringXMLField('controllingField', 'Controlling Field')
            .setEditable()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('restricted', new BooleanXMLField('restricted', 'Restricted')
            .setEditable()
        )
        .addField('valueSetDefinition', new ObjectXMLField('valueSetDefinition', 'Value Set Definition')
            .setEditable()
            .addField('sorted', new BooleanXMLField('sorted', 'Sorted')
                .setEditable()
            )
            .addField('value', new ArrayXMLField('value', 'Value')
                .setEditable()
                .setFieldKey('fullName')
                .addField('default', new BooleanXMLField('default', 'Default')
                    .setEditable()
                )
                .addField('fullName', new StringXMLField('fullName', 'Full Name')
                    .setUnique()
                    .setEditable()
                )
                .addField('label', new StringXMLField('label', 'Label')
                    .setUnique()
                    .setEditable()
                )
            )
        )
        .addField('valueSettings', new ArrayXMLField('valueSettings', 'Value Settings')
            .setEditable()
            .setFieldKey('controllingFieldValue')
            .addField('controllingFieldValue', new ArrayXMLField('controllingFieldValue', 'Controlling Field Value')
                .setEditable()
            )
            .addField('valueName', new StringXMLField('valueName', 'Value Name')
                .setEditable()
            )
        ),
    visibleLines: new IntegerXMLField('visibleLines', 'Visible Lines')
        .setMinApi(10)
        .setEditable(),
    writeRequiresMasterRead: new BooleanXMLField('writeRequiresMasterRead', 'Write Requires Master Read')
        .setMinApi(10)
        .setEditable(),
}