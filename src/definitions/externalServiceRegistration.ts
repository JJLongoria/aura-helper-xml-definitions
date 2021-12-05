import { StringXMLField, EnumXMLField } from '@aurahelper/core';

export const ExternalServiceRegistration = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(39)
        .setEditable()
        .setRequired(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(39)
        .setEditable(),
    namedCredential: new StringXMLField('namedCredential', 'Named Credential')
        .setMinApi(39)
        .setEditable()
        .setRequired(),
    schema: new StringXMLField('schema', 'Schema')
        .setMinApi(39)
        .setEditable()
        .setRequired(),
    schemaType: new EnumXMLField('schemaType', 'Schema Type')
        .setMinApi(39)
        .setEditable()
        .setRequired()
        .addEnumValue('Open API 2.0', 'OpenAPI')
        .addEnumValue('API version 47.0 and earlier', 'InteragentHyperSchema', undefined, 47),
    schemaUrl: new StringXMLField('schemaUrl', 'Schema URL')
        .setMinApi(39)
        .setEditable()
        .setRequired(),
    serviceBinding: new StringXMLField('serviceBinding', 'Service Binding')
        .setMinApi(53)
        .setEditable(),
    status: new EnumXMLField('status', 'Status')
        .setMinApi(39)
        .setEditable()
        .setRequired()
        .addEnumValue('Complete', 'complete')
        .addEnumValue('Incomplete', 'incomplete'),
}