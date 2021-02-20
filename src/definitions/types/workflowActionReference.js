const { StringXMLField, ArrayXMLField, XMLDependencyField, EnumXMLField } = require('../../factory/xmlFactory');
const DataValues = require('../../values/dataValues');
const MetadataTypes = require('../../values/metadataTypes');


module.exports = function (actionReferenceName, actionReferenceLabel, minApi) {
    return new ArrayXMLField(actionReferenceName, actionReferenceLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('name')
        .setSortOrder(['type', 'name'])
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .addDependencyField(new XMLDependencyField('type', 'Alert', DataValues.METADATA_TYPE.replace('{0}', MetadataTypes.WORKFLOW_ALERT)))
            .addDependencyField(new XMLDependencyField('type', 'FieldUpdate', DataValues.METADATA_TYPE.replace('{0}', MetadataTypes.WORKFLOW_FIELD_UPDATE)))
            .addDependencyField(new XMLDependencyField('type', 'FlowAction', DataValues.METADATA_TYPE.replace('{0}', MetadataTypes.FLOW)))
            .addDependencyField(new XMLDependencyField('type', 'OutboundMessage', DataValues.METADATA_TYPE.replace('{0}', MetadataTypes.WORKFLOW_OUTBOUND_MESSAGE)))
            .addDependencyField(new XMLDependencyField('type', 'Task', DataValues.METADATA_TYPE.replace('{0}', MetadataTypes.WORKFLOW_TASK)))
        )
        .addField('type', new EnumXMLField('type', 'Type')
            .setEditable()
            .setRequired()
            .addEnumValue('Alert', 'Alert')
            .addEnumValue('Field Update', 'FieldUpdate')
            .addEnumValue('Flow Action', 'FlowAction', 30)
            .addEnumValue('Outbound Message', 'OutboundMessage')
            .addEnumValue('Task', 'Task')
        );
} 