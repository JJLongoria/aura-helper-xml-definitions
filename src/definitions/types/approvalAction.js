const { ObjectXMLField } = require('@ah/core').Types;
const WorkflowActionReferenceType = require('./workflowActionReference')

module.exports = function (criteriaName, criteriaLabel, minApi) {
    return new ObjectXMLField(criteriaName, criteriaLabel)
        .setMinApi(minApi)
        .setEditable()
        .addField('action', WorkflowActionReferenceType('action', 'Action', minApi));
} 