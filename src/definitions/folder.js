const { StringXMLField, ObjectXMLField, EnumXMLField } = require('@aurahelper/core').Types;
const SharedTo = require('./sharedTo');

module.exports = {
    accessType: new EnumXMLField('accessType', 'Access Type')
        .setMinApi(11)
        .setEditable()
        .setRequired()
        .addEnumValue('Shared', 'Shared')
        .addEnumValue('Public', 'Public')
        .addEnumValue('Public Internal', 'PublicInternal')
        .addEnumValue('Hidden', 'Hidden'),
    folderShares: new ObjectXMLField('folderShares', 'Folder Shares')
        .setMinApi(28)
        .setEditable()
        .setFieldKey('sharedTo')
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
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(11)
        .setEditable()
        .setRequired()
        .addMatchPattern(/^[^\d\s_](\w)+$/)
        .setUnique(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(11)
        .setEditable()
        .setRequired(),
    publicFolderAccess: new EnumXMLField('publicFolderAccess', 'Public Folder Access')
        .setMinApi(11)
        .setEditable()
        .setRequired()
        .addEnumValue('Read Only', 'ReadOnly')
        .addEnumValue('Read Write', 'ReadWrite'),
    sharedTo: new ObjectXMLField('sharedTo', 'Shared To')
        .setMinApi(11)
        .setEditable()
        .setFieldKey('allCustomerPortalUsers')
        .setSortOrder(undefined)
        .setFields(SharedTo)
}