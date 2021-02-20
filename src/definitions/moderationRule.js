const { StringXMLField, ArrayXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField } = require('../factory/xmlFactory');
const MetadataTypes = require('../values/metadataTypes');

module.exports = {
    action: new EnumXMLField('action', 'Action')
        .setMinApi(36)
        .setEditable()
        .setRequired()
        .addEnumValue('Block', 'Block')
        .addEnumValue('Review', 'Review')
        .addEnumValue('Replace', 'Replace')
        .addEnumValue('Flag', 'Flag')
        .addEnumValue('Freeze And Notify', 'FreezeAndNotify'),
    actionLimit: new IntegerXMLField('actionLimit', 'Action Limit')
        .setMinApi(39)
        .setEditable(),
    active: new BooleanXMLField('active', 'Active')
        .setMinApi(36)
        .setEditable()
        .setRequired(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(36)
        .setEditable(),
    entitiesAndFields: new ArrayXMLField('entitiesAndFields', 'Entities And Fields')
        .setMinApi(36)
        .setEditable()
        .addField('entityName', new StringXMLField('entityName', 'Entity Name')
            .setEditable()
            .setRequired()
        )
        .addField('fieldName', new StringXMLField('fieldName', 'Field Name')
            .setEditable()
        )
        .addField('keywordList', new StringXMLField('keywordList', 'Keyword List')
            .setEditable()
            .setMetadataType(MetadataTypes.KEYWORD_LIST)
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(36)
        .setEditable()
        .setRequired(),
    notifyLimit: new IntegerXMLField('notifyLimit', 'Notify Limit')
        .setMinApi(39)
        .setEditable(),
    userCriteria: new StringXMLField('userCriteria', 'User Criteria')
        .setMinApi(39)
        .setEditable(),
    userMessage: new StringXMLField('userMessage', 'User Message')
        .setMinApi(36)
        .setEditable(),
}