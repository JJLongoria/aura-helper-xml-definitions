const { StringXMLField, ObjectXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;

module.exports = {
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(18)
        .setEditable()
        .setRequired(),
    dataCategory: new ObjectXMLField('dataCategory', 'Data Category')
        .setMinApi(18)
        .setEditable()
        .setRequired()
        .setFieldKey('name')
        .addField('dataCategory', new ArrayXMLField('dataCategory', 'Data Category')
            .setEditable()
            .setDefinitionReference('this>dataCategory')
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
            .setUnique()
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(18)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(18)
        .setEditable()
        .setRequired()
        .setUnique(),
    objectUsage: new ObjectXMLField('objectUsage', 'Object Usage')
        .setMinApi(18)
        .setEditable()
        .addField('object', new EnumXMLField('object', 'Object')
            .setEditable()
            .addEnumValue('Knowledge Article Version', 'KnowledgeArticleVersion')
            .addEnumValue('Question', 'Question')
        )
}