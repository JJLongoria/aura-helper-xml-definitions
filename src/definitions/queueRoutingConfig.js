const { StringXMLField, BooleanXMLField, DoubleXMLField, IntegerXMLField, EnumXMLField } = require('../factory/xmlFactory');

module.exports = {
    capacityPercentage: new DoubleXMLField('capacityPercentage', 'Capacity Percentage')
        .setMinApi(44)
        .setEditable(),
    capacityWeight: new DoubleXMLField('capacityWeight', 'Capacity Weight')
        .setMinApi(44)
        .setEditable(),
    dropAdditionalSkillsTimeout: new IntegerXMLField('dropAdditionalSkillsTimeout', 'Drop Additional Skills Timeout')
        .setMinApi(44)
        .setEditable(),
    isAttributeBased: new BooleanXMLField('isAttributeBased', 'Is Attribute Based')
        .setMinApi(44)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(44)
        .setEditable()
        .setRequired(),
    pushTimeout: new IntegerXMLField('pushTimeout', 'Push Timeout')
        .setMinApi(44)
        .setEditable(),
    queueOverflowAssignee: new StringXMLField('queueOverflowAssignee', 'Queue Overflow Assignee')
        .setMinApi(44)
        .setEditable()
        .linkFieldToSObject('Queue'),
    routingModel: new EnumXMLField('routingModel', 'Routing Model')
        .setMinApi(44)
        .setEditable()
        .setRequired()
        .addEnumValue('Least Active', 'LEAST_ACTIVE')
        .addEnumValue('Most Available', 'MOST_AVAILABLE')
        .addEnumValue('External Routing', 'EXTERNAL_ROUTING'),
    routingPriority: new IntegerXMLField('routingPriority', 'Routing Priority')
        .setMinApi(44)
        .setEditable()
        .setRequired()
        .setMinValue(0),
    userOverflowAssignee: new StringXMLField('userOverflowAssignee', 'User Overflow Assignee')
        .setMinApi(44)
        .setEditable()
        .linkFieldToSObject('User', 'Username'),

}