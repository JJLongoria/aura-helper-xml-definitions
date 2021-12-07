import { StringXMLField, BooleanXMLField, ArrayXMLField, MetadataTypes, IntegerXMLField } from '@aurahelper/core';

export const WorkSkillRouting = {
    isActive: new BooleanXMLField('isActive', 'Is Active')
        .setMinApi(46)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(46)
        .setEditable()
        .setRequired(),
    relatedEntity: new StringXMLField('relatedEntity', 'Related Entity')
        .setMinApi(46)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_OBJECT),
    workSkillRoutingAttributes: new ArrayXMLField('workSkillRoutingAttributes', 'Work Skill Routing Attributes')
        .setMinApi(46)
        .setEditable()
        .setFieldKey('field')
        .addField('field', new StringXMLField('field', 'Field')
            .setEditable()
            .setRequired()
        )
        .addField('isAdditionalSkill', new BooleanXMLField('isAdditionalSkill', 'Is Additional Skill')
            .setEditable()
        )
        .addField('skill', new StringXMLField('skill', 'Skill')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.SKILL)
        )
        .addField('skillLevel', new IntegerXMLField('skillLevel', 'Skill Level')
            .setEditable()
            .setMinValue(0)
            .setMaxValue(10)
        )
        .addField('skillPriority', new IntegerXMLField('skillPriority', 'Skill Priority')
            .setMinApi(49)
            .setEditable()
            .setMinValue(0)
            .setMaxValue(10)
        )
        .addField('value', new StringXMLField('value', 'Value')
            .setEditable()
        )
};