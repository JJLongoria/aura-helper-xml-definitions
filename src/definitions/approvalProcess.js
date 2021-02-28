const { StringXMLField, ObjectXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField, XMLDependencyField } = require('@ah/core').Types;
const { DataValues } = require('@ah/core').Values;
const CriteriaItemType = require('./types/criteriaItem');
const ApprovalActionType = require('./types/approvalAction');


module.exports = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(28)
        .setEditable()
        .setRequired(),
    allowRecall: new BooleanXMLField('allowRecall', 'Allow Recall')
        .setMinApi(28)
        .setEditable()
        .setRequired(),
    allowedSubmitters: new ArrayXMLField('allowedSubmitters', 'Allowed Submitters')
        .setMinApi(28)
        .setEditable()
        .setRequired()
        .addField('submitter', new StringXMLField('submitter', 'Submitter')
            .setEditable()
            .setRequired()
            .addDependencyField(new XMLDependencyField('type', ['owner', 'creator', 'allInternalUsers'], DataValues.NOT_AVAILABLE))
        )
        .addField('type', new EnumXMLField('type', 'Type')
            .setEditable()
            .setRequired()
            .addEnumValue('Group', 'group')
            .addEnumValue('Role', 'role')
            .addEnumValue('User', 'user')
            .addEnumValue('Role Subordinates', 'roleSubordinates')
            .addEnumValue('Role Subordinates Internal', 'roleSubordinatesInternal')
            .addEnumValue('Owner', 'owner')
            .addEnumValue('Creator', 'creator')
            .addEnumValue('Partner User', 'partnerUser')
            .addEnumValue('Customer Portal User', 'customerPortalUser')
            .addEnumValue('Portal Role', 'portalRole')
            .addEnumValue('Portal Role Subordinates', 'portalRoleSubordinates')
            .addEnumValue('All Internal Users', 'allInternalUsers')
        ),
    approvalPageFields: new ObjectXMLField('approvalPageFields', 'Approval Page Fields')
        .setMinApi(28)
        .setEditable()
        .addField('field', new ArrayXMLField('field', 'Field')
            .setEditable()
        ),
    approvalStep: new ArrayXMLField('approvalStep', 'Approval Step')
        .setMinApi(28)
        .setEditable()
        .addField('allowDelegate', new BooleanXMLField('allowDelegate', 'Allow Delegate')
            .setEditable()
        )
        .addField('approvalActions', ApprovalActionType('approvalActions', 'Approval Actions'))
        .addField('assignedApprover', new ObjectXMLField('assignedApprover', 'Assigned Approver')
            .setEditable()
            .addField('approver', new ArrayXMLField('approver', 'Approver')
                .setEditable()
                .setFieldKey('name')
                .addField('name', new StringXMLField('name', 'Name')
                    .setEditable()
                    .setRequired()
                    .addDependencyField(new XMLDependencyField('type', ['adhoc', 'userHierarchyField'], DataValues.NOT_AVAILABLE))
                )
                .addField('type', new EnumXMLField('type', 'Type')
                    .setEditable()
                    .setRequired()
                    .addEnumValue('Ad hoc', 'adhoc')
                    .addEnumValue('User', 'user')
                    .addEnumValue('User Hierarchy Field', 'userHierarchyField')
                    .addEnumValue('Related User Field', 'relatedUserField')
                    .addEnumValue('Queue', 'queue')
                )
            )
            .addField('whenMultipleApprovers', new EnumXMLField('whenMultipleApprovers', 'When Multiple Approvers')
                .setEditable()
                .addEnumValue('Unanimous', 'Unanimous')
                .addEnumValue('FirstResponse', 'First Response')
            )
        )
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('entryCriteria', CriteriaItemType('entryCriteria', 'Entry Criteria'))
        .addField('ifCriteriaNotMet', new EnumXMLField('ifCriteriaNotMet', 'If Criteria Not Met')
            .setEditable()
            .addEnumValue('Approve Record', 'ApproveRecord')
            .addEnumValue('Reject Record', 'RejectRecord')
            .addEnumValue('Go to Next Step', 'GotoNextStep')
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('rejectBehavior', new ObjectXMLField('rejectBehavior', 'Reject Behavior')
            .setEditable()
            .setRequired()
            .addField('type', new EnumXMLField('type', 'Type')
                .setEditable()
                .addEnumValue('Reject Request', 'RejectRequest')
                .addEnumValue('Back To Previous', 'BackToPrevious')
            )
        )
        .addField('rejectionActions', ApprovalActionType('rejectionActions', 'Rejection Actions')),
    description: new StringXMLField('description', 'Description')
        .setMinApi(28)
        .setEditable(),
    emailTemplate: new StringXMLField('emailTemplate', 'Email Template')
        .setMinApi(28)
        .setEditable(),
    enableMobileDeviceAccess: new BooleanXMLField('enableMobileDeviceAccess', 'Enable Mobile Device Access')
        .setMinApi(28)
        .setEditable(),
    entryCriteria: CriteriaItemType('entryCriteria', 'Entry Criteria', 28),
    finalApprovalActions: ApprovalActionType('finalApprovalActions', 'Final Approval Actions', 28),
    finalApprovalRecordLock: new BooleanXMLField('finalApprovalRecordLock', 'Final Approval Record Lock')
        .setMinApi(28)
        .setEditable(),
    finalRejectionActions: ApprovalActionType('finalRejectionActions', 'Final Rejection Actions', 28),
    finalRejectionRecordLock: new BooleanXMLField('finalRejectionRecordLock', 'Final Rejection Record Lock')
        .setMinApi(28)
        .setEditable(),
    initialSubmissionActions: ApprovalActionType('initialSubmissionActions', 'Initial Submission Actions', 28),
    label: new StringXMLField('label', 'Label')
        .setMinApi(28)
        .setEditable()
        .setRequired(),
    nextAutomatedApprover: new ObjectXMLField('nextAutomatedApprover', 'Next Automated Approver')
        .setMinApi(28)
        .setEditable()
        .addField('useApproverFieldOfRecordOwner', new BooleanXMLField('useApproverFieldOfRecordOwner', 'Use Approver Field Of Record Owner')
            .setEditable()
            .setRequired()
        )
        .addField('userHierarchyField', new StringXMLField('userHierarchyField', 'User Hierarchy Field')
            .setEditable()
            .setRequired()
        ),
    postTemplate: new StringXMLField('postTemplate', 'Post Template')
        .setMinApi(28)
        .setEditable(),
    recallActions: ApprovalActionType('recallActions', 'Recall Actions', 28),
    recordEditability: new EnumXMLField('recordEditability', 'Record Editability')
        .setMinApi(28)
        .setEditable()
        .addEnumValue('Admin Only', 'AdminOnly')
        .addEnumValue('Admin Or Current Approver', 'AdminOrCurrentApprover'),
    showApprovalHistory: new BooleanXMLField('showApprovalHistory', 'Show Approval History')
        .setMinApi(28)
        .setEditable(),
}