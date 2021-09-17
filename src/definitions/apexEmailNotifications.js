const { StringXMLField, ObjectXMLField, XMLDependencyField } = require('@aurahelper/core').Types;
const { DataValues } = require('@aurahelper/core').Values;

module.exports = {
    apexEmailNotification: new ObjectXMLField('apexEmailNotification', 'Apex Email Notification')
        .setMinApi(49)
        .setEditable()
        .setFieldKey('email')
        .addField('email', new StringXMLField('email', 'Email')
            .setEditable()
            .addDependencyField(new XMLDependencyField('user', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
        )
        .addField('user', new StringXMLField('user', 'user')
            .setEditable()
            .addDependencyField(new XMLDependencyField('email', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
        )
}