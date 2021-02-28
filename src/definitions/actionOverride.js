const { StringXMLField, EnumXMLField, BooleanXMLField, XMLDependencyField } = require('@ah/core').Types;
const { DataValues } = require('@ah/core').Values;
module.exports = {
    actionName: new EnumXMLField('actionName', 'Action Name')
        .setMinApi(18)
        .setEditable()
        .setRequired()
        .addEnumValue('Accept', 'accept')
        .addEnumValue('Clone', 'clone')
        .addEnumValue('Delete', 'delete')
        .addEnumValue('Edit', 'edit')
        .addEnumValue('List', 'list')
        .addEnumValue('New', 'new')
        .addEnumValue('Tab', 'tab')
        .addEnumValue('View', 'view'),
    comment: new StringXMLField('comment', 'Comment')
        .setMinApi(18)
        .setEditable(),
    content: new StringXMLField('content', 'Content')
        .setMinApi(18)
        .setEditable()
        .addDependencyField(new XMLDependencyField('type', ['flexipage', 'lightningcomponent', 'scontrol', 'visualforce'], DataValues.NOT_NULL)),
    formFactor: new EnumXMLField('formFactor', 'Form Factor')
        .setMinApi(37)
        .setEditable()
        .addEnumValue('Large', 'Large')
        .addEnumValue('Medium', 'Medium')
        .addEnumValue('Small', 'Small')
        .addDependencyField(new XMLDependencyField('type', 'flexipage', 'Large')),
    skipRecordTypeSelect: new BooleanXMLField('skipRecordTypeSelect', 'Skip Record Type Select')
        .setMinApi(21)
        .setEditable(),
    type: new EnumXMLField('type', 'Type')
        .setMinApi(18)
        .setEditable()
        .addEnumValue('Default', 'default')
        .addEnumValue('Flexipage', 'flexipage')
        .addEnumValue('Lightning Component', 'lightningcomponent')
        .addEnumValue('S-Control', 'scontrol')
        .addEnumValue('Standard', 'standard')
        .addEnumValue('Visualforce', 'visualforce')
}