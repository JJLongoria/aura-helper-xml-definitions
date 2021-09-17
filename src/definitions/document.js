const { StringXMLField, BooleanXMLField, XMLDependencyField } = require('@aurahelper/core').Types;
const { DataValues } = require('@aurahelper/core').Values;

module.exports = {
    content: new StringXMLField('content', 'Content')
        .setMinApi(10)
        .setEditable()
        .setBase64(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(10)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(10)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    internalUseOnly: new BooleanXMLField('internalUseOnly', 'Internal Use Only')
        .setMinApi(10)
        .setEditable()
        .addDependencyField(new XMLDependencyField('public', true, DataValues.NOT_AVAILABLE)),
    keywords: new StringXMLField('keywords', 'Keywords')
        .setMinApi(10)
        .setEditable(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(14)
        .setEditable(),
    public: new BooleanXMLField('public', 'Public')
        .setMinApi(10)
        .setEditable()
        .addDependencyField(new XMLDependencyField('internalUseOnly', true, DataValues.NOT_AVAILABLE))
}