import { StringXMLField, MetadataTypes, EnumXMLField, ObjectXMLField } from '@aurahelper/core';

export const WaveApplication = {
    assetIcon: new StringXMLField('assetIcon', 'Asset Icon')
        .setMinApi(37)
        .setEditable(),
    description: new StringXMLField('description', 'Description')
        .setMinApi(37)
        .setEditable(),
    folder: new StringXMLField('folder', 'Folder')
        .setMinApi(37)
        .setEditable()
        .setMetadataType(MetadataTypes.FOLDER),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(37)
        .setEditable()
        .setRequired(),
    shares: new ObjectXMLField('shares', 'Shares')
        .setMinApi(28)
        .setEditable()
        .setFieldKey('sharedTo')
        .setSortOrder(undefined)
        .addField('accessLevel', new EnumXMLField('accessLevel', 'Access Level')
            .setEditable()
            .setRequired()
            .addEnumValue('View', 'View')
            .addEnumValue('Edit All Contents', 'EditAllContents')
            .addEnumValue('Manage', 'Manage')
        )
        .addField('sharedTo', new StringXMLField('sharedTo', 'Shared To')
            .setEditable()
            .setRequired()
            .linkFieldToSObject('User', 'Username')
            .linkFieldToSObject('Queue', 'DeveloperName')
            .linkFieldToSObject('Role', 'Name')
        )
        .addField('sharedToType', new EnumXMLField('sharedToType', 'Shared To Type')
            .setEditable()
            .setRequired()
            .addEnumValue('Group', 'Group')
            .addEnumValue('Manager', 'Manager', 29)
            .addEnumValue('Manager And Subordinates Internal', 'ManagerAndSubordinatesInternal', 29)
            .addEnumValue('Role', 'Role')
            .addEnumValue('Role And Subordinates', 'RoleAndSubordinates')
            .addEnumValue('Role And Subordinates Internal', 'RoleAndSubordinatesInternal')
            .addEnumValue('Organization', 'Organization')
            .addEnumValue('Territory', 'Territory')
            .addEnumValue('Territory And Subordinates', 'TerritoryAndSubordinates')
            .addEnumValue('All PRM Users', 'AllPrmUsers')
            .addEnumValue('User', 'User')
            .addEnumValue('Partner User', 'PartnerUser')
            .addEnumValue('All Customer Success Portal Users', 'AllCspUsers')
            .addEnumValue('Customer Portal User', 'CustomerPortalUser')
            .addEnumValue('Portal Role', 'PortalRole')
            .addEnumValue('Portal Role And Subordinates', 'PortalRoleAndSubordinates')
        ),
    templateOrigin: new StringXMLField('templateOrigin', 'Template Origin')
        .setMinApi(37)
        .setEditable(),
    templateVersion: new StringXMLField('templateVersion', 'Template Version')
        .setMinApi(37)
        .setEditable(),

}