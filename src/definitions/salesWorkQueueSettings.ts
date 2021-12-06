import { StringXMLField, MetadataTypes, EnumXMLField } from '@aurahelper/core';

export const SalesWorkQueueSettings = {
    featureName: new EnumXMLField('featureName', 'Feature Name')
        .setMinApi(49)
        .setEditable()
        .setDefaultValue('ThirdPartyScore')
        .addEnumValue('Third Party Score', 'ThirdPartyScore'),
    targetEntity: new EnumXMLField('targetEntity', 'Target Entity')
        .setMinApi(49)
        .setEditable()
        .addEnumValue('Contact', 'Contact')
        .addEnumValue('Lead', 'Lead')
        .addEnumValue('Person Account', 'PersonAccount'),
    targetField: new StringXMLField('targetField', 'Target Field')
        .setMinApi(49)
        .setEditable()
        .setMetadataType(MetadataTypes.CUSTOM_FIELD)
}