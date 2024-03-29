import { StringXMLField, BooleanXMLField, ArrayXMLField, MetadataTypes, EnumXMLField, IntegerXMLField } from '@aurahelper/core';

export const CleanDataService = {
    cleanRules: new ArrayXMLField('cleanRules', 'Clean Rules')
        .setMinApi(51)
        .setEditable()
        .setRequired()
        .setFieldKey('developerName')
        .addField('bulkEnabled', new BooleanXMLField('bulkEnabled', 'Bulk Enabled')
            .setEditable()
            .setRequired()
        )
        .addField('bypassTriggers', new BooleanXMLField('bypassTriggers', 'Bypass Triggers')
            .setEditable()
            .setRequired()
        )
        .addField('bypassWorkflow', new BooleanXMLField('bypassWorkflow', 'Bypass Workflow')
            .setEditable()
            .setRequired()
        )
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
            .setRequired()
        )
        .addField('developerName', new StringXMLField('developerName', 'Developer Name')
            .setEditable()
            .setRequired()
            .setUnique()
        )
        .addField('fieldMappings', new ArrayXMLField('fieldMappings', 'Field Mappings')
            .setEditable()
            .setRequired()
            .setFieldKey('developerName')
            .addField('developerName', new StringXMLField('developerName', 'Developer Name')
                .setEditable()
                .setRequired()
                .setUnique()
            )
            .addField('fieldMappingRows', new ArrayXMLField('fieldMappingRows', 'Field Mapping Rows')
                .setEditable()
                .setRequired()
                .setFieldKey('fieldName')
                .addField('fieldName', new StringXMLField('fieldName', 'Field Name')
                    .setEditable()
                )
                .addField('fieldMappingFields', new ArrayXMLField('fieldMappingFields', 'Field Mapping Fields')
                    .setEditable()
                    .setRequired()
                    .setFieldKey('dataServiceField')
                    .addField('dataServiceField', new StringXMLField('dataServiceField', 'Data Service Field')
                        .setEditable()
                        .setRequired()
                    )
                    .addField('dataServiceObjectName', new StringXMLField('dataServiceObjectName', 'Data Service Object Name')
                        .setEditable()
                        .setRequired()
                    )
                    .addField('priority', new IntegerXMLField('priority', 'Priority')
                        .setEditable()
                        .setRequired()
                        .setMinValue(1)
                        .setMaxApi(100)
                    )
                )
                .addField('mappingOperation', new StringXMLField('mappingOperation', 'Mapping Operation')
                    .setEditable()
                )
                .addField('SObjectType', new StringXMLField('SObjectType', 'SObject Type')
                    .setEditable()
                    .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
                )
            )
            .addField('masterLabel', new StringXMLField('masterLabel', 'Master Label')
                .setEditable()
                .setRequired()
            )
            .addField('SObjectType', new StringXMLField('SObjectType', 'SObject Type')
                .setEditable()
                .setRequired()
                .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
            )
        )
        .addField('masterLabel', new StringXMLField('masterLabel', 'Master Label')
            .setEditable()
            .setRequired()
        )
        .addField('matchRule', new StringXMLField('matchRule', 'Match Rule')
            .setEditable()
            .setRequired()
        )
        .addField('sourceSobjectType', new StringXMLField('sourceSobjectType', 'Source SObject Type')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        )
        .addField('status', new EnumXMLField('status', 'Status')
            .setEditable()
            .setRequired()
            .addEnumValue('Active', 'Active')
            .addEnumValue('Inactive', 'Inactive')
        )
        .addField('targetSobjectType', new StringXMLField('targetSobjectType', 'Target SObject Type')
            .setEditable()
            .setRequired()
            .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        ),
    description: new StringXMLField('description', 'Description')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    matchEngine: new StringXMLField('matchEngine', 'Match Engine')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
};