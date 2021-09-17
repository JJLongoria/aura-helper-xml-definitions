const { StringXMLField, EnumXMLField, BooleanXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;

module.exports = {
    approvalRequired: new BooleanXMLField('approvalRequired', 'Approval Required')
        .setMinApi(49)
        .setEditable(),
    connectedApp: new StringXMLField('connectedApp', 'Connected App')
        .setMinApi(49)
        .setEditable()
        .setMetadataType(MetadataTypes.CONNECTED_APP),
    enabled: new BooleanXMLField('enabled', 'Enabled')
        .setMinApi(49)
        .setEditable(),
    enabledOperations: new EnumXMLField('enabledOperations', 'Enabled Operations')
        .setMinApi(49)
        .setEditable()
        .addEnumValue('Create', 'Create')
        .addEnumValue('Update', 'Update')
        .addEnumValue('Enable And Disable', 'EnableAndDisable')
        .addEnumValue('Suspend And Restore', 'SuspendAndRestore'),
    flow: new StringXMLField('flow', 'Flow')
        .setMinApi(49)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(49)
        .setEditable()
        .setRequired(),
    namedCredential: new StringXMLField('namedCredential', 'Named Credential')
        .setMinApi(49)
        .setEditable()
        .setMetadataType(MetadataTypes.NAMED_CREDENTIAL),
    notes: new StringXMLField('notes', 'Notes')
        .setMinApi(49)
        .setEditable(),
    onUpdateAttributes: new StringXMLField('onUpdateAttributes', 'On Update Attributes')
        .setMinApi(49)
        .setEditable()
        .setCSV(),
    reconFilter: new StringXMLField('reconFilter', 'Recon Filter')
        .setMinApi(49)
        .setEditable(),
    userAccountMapping: new StringXMLField('userAccountMapping', 'User Account Mapping')
        .setMinApi(49)
        .setEditable()
        .setJSON(),


}