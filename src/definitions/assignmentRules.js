const { StringXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField, XMLDependencyField } = require('@ah/core').Types;
const { MetadataTypes, DataValues } = require('@ah/core').Values;
const FilterItemType = require('./types/filterItem');

module.exports = {
    assignmentRule: new ArrayXMLField('assignmentRule', 'Assignment Rule')
        .setMinApi(27)
        .setEditable()
        .setFieldKey('fullName')
        .addField('active', new BooleanXMLField('active', 'Active')
            .setEditable()
            .setRequired()
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .setUnique()
            .setMetadataType(MetadataTypes.ASSIGNMENT_RULE)
        )
        .addField('ruleEntry', new ArrayXMLField('ruleEntry', 'ruleEntry')
            .setEditable()
            .setRequired()
            .addField('assignedTo', new StringXMLField('assignedTo', 'Assigned To')
                .setEditable()
                .setRequired()
            )
            .addField('assignedToType', new EnumXMLField('assignedToType', 'Assigned To Type')
                .setEditable()
                .setRequired()
                .addEnumValue('User', 'User')
                .addEnumValue('Queue', 'Queue')
            )
            .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
                .setEditable()
            )
            .addField('criteriaItems', FilterItemType('criteriaItems', 'Criteria Items')
                .addDependencyField(new XMLDependencyField('formula', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
            )
            .addField('formula', new StringXMLField('formula', 'Formula')
                .setEditable()
                .addDependencyField(new XMLDependencyField('criteriaItems', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
            )
            .addField('notifyCcRecipients', new BooleanXMLField('notifyCcRecipients', 'Notify Cc Recipients')
                .setMinApi(32)
                .setEditable()
            )
            .addField('overrideExistingTeams', new BooleanXMLField('overrideExistingTeams', 'Override Existing Teams')
                .setEditable()
            )
            .addField('team', new ArrayXMLField('team', 'Team')
                .setEditable()
            )
            .addField('template', new StringXMLField('template', 'Template')
                .setEditable()
            )
        )
}