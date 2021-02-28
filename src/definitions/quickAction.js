const { StringXMLField, ObjectXMLField, ArrayXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField, XMLDependencyField } = require('@ah/core').Types;
const { MetadataTypes, DataValues } = require('@ah/core').Values;

module.exports = {
    canvas: new StringXMLField('canvas', 'Canvas')
        .setMinApi(29)
        .setEditable()
        .addDependencyField(new XMLDependencyField('type', 'Canvas', DataValues.NOT_NULL)),
    description: new StringXMLField('description', 'Description')
        .setMinApi(28)
        .setEditable(),
    fieldOverrides: new ArrayXMLField('fieldOverrides', 'Field Overrides')
        .setMinApi(28)
        .setEditable()
        .setFieldKey('field')
        .addField('field', new StringXMLField('field', 'Field')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('formula', new StringXMLField('formula', 'Formula')
            .setMinApi(43)
            .setEditable()
        )
        .addField('literalValue', new StringXMLField('literalValue', 'Literal Value')
            .setEditable()
        ),
    flowDefinition: new StringXMLField('flowDefinition', 'Flow Definition')
        .setMinApi(28)
        .setEditable()
        .setMetadataType(MetadataTypes.FLOW)
        .addDependencyField(new XMLDependencyField('type', 'Flow', DataValues.NOT_NULL)),
    height: new IntegerXMLField('height', 'Height')
        .setMinApi(28)
        .setEditable(),
    icon: new StringXMLField('icon', 'Icon')
        .setMinApi(32)
        .setEditable(),
    isProtected: new BooleanXMLField('isProtected', 'Is Protected')
        .setMinApi(28)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(28)
        .setEditable(),
    lightningComponent: new StringXMLField('lightningComponent', 'Lightning Component')
        .setMinApi(38)
        .setEditable()
        .setMetadataType(MetadataTypes.LIGHTNING_COMPONENT_BUNDLE)
        .addDependencyField(new XMLDependencyField('type', 'LightningComponent', DataValues.NOT_NULL)),
    optionsCreateFeedItem: new BooleanXMLField('optionsCreateFeedItem', 'Options Create Feed Item')
        .setMinApi(36)
        .setEditable()
        .setRequired(),
    page: new StringXMLField('page', 'Page')
        .setMinApi(38)
        .setEditable()
        .setMetadataType(MetadataTypes.APEX_PAGE)
        .addDependencyField(new XMLDependencyField('type', 'VisualforcePage', DataValues.NOT_NULL)),
    quickActionLayout: new ObjectXMLField('quickActionLayout', 'Quick Action Layout')
        .setMinApi(28)
        .setEditable()
        .addField('layoutSectionStyle', new EnumXMLField('layoutSectionStyle', 'Layout Section Style')
            .setEditable()
            .addEnumValue('Two Columns Top To Bottom', 'TwoColumnsTopToBottom')
            .addEnumValue('Two Columns Left To Right', 'TwoColumnsLeftToRight')
            .addEnumValue('One Column', 'OneColumn')
            .addEnumValue('Custom Links', 'CustomLinks')
        )
        .addField('quickActionLayoutColumns', new ArrayXMLField('quickActionLayoutColumns', 'Quick Action Layout Columns')
            .setEditable()
            .addField('quickActionLayoutItems', new ArrayXMLField('quickActionLayoutItems', 'Quick Action Layout Items')
                .setEditable()
                .addField('emptySpace', new BooleanXMLField('emptySpace', 'Empty Space')
                    .setEditable()
                )
                .addField('field', new StringXMLField('field', 'Field')
                    .setEditable()
                    .setMetadataType(MetadataTypes.CUSTOM_FIELD)
                )
                .addField('uiBehavior', new EnumXMLField('uiBehavior', 'UUI Behavior')
                    .setEditable()
                    .addEnumValue('Edit', 'Edit')
                    .addEnumValue('Required', 'Required')
                    .addEnumValue('Read Only', 'Readonly')
                )
            )
        ),
    standardLabel: new EnumXMLField('standardLabel', 'Standard Label')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('Add Record', 'AddRecord')
        .addEnumValue('Add Member', 'AddMember')
        .addEnumValue('Change Due Date', 'ChangeDueDate')
        .addEnumValue('Change Priority', 'ChangePriority')
        .addEnumValue('Change Status', 'ChangeStatus')
        .addEnumValue('Create New', 'CreateNew')
        .addEnumValue('Create New Record Type', 'CreateNewRecordType')
        .addEnumValue('Defer', 'Defer')
        .addEnumValue('Edit Description', 'EditDescription')
        .addEnumValue('Escalate', 'Escalate')
        .addEnumValue('Escalate To Record', 'EscalateToRecord')
        .addEnumValue('Forward', 'Forward', 42)
        .addEnumValue('Log A Call', 'LogACall')
        .addEnumValue('Log A Note', 'LogANote')
        .addEnumValue('Modify Appointment', 'ModifyAppointment', 47)
        .addEnumValue('New', 'New')
        .addEnumValue('New Child', 'NewChild')
        .addEnumValue('New Child Record Type', 'NewChildRecordType')
        .addEnumValue('New Record Type', 'NewRecordType')
        .addEnumValue('Offer Feedback', 'OfferFeedback')
        .addEnumValue('Quick', 'Quick')
        .addEnumValue('QuickRecordType', 'QuickRecordType')
        .addEnumValue('Reply', 'Reply', 42)
        .addEnumValue('Reply All', 'ReplyAll', 42)
        .addEnumValue('Request Feedback', 'RequestFeedback')
        .addEnumValue('Send Email', 'SendEmail', 31)
        .addEnumValue('Update', 'Update'),
    successMessage: new StringXMLField('successMessage', 'Success Message')
        .setMinApi(36)
        .setEditable(),
    targetObject: new StringXMLField('targetObject', 'Target Object')
        .setMinApi(28)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT),
    targetParentField: new StringXMLField('targetParentField', 'Target Parent Field')
        .setMinApi(28)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD),
    targetRecordType: new EnumXMLField('targetRecordType', 'Target Record Type')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('Business Account', 'Business Account')
        .addEnumValue('Person Account', 'Person Account')
        .addEnumValue('Master', 'Master'),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(28)
        .setEditable()
        .setRequired()
        .addEnumValue('Canvas', 'Canvas')
        .addEnumValue('Create', 'Create')
        .addEnumValue('Flow', 'Flow', 41)
        .addEnumValue('Lightning Component', 'LightningComponent', 38)
        .addEnumValue('Log A Call', 'LogACall')
        .addEnumValue('Post', 'Post')
        .addEnumValue('Send Email', 'SendEmail', 31)
        .addEnumValue('Social Post', 'SocialPost')
        .addEnumValue('Update', 'Update')
        .addEnumValue('Visualforce Page', 'VisualforcePage'),
    width: new IntegerXMLField('width', 'Width')
        .setMinApi(28)
        .setEditable(),
}