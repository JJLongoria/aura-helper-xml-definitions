import { StringXMLField, BooleanXMLField, XMLDependencyField, DataValues, EnumXMLField } from '@aurahelper/core';

export const LiveChatSensitiveDataRule = {
    actionType: new EnumXMLField('actionType', 'Action Type')
        .setMinApi(35)
        .setEditable()
        .setRequired()
        .addEnumValue('Remove', 'Remove')
        .addEnumValue('Replace', 'Replace'),
    description: new StringXMLField('description', 'Description')
        .setMinApi(35)
        .setEditable(),
    enforceOn: new EnumXMLField('enforceOn', 'Enforce On')
        .setMinApi(35)
        .setEditable()
        .setRequired()
        .addEnumValue('Rule enforced on Agent', '1')
        .addEnumValue('Rule enforced on Visitor', '2')
        .addEnumValue('Rule enforced on Agent and Visitor', '3')
        .addEnumValue('Rule enforced on Supervisor', '4')
        .addEnumValue('Rule enforced on Agent and Supervisor', '5')
        .addEnumValue('Rule enforced on Visitor and Supervisor', '6')
        .addEnumValue('Rule enforced on Agent, Visitor, and Supervisor', '7'),
    isEnabled: new BooleanXMLField('isEnabled', 'Is Enabled')
        .setMinApi(35)
        .setEditable()
        .setRequired()
        .setDefaultValue(false),
    pattern: new StringXMLField('pattern', 'Pattern')
        .setMinApi(35)
        .setEditable()
        .setRequired(),
    replacement: new StringXMLField('replacement', 'Replacement')
        .setMinApi(35)
        .setEditable()
        .addDependencyField(new XMLDependencyField('actionType', 'Replace', DataValues.AVAILABLE)),

}