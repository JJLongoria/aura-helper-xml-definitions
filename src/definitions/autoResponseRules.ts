import { StringXMLField, BooleanXMLField, ArrayXMLField, XMLDependencyField, DataValues, MetadataTypes } from '@aurahelper/core';
import { filterItem } from './types/filterItem';

export const AutoResponseRules = {
    autoresponseRule: new ArrayXMLField('autoresponseRule', 'Auto Response Rule')
        .setMinApi(27)
        .setEditable()
        .setFieldKey('fullName')
        .addField('active', new BooleanXMLField('active', 'Active')
            .setEditable()
            .setRequired()
        )
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .setRequired()
            .setUnique()
            .addMatchPattern(/^[^\d\s_](\w)+$/)
            .setMetadataType(MetadataTypes.AUTORESPONSE_RULE)
        )
        .addField('ruleEntry', new ArrayXMLField('ruleEntry', 'ruleEntry')
            .setEditable()
            .setRequired()
            .setFieldKey('senderEmail')
            .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
                .setEditable()
            )
            .addField('criteriaItems', filterItem('criteriaItems', 'Criteria Items')
                .addDependencyField(new XMLDependencyField('formula', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
            )
            .addField('formula', new StringXMLField('formula', 'Formula')
                .setEditable()
                .addDependencyField(new XMLDependencyField('criteriaItems', DataValues.NOT_NULL, DataValues.NOT_AVAILABLE))
            )
            .addField('replyToEmail', new StringXMLField('replyToEmail', 'Reply To Email')
                .setEditable()
            )
            .addField('senderEmail', new StringXMLField('senderEmail', 'Sender Email')
                .setEditable()
            )
            .addField('senderName', new StringXMLField('senderName', 'Sender Name')
                .setEditable()
            )
            .addField('template', new StringXMLField('template', 'Template')
                .setEditable()
            )
        )
}