const { StringXMLField, ArrayXMLField, BooleanXMLField } = require('@aurahelper/core').Types;


module.exports = function (picklistName, picklistLabel, minApi) {
    return new ArrayXMLField(picklistName, picklistLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('fullName')
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .addMatchPattern(/^[^\d\s_](\w| )+$/)
            .setUnique()
        )
        .addField('controllingFieldValues', new StringXMLField('controllingFieldValues', 'Controlling Field Values')
            .setEditable()
        )
        .addField('default', new BooleanXMLField('default', 'Default')
            .setEditable()
        )
} 