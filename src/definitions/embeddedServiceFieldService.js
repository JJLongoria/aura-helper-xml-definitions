const { StringXMLField, BooleanXMLField } = require('@aurahelper/core').Types;
const { MetadataTypes } = require('@aurahelper/core').Values;

module.exports = {
    appointmentBookingFlowName: new StringXMLField('appointmentBookingFlowName', 'Appointment Booking Flow Name')
        .setMinApi(43)
        .setEditable(),
    cancelApptBookingFlowName: new StringXMLField('cancelApptBookingFlowName', 'Cancel Appointment Booking Flow Name')
        .setMinApi(43)
        .setEditable(),
    embeddedServiceConfig: new StringXMLField('embeddedServiceConfig', 'Embedded Service Config')
        .setMinApi(43)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.EMBEDDED_SERVICE_CONFIG),
    enabled: new BooleanXMLField('enabled', 'Enabled')
        .setMinApi(43)
        .setEditable()
        .setRequired(),
    fieldServiceConfirmCardImg: new StringXMLField('fieldServiceConfirmCardImg', 'Field Service Confirm Card Image')
        .setMinApi(43)
        .setEditable(),
    fieldServiceHomeImg: new StringXMLField('fieldServiceHomeImg', 'Field Service Home Image')
        .setMinApi(43)
        .setEditable(),
    fieldServiceLogoImg: new StringXMLField('fieldServiceLogoImg', 'Field Service Logo Image')
        .setMinApi(43)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(43)
        .setEditable()
        .setRequired()
        .setUnique(),
    modifyApptBookingFlowName: new StringXMLField('modifyApptBookingFlowName', 'Modify Appointment Booking Flow Name')
        .setMinApi(43)
        .setEditable(),
    shouldShowExistingAppointment: new BooleanXMLField('shouldShowExistingAppointment', 'Should Show Existing Appointment')
        .setMinApi(43)
        .setEditable()
        .setDefaultValue(false),
    shouldShowNewAppointment: new BooleanXMLField('shouldShowNewAppointment', 'Should Show New Appointment')
        .setMinApi(43)
        .setEditable()
        .setDefaultValue(false)
}