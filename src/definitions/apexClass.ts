import { StringXMLField, EnumXMLField, DoubleXMLField,  } from '@aurahelper/core';
import { packageVersion } from './types/packageVersion';

export const ApexClass = {
    apiVersion: new DoubleXMLField('apiVersion', 'API Version')
        .setMinApi(10)
        .setEditable()
        .setRequired(),
    content: new StringXMLField('content', 'Content')
        .setMinApi(10)
        .setEditable()
        .setBase64(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(10)
        .setEditable()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    packageVersions: packageVersion('packageVersions', 'Package Versions', 10),
    status: new EnumXMLField('status', 'Status')
        .setMinApi(10)
        .setEditable()
        .setDefaultValue('Active')
        .addEnumValue('Active', 'Active')
        .addEnumValue('Deleted', 'Deleted')
}