const { StringXMLField, ObjectXMLField, ArrayXMLField } = require('../../factory/xmlFactory');
const WorkflowActionReferenceType = require('./workflowActionReference')

module.exports = function (criteriaName, criteriaLabel, minApi) {
    return new ObjectXMLField(criteriaName, criteriaLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFields(WorkflowActionReferenceType('actions', 'Actions', minApi));
} 