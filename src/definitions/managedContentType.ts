import { StringXMLField, BooleanXMLField, ArrayXMLField, EnumXMLField } from '@aurahelper/core';

export const ManagedContentType = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(47)
        .setEditable(),
    developerName: new StringXMLField('developerName', 'Developer Name')
        .setMinApi(47)
        .setEditable()
        .setRequired()
        .setUnique(),
    managedContentNodeTypes: new ArrayXMLField('managedContentNodeTypes', 'Managed Content Node Types')
        .setMinApi(47)
        .setEditable()
        .setFieldKey('nodeName')
        .setSortOrder(undefined)
        .addField('helpText', new StringXMLField('helpText', 'Help Text')
            .setEditable()
        )
        .addField('isLocalizable', new BooleanXMLField('isLocalizable', 'Is Localizable')
            .setEditable()
            .setDefaultValue(false)
        )
        .addField('isRequired', new BooleanXMLField('isRequired', 'Is Required')
            .setEditable()
            .setDefaultValue(false)
        )
        .addField('nodeLabel', new StringXMLField('nodeLabel', 'Node Label')
            .setEditable()
            .setRequired()
        )
        .addField('nodeName', new StringXMLField('nodeName', 'Node Name')
            .setEditable()
            .setRequired()
            .setMaxLength(100)
        )
        .addField('nodeLabel', new EnumXMLField('nodeLabel', 'Node Label')
            .setEditable()
            .setRequired()
            .addEnumValue('Text', 'TEXT')
            .addEnumValue('Multi Line Text', 'MTEXT')
            .addEnumValue('Rich Text Mode', 'RTE')
            .addEnumValue('Image Mode', 'IMG')
            .addEnumValue('URL', 'URL')
            .addEnumValue('Date', 'DATE')
            .addEnumValue('Date Time', 'DATETIME')
            .addEnumValue('Name Field', 'NAMEFIELD')
        )
        .addField('placeholderText', new StringXMLField('placeholderText', 'Placeholder Text')
            .setMinApi()
            .setEditable()
        ),
    masterLabel: new StringXMLField('masterLabel', 'MasteLabel')
        .setMinApi(47)
        .setEditable()
        .setRequired(),
};