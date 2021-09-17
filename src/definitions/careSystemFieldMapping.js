const { StringXMLField, EnumXMLField, BooleanXMLField } = require('@aurahelper/core').Types;

module.exports = {
    externalIdField: new StringXMLField('externalIdField', 'External Id Field')
        .setMinApi(49)
        .setEditable(),
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(49)
        .setEditable(),
    isProtected: new BooleanXMLField('isProtected', 'Is Protected')
        .setMinApi(49)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(49)
        .setEditable()
        .setRequired(),
    role: new EnumXMLField('role', 'Role')
        .setMinApi(49)
        .setEditable()
        .setRequired()
        .addEnumValue('Patient', 'Patient')
        .addEnumValue('Remote Monitoring Device', 'RemoteMonitoringDevice')
        .addEnumValue('Remote Monitoring Patient', 'RemoteMonitoringPatient')
        .addEnumValue('Service Provider', 'ServiceProvider')
        .addEnumValue('NotApplicable', 'Not Applicable'),
    sourceSystem: new StringXMLField('sourceSystem', 'Source System')
        .setMinApi(49)
        .setEditable(),
    targetObject: new StringXMLField('targetObject', 'Target Object')
        .setMinApi(49)
        .setEditable(),
}