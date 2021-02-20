const { StringXMLField, ArrayXMLField, BooleanXMLField, XMLDataControlledField } = require('../factory/xmlFactory');
const DataValues = require('../values/dataValues');

module.exports = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(41)
        .setMaxApi(45),
    eventParameters: new ArrayXMLField('eventParameters', 'Event Parameters')
        .setMinApi(41)
        .setMaxApi(45)
        .setEditable()
        .addField('parameterName', new StringXMLField('parameterName', 'Parameter Name')
            .setEditable()
            .setRequired()
        )
        .addField('parameterValue', new StringXMLField('parameterValue', 'Parameter Value')
            .setEditable()
            .addDependencyField(new XMLDataControlledField('parameterName', DataValues.NOT_NULL, true))
        ),
    eventType: new StringXMLField('eventType', 'Event Type')
        .setMinApi(41)
        .setMaxApi(45)
        .setEditable()
        .setRequired(),
    referenceData: new StringXMLField('referenceData', 'Reference Data')
        .setMinApi(41)
        .setMaxApi(45)
        .setEditable()
        .setRequired()
}