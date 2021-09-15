const { StringXMLField, ArrayXMLField, EnumXMLField } = require('@ah/core').Types;

module.exports = {
    channelMembers: new ArrayXMLField('channelMembers', 'Channel Members')
        .setMinApi(45)
        .setMaxApi(46)
        .setEditable()
        .setFieldKey('selectedEntity')
        .setSortOrder(undefined)
        .addField('selectedEntity', new StringXMLField('selectedEntity', 'Selected Entity')
            .setEditable()
        ),
    channelType: new EnumXMLField('channelType', 'Channel Type')
        .setMinApi(45)
        .setEditable()
        .setRequired()
        .addEnumValue('Data', 'data')
        .addEnumValue('Event', 'event'),
    label: new StringXMLField('label', 'Label')
        .setMinApi(45)
        .setEditable()
        .setRequired()

}