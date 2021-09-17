const { ObjectXMLField } = require('@aurahelper/core').Types;
const WorkflowActionReferenceType = require('./workflowActionReference')

module.exports = function (criteriaName, criteriaLabel, minApi) {
    return new ObjectXMLField(criteriaName, criteriaLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('action')
        .setSortOrder(undefined)
        .addField('action', WorkflowActionReferenceType('action', 'Action', minApi));
} 