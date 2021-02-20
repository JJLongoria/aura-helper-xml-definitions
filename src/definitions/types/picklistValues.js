const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('../../factory/xmlFactory');


module.exports = function (picklistName, picklistLabel, minApi) {
    return new ArrayXMLField(picklistName, picklistLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('fullName')
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setUnique()
        )
        .addField('controllingFieldValues', new StringXMLField('controllingFieldValues', 'Controlling Field Values')
            .setEditable()
        )
        .addField('default', new BooleanXMLField('default', 'Default')
            .setEditable()
        )
} 