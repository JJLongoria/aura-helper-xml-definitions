const { StringXMLField, ArrayXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    enrichedFields: new ArrayXMLField('enrichedFields', 'Enriched Fields')
        .setMinApi(51)
        .setEditable()
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
        ),
    eventChannel: new StringXMLField('eventChannel', 'Event Channel')
        .setMinApi(47)
        .setEditable()
        .setMetadataType(MetadataTypes.PLATFORM_EVENT_CHANNEL),
    selectedEntity: new StringXMLField('selectedEntity', 'Selected Entity')
        .setMinApi(47)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
}