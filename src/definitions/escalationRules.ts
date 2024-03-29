import { StringXMLField, BooleanXMLField, ArrayXMLField, MetadataTypes, EnumXMLField, IntegerXMLField } from '@aurahelper/core';
import { filterItem } from './types/filterItem';

export const EscalationRules = {
    escalationRule: new ArrayXMLField('escalationRule', 'Escalation Rule')
        .setMinApi(27)
        .setEditable()
        .setFieldKey('fullName')
        .setSortOrder(undefined)
        .addField('active', new BooleanXMLField('active', 'Active')
            .setEditable()
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .addMatchPattern(/^[^\d\s_](\w)+$/)
            .setUnique()
            .setMetadataType(MetadataTypes.ESCALATION_RULE)
        )
        .addField('ruleEntry', new ArrayXMLField('ruleEntry', 'Rule Entry')
            .setEditable()
            .setFieldKey('booleanFilter')
            .setSortOrder(undefined)
            .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
                .setEditable()
            )
            .addField('businessHours', new StringXMLField('businessHours', 'business Hours')
                .setEditable()
            )
            .addField('businessHoursSource', new EnumXMLField('businessHoursSource', 'Business Hours Source')
                .setEditable()
                .addEnumValue('None', 'None')
                .addEnumValue('Case', 'Case')
                .addEnumValue('Static', 'Static')
            )
            .addField('criteriaItems', filterItem('criteriaItems', 'Criteria Items'))
            .addField('disableEscalationWhenModified', new BooleanXMLField('disableEscalationWhenModified', 'Disable Escalation When Modified')
                .setEditable()
            )
            .addField('escalationAction', new ArrayXMLField('escalationAction', 'Escalation Action')
                .setEditable()
                .setFieldKey('assignedTo')
                .setSortOrder(undefined)
                .addField('assignedTo', new StringXMLField('assignedTo', 'Assigned To')
                    .setEditable()
                    .linkFieldToSObject('User', 'Username')
                    .linkFieldToSObject('Queue', 'DeveloperName')
                )
                .addField('assignedToTemplate', new StringXMLField('assignedToTemplate', 'Assigned To Template')
                    .setEditable()
                )
                .addField('assignedToType', new EnumXMLField('assignedToType', 'Assigned To Type')
                    .setEditable()
                    .addEnumValue('User', 'User')
                    .addEnumValue('Queue', 'User')
                )
                .addField('minutesToEscalation', new IntegerXMLField('minutesToEscalation', 'Minutes To Escalation')
                    .setEditable()
                )
                .addField('notifyCaseOwner', new BooleanXMLField('notifyCaseOwner', 'Notify Case Owner')
                    .setEditable()
                )
                .addField('notifyEmail', new StringXMLField('notifyEmail', 'Notify Email')
                    .setEditable()
                )
                .addField('notifyTo', new StringXMLField('notifyTo', 'Notify To')
                    .setEditable()
                )
                .addField('notifyToTemplate', new StringXMLField('notifyToTemplate', 'Notify To Template')
                    .setEditable()
                )
            )
            .addField('escalationStartTime', new EnumXMLField('escalationStartTime', 'Escalation Start Time')
                .setEditable()
                .addEnumValue('Case Creation', 'CaseCreation')
                .addEnumValue('Case Last Modified', 'CaseLastModified')
            )
            .addField('formula', new StringXMLField('formula', 'Formula')
                .setEditable()
            )
        )
};