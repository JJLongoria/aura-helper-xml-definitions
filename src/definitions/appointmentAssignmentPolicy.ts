import { StringXMLField, EnumXMLField } from '@aurahelper/core';

export const AppointmentAssignmentPolicy = {
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(53)
        .setEditable()
        .setRequired(),
    policyApplicableDuration: new EnumXMLField('policyApplicableDuration', 'Policy Applicable Duration')
        .setMinApi(53)
        .setEditable()
        .setRequired()
        .addEnumValue('Monthly', 'Monthly')
        .addEnumValue('Parameter Based', 'ParameterBased')
        .addEnumValue('Weekly', 'Weekly'),
    policyType: new EnumXMLField('policyType', 'Policy Type')
        .setMinApi(53)
        .setEditable()
        .setRequired()
        .addEnumValue('Load Balancing', 'loadBalancing'),
    utilizationFactor: new EnumXMLField('utilizationFactor', 'Utilization Factor')
        .setMinApi(53)
        .setEditable()
        .setRequired()
        .addEnumValue('Number Of Appointments', 'NumberOfAppointments')
        .addEnumValue('Total Appointment Duration', 'TotalAppointmentDuration'),
};