const { StringXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField, XMLDependencyField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    areGuestUsersAllowed: new BooleanXMLField('areGuestUsersAllowed', 'Are Guest Users Allowed')
        .setMinApi(45)
        .setEditable(),
    authMethod: new EnumXMLField('authMethod', 'Auth Method')
        .setMinApi(43)
        .setEditable()
        .addEnumValue('Communities Login', 'CommunitiesLogin')
        .addEnumValue('Custom Login', 'CustomLogin'),
    customMinimizedComponent: new StringXMLField('customMinimizedComponent', 'Custom Minimized Component')
        .setMinApi(43)
        .setEditable(),
    deploymentType: new EnumXMLField('deploymentType', 'Deployment Type')
        .setMinApi(51)
        .setEditable()
        .addEnumValue('Mobile', 'Mobile')
        .addEnumValue('Web', 'Web'),
    embeddedServiceCustomComponents: new ArrayXMLField('embeddedServiceCustomComponents', 'Embedded Service Custom Components')
        .setMinApi(44)
        .setEditable()
        .setFieldKey('customComponent')
        .addField('customComponent', new StringXMLField('customComponent', 'Custom Component')
            .setEditable()
        )
        .addField('customComponentType', new EnumXMLField('customComponentType', 'Custom Component Type')
            .setEditable()
            .addEnumValue('LA Prechat', 'LA_Prechat')
            .addEnumValue('LA Minimized', 'LA_Minimized')
            .addEnumValue('LA PlainTextChatMessage', 'LA_PlainTextChatMessage')
        ),
    embeddedServiceCustomLabels: new ArrayXMLField('embeddedServiceCustomLabels', 'Embedded Service Custom Labels')
        .setMinApi(44)
        .setEditable()
        .addField('customLabel', new StringXMLField('customLabel', 'Custom Label')
            .setEditable()
            .setMetadataType(MetadataTypes.CUSTOM_LABEL)
        )
        .addField('feature', new EnumXMLField('feature', 'Feature')
            .setEditable()
            .addEnumValue('Base', 'Base')
            .addEnumValue('Field Service', 'FieldService')
            .addEnumValue('Flows', 'Flows')
            .addEnumValue('Live Agent', 'LiveAgent')
            .addEnumValue('Not In Use', 'NotInUse')
        )
        .addField('labelKey', new StringXMLField('labelKey', 'Label Key')
            .setEditable()
        ),
    embeddedServiceCustomizations: new ArrayXMLField('embeddedServiceCustomizations', 'Embedded Service Customizations')
        .setMinApi(50)
        .setEditable()
        .setFieldKey('customizationName')
        .addField('customizationName', new StringXMLField('customizationName', 'Customization Name')
            .setEditable()
            .setRequired()
        )
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
        )
        .addField('embeddedServiceResources', new ArrayXMLField('embeddedServiceResources', 'Embedded Service Resources')
            .setEditable()
            .setRequired()
            .setFieldKey('resource')
            .addField('resource', new StringXMLField('resource', 'Resource')
                .setEditable()
                .setRequired()
                .linkFieldToSObject('StaticResource')
            )
            .addField('resourceType', new EnumXMLField('resourceType', 'Resource Type')
                .setEditable()
                .setRequired()
                .setDefaultValue('ChatInvitation')
                .addEnumValue('Chat Invitation', 'ChatInvitation')
            )
        ),
    embeddedServiceFlowConfig: new ArrayXMLField('embeddedServiceFlowConfig', 'Embedded Service Flow Config')
        .setMinApi(45)
        .setEditable()
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setRequired()
        ),
    embeddedServiceFlows: new ArrayXMLField('embeddedServiceFlows', 'Embedded Service Flows')
        .setMinApi(45)
        .setEditable()
        .setFieldKey('flow')
        .addField('flow', new StringXMLField('flow', 'Flow')
            .setEditable()
            .setMetadataType(MetadataTypes.FLOW)
        )
        .addField('flowType', new EnumXMLField('flowType', 'Flow Type')
            .setEditable()
            .setRequired()
            .addEnumValue('FS Flow', 'FS_Flow')
            .addEnumValue('FS NewAppointment', 'FS_NewAppointment')
            .addEnumValue('FS ModifyAppointment', 'FS_ModifyAppointment')
            .addEnumValue('FS CancelAppointment', 'FS_CancelAppointment')
            .addEnumValue('LA Survey', 'LA_Survey')
        )
        .addField('isAuthenticationRequired', new BooleanXMLField('isAuthenticationRequired', 'Is Authentication Required')
            .setEditable()
            .addDependencyField(new XMLDependencyField('flowType', 'FS_Flow', true))
            .addDependencyField(new XMLDependencyField('flowType', ['FS_NewAppointment', 'FS_ModifyAppointment', 'FS_CancelAppointment', 'LA_Survey'], false))
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(37)
        .setEditable()
        .setRequired()
        .setUnique(),
    shouldHideAuthDialog: new BooleanXMLField('shouldHideAuthDialog', 'Should Hide Auth Dialog')
        .setMinApi(43)
        .setDefaultValue(false)
        .setEditable(),
    site: new StringXMLField('site', 'Site')
        .setMinApi(37)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.CUSTOM_SITE)

}