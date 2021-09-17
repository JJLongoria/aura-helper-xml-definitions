const { StringXMLField, BooleanXMLField } = require('@aurahelper/core').Types;

module.exports = {
    customNotifTypeName: new StringXMLField('customNotifTypeName', 'Custom Notification Type Name')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .setMaxLength(80),
    description: new StringXMLField('description', 'Description')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .setMaxLength(255),
    desktop: new BooleanXMLField('desktop', 'Desktop')
        .setMinApi(46)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(46)
        .setEditable()
        .setRequired(),
    mobile: new BooleanXMLField('mobile', 'Mobile')
        .setMinApi(46)
        .setEditable()
        .setRequired(),
}