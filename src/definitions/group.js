const { StringXMLField, BooleanXMLField } = require('@ah/core').Types;

module.exports = {
    doesIncludeBosses: new BooleanXMLField('doesIncludeBosses', 'Does Include Bosses')
        .setMinApi(24)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(24)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(24)
        .setEditable()
        .setRequired()
}