const { StringXMLField, ObjectXMLField, ArrayXMLField, IntegerXMLField, DoubleXMLField, EnumXMLField, BooleanXMLField, XMLDependencyField } = require('@ah/core').Types;
const { MetadataTypes, DataValues } = require('@ah/core').Values;
const FilterItemType = require('./types/filterItem');

module.exports = {
    alerts: new ArrayXMLField('alerts', 'Alerts')
        .setMinApi(13)
        .setEditable()
        .setFieldKey('fullName')
        .setMetadataType(MetadataTypes.WORKFLOW_ALERT)
        .addField('ccEmails', new ArrayXMLField('ccEmails', 'CC Emails')
            .setEditable()
        )
        .addField('description', new StringXMLField('description', 'Description')
            .setMinApi(16)
            .setEditable()
            .setRequired()
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('protected', new BooleanXMLField('protected', 'Protected')
            .setEditable()
            .setRequired()
        )
        .addField('recipients', new ArrayXMLField('recipients', 'Recipients')
            .setEditable()
            .setFieldKey('field')
            .addField('field', new StringXMLField('field', 'Field')
                .setEditable()
            )
            .addField('recipient', new StringXMLField('recipient', 'Recipient')
                .setEditable()
            )
            .addField('type', new EnumXMLField('type', 'Type')
                .setEditable()
                .addEnumValue('Account Owner', 'accountOwner')
                .addEnumValue('Account Team', 'accountTeam')
                .addEnumValue('Campaign Member Derived Owner', 'campaignMemberDerivedOwner')
                .addEnumValue('Contact Lookup', 'contactLookup')
                .addEnumValue('Creator', 'creator')
                .addEnumValue('Customer Portal Owner', 'customerPortalOwner')
                .addEnumValue('Email', 'email')
                .addEnumValue('Group', 'group')
                .addEnumValue('Opportunity Team', 'opportunityTeam')
                .addEnumValue('Owner', 'owner')
                .addEnumValue('Partner User', 'partnerUser')
                .addEnumValue('Portal Role', 'portalRole')
                .addEnumValue('Portal Role Subordinates', 'portalRoleSubordinates')
                .addEnumValue('Role', 'role')
                .addEnumValue('Role Subordinates', 'roleSubordinates')
                .addEnumValue('Role Subordinates Internal', 'roleSubordinatesInternal')
                .addEnumValue('User', 'user')
                .addEnumValue('User Lookup', 'userLookup')
            )
        )
        .addField('senderAddress', new StringXMLField('senderAddress', 'Sender Address')
            .setEditable()
        )
        .addField('senderType', new EnumXMLField('senderType', 'Sender Type')
            .setEditable()
            .addEnumValue('Current User', 'CurrentUser')
            .addEnumValue('Default Workflow User', 'DefaultWorkflowUser')
            .addEnumValue('Organization Wide Email Address', 'OrgWideEmailAddress')
        )
        .addField('template', new StringXMLField('template', 'Template')
            .setEditable()
            .setRequired()
        ),
    fieldUpdates: new ArrayXMLField('fieldUpdates', 'field Updates')
        .setMinApi(13)
        .setEditable()
        .setMetadataType(MetadataTypes.WORKFLOW_FIELD_UPDATE)
        .setFieldKey('fullName')
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('field', new StringXMLField('field', 'Field')
            .setEditable()
            .setRequired()
        )
        .addField('formula', new StringXMLField('formula', 'Formula')
            .setEditable()
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('literalValue', new StringXMLField('literalValue', 'Literal Value')
            .setEditable()
        )
        .addField('lookupValue', new StringXMLField('lookupValue', 'Lookup Value')
            .setEditable()
        )
        .addField('lookupValueType', new EnumXMLField('lookupValueType', 'Lookup Value Type')
            .setEditable()
            .addEnumValue('Queue', 'Queue')
            .addEnumValue('Record Type', 'RecordType')
            .addEnumValue('User', 'User')
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setMinApi(16)
            .setEditable()
            .setRequired()
        )
        .addField('notifyAssignee', new BooleanXMLField('notifyAssignee', 'Notify Assignee')
            .setEditable()
            .setRequired()
        )
        .addField('operation', new EnumXMLField('operation', 'Operation')
            .setEditable()
            .setRequired()
            .addEnumValue('Formula', 'Formula')
            .addEnumValue('Literal', 'Literal')
            .addEnumValue('Lookup Value', 'LookupValue')
            .addEnumValue('Next Value', 'NextValue')
            .addEnumValue('Null', 'Null')
            .addEnumValue('Previous Value', 'PreviousValue')
        )
        .addField('protected', new BooleanXMLField('protected', 'Protected')
            .setEditable()
            .setRequired()
        )
        .addField('reevaluateOnChange', new BooleanXMLField('reevaluateOnChange', 'Reevaluate On Change')
            .setEditable()
            .setRequired()
        )
        .addField('targetObject', new StringXMLField('targetObject', 'Target Object')
            .setMinApi(14)
            .setEditable()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('sourceField', new StringXMLField('sourceField', 'Source Field')
            .setMinApi(13)
            .setMaxApi(13)
            .setEditable()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        ),
    flowActions: new ArrayXMLField('flowActions', 'Flow Actions')
        .setMinApi(30)
        .setEditable()
        .setFieldKey('label')
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('flow', new StringXMLField('flow', 'Flow')
            .setEditable()
            .setRequired()
        )
        .addField('flowInputs', new ArrayXMLField('flowInputs', 'Flow Inputs')
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
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
        )
        .addField('language', new EnumXMLField('language', 'Language')
            .setEditable()
            .setReserved()
            .setEnumValues(DataValues.SF_LANGUAGES)
        )
        .addField('protected', new BooleanXMLField('protected', 'Protected')
            .setEditable()
            .setReserved()
        ),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(13)
        .setEditable()
        .setRequired()
        .setUnique(),
    knowledgePublishes: new ArrayXMLField('knowledgePublishes', 'Knowledge Publishes')
        .setMinApi(27)
        .setEditable()
        .setMetadataType(MetadataTypes.WORKFLOW_KNOWLEDGE_PUBLISH)
        .setFieldKey('label')
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
        )
        .addField('action', new EnumXMLField('action', 'Action')
            .setEditable()
            .addEnumValue('Publish As New', 'PublishAsNew')
            .addEnumValue('Publish', 'Publish')
        )
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('language', new EnumXMLField('language', 'Language')
            .setEditable()
            .setRequired()
            .setEnumValues(DataValues.SF_LANGUAGES)
        )
        .addField('protected', new BooleanXMLField('protected', 'Protected')
            .setEditable()
            .setRequired()
        ),
    outboundMessages: new ArrayXMLField('outboundMessages', 'Outbound Messages')
        .setMinApi(13)
        .setEditable()
        .setMetadataType(MetadataTypes.WORKFLOW_OUTBOUND_MESSAGE)
        .setFieldKey('fullName')
        .addField('apiVersion', new DoubleXMLField('apiVersion', 'API Version')
            .setMinApi(18)
            .setEditable()
            .setRequired()
        )
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('endpointUrl', new StringXMLField('endpointUrl', 'Endpoint URL')
            .setEditable()
            .setRequired()
        )
        .addField('fields', new ArrayXMLField('fields', 'Fields')
            .setEditable()
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('includeSessionId', new BooleanXMLField('includeSessionId', 'Include Session Id')
            .setEditable()
            .setRequired()
        )
        .addField('integrationUser', new StringXMLField('integrationUser', 'Integration User')
            .setEditable()
            .setRequired()
            .linkFieldToSObject('User', 'Username')
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setMinApi(16)
            .setEditable()
            .setRequired()
        )
        .addField('protected', new BooleanXMLField('protected', 'Protected')
            .setEditable()
            .setRequired()
        )
        .addField('useDeadLetterQueue', new BooleanXMLField('useDeadLetterQueue', 'Use Dead Letter Queue')
            .setEditable()
        ),
    rules: new ArrayXMLField('rules', 'Rules')
        .setMinApi(13)
        .setEditable()
        .setMetadataType(MetadataTypes.WORKFLOW_RULE)
        .setFieldKey('fullName')
        .addField('actions', new ArrayXMLField('actions', 'Actions')
            .setEditable()
            .setFieldKey('name')
            .addField('name', new StringXMLField('name', 'Name')
                .setEditable()
                .setRequired()
            )
            .addField('type', new EnumXMLField('type', 'Type')
                .setEditable()
                .setRequired()
                .addEnumValue('Alert', 'Alert')
                .addEnumValue('Field Update', 'FieldUpdate')
                .addEnumValue('Flow Action', 'FlowAction', 30)
                .addEnumValue('Outbound Message', 'OutboundMessage')
                .addEnumValue('Task', 'Task')
            )
        )
        .addField('active', new BooleanXMLField('active', 'Active')
            .setEditable()
            .setRequired()
        )
        .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
            .setEditable()
        )
        .addField('criteriaItems', FilterItemType('criteriaItems', 'Criteria Items')
            .addDependencyField(new XMLDependencyField('formula', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
        )
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('formula', new StringXMLField('formula', 'Formula')
            .setEditable()
            .addDependencyField(new XMLDependencyField('criteriaItems', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('triggerType', new EnumXMLField('triggerType', 'Trigger Type')
            .setEditable()
            .addEnumValue('On All Changes', 'onAllChanges')
            .addEnumValue('On Create Only', 'onCreateOnly')
            .addEnumValue('On Create Or Triggering Update', 'onCreateOrTriggeringUpdate')
        )
        .addField('workflowTimeTriggers', new ObjectXMLField('workflowTimeTriggers', 'Workflow Time Triggers')
            .setEditable()
            .addField('actions', new ArrayXMLField('actions', 'Actions')
                .setEditable()
                .setFieldKey('name')
                .addField('name', new StringXMLField('name', 'Name')
                    .setEditable()
                    .setRequired()
                )
                .addField('type', new EnumXMLField('type', 'Type')
                    .setEditable()
                    .setRequired()
                    .addEnumValue('Alert', 'Alert')
                    .addEnumValue('Field Update', 'FieldUpdate')
                    .addEnumValue('Flow Action', 'FlowAction', 30)
                    .addEnumValue('Outbound Message', 'OutboundMessage')
                    .addEnumValue('Task', 'Task')
                )
            )
            .addField('offsetFromField', new StringXMLField('offsetFromField', 'Offset From Field')
                .setEditable()
            )
            .addField('timeLength', new StringXMLField('timeLength', 'Time Length')
                .setEditable()
            )
            .addField('type', new EnumXMLField('type', 'Type')
                .setEditable()
                .setRequired()
                .addEnumValue('Hours', 'Hours')
                .addEnumValue('Days', 'Days')
            )
        ),
    tasks: new ArrayXMLField('tasks', 'Tasks')
        .setMinApi(13)
        .setEditable()
        .setMetadataType(MetadataTypes.WORKFLOW_TASK)
        .setFieldKey('fullName')
        .addField('assignedTo', new StringXMLField('assignedTo', 'Assigned To')
            .setEditable()
        )
        .addField('assignedToType', new EnumXMLField('assignedToType', 'Assigned To Type')
            .setEditable()
            .addEnumValue('Account Creator', 'accountCreator')
            .addEnumValue('Account Owner', 'accountOwner')
            .addEnumValue('Account Team', 'accountTeam')
            .addEnumValue('Creator', 'creator')
            .addEnumValue('Opportunity Team', 'opportunityTeam')
            .addEnumValue('Owner', 'owner')
            .addEnumValue('Partner User', 'partnerUser')
            .addEnumValue('Portal Role', 'portalRole')
            .addEnumValue('Role', 'role')
            .addEnumValue('User', 'user')
        )
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('dueDateOffset', new IntegerXMLField('dueDateOffset', 'Due Date Offset')
            .setEditable()
            .setRequired()
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('notifyAssignee', new BooleanXMLField('notifyAssignee', 'Notify Assignee')
            .setEditable()
            .setRequired()
        )
        .addField('offsetFromField', new StringXMLField('offsetFromField', 'Offset From Field')
            .setEditable()
        )
        .addField('priority', new StringXMLField('priority', 'Priority')
            .setEditable()
            .setRequired()
        )
        .addField('protected', new BooleanXMLField('protected', 'Protected')
            .setEditable()
            .setRequired()
        )
        .addField('status', new StringXMLField('status', 'Status')
            .setEditable()
            .setRequired()
        )
        .addField('subject', new StringXMLField('subject', 'Subject')
            .setMinApi(16)
            .setEditable()
            .setRequired()
        )
}