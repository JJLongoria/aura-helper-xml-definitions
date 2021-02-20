const { StringXMLField, ObjectXMLField, XMLDependencyField } = require('../factory/xmlFactory');
const DataValues = require('../values/dataValues');

module.exports = {
    apexEmailNotification: new ObjectXMLField('apexEmailNotification', 'Apex Email Notification')
        .setMinApi(49)
        .setEditable()
        .addField('email', new StringXMLField('email', 'Email')
            .setEditable()
            .addDependencyField(new XMLDependencyField('user', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
        )
        .addField('user', new StringXMLField('user', 'user')
            .setEditable()
            .addDependencyField(new XMLDependencyField('email', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
        )
}