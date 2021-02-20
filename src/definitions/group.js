const { StringXMLField, BooleanXMLField } = require('../factory/xmlFactory');

module.exports = {
    doesIncludeBosses: new BooleanXMLField('doesIncludeBosses', 'Does Include Bosses')
        .setMinApi(24)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(24)
        .setEditable()
        .setRequired()
        .setUnique(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(24)
        .setEditable()
        .setRequired()
}