import { StringXMLField, ArrayXMLField } from '@aurahelper/core';

export const SharedTo = {
    allCustomerPortalUsers: new StringXMLField('allCustomerPortalUsers', 'All Customer Portal Users')
        .setMinApi(24)
        .setEditable(),
    allInternalUsers: new StringXMLField('allInternalUsers', 'All Internal Users')
        .setMinApi(24)
        .setEditable(),
    allPartnerUsers: new StringXMLField('allPartnerUsers', 'All Partner Users')
        .setMinApi(24)
        .setEditable(),
    channelProgramGroup: new StringXMLField('channelProgramGroup', 'Channel Program Group')
        .setMinApi(41)
        .setEditable(),
    channelProgramGroups: new ArrayXMLField('channelProgramGroups', 'Channel Program Groups')
        .setMinApi(41)
        .setEditable(),
    group: new ArrayXMLField('group', 'Group')
        .setMinApi(22)
        .setEditable(),
    groups: new ArrayXMLField('groups', 'Groups')
        .setMinApi(17)
        .setMaxApi(21)
        .setEditable(),
    guestUser: new ArrayXMLField('guestUser', 'Guest User')
        .setMinApi(47)
        .setEditable(),
    managerSubordinates: new ArrayXMLField('managerSubordinates', 'Manager Subordinates')
        .setMinApi(24)
        .setEditable(),
    managers: new ArrayXMLField('managers', 'Managers')
        .setMinApi(24)
        .setEditable(),
    portalRole: new ArrayXMLField('portalRole', 'Portal Role')
        .setMinApi(24)
        .setEditable(),
    portalRoleandSubordinates: new ArrayXMLField('portalRoleandSubordinates', 'Portal Role And Subordinates')
        .setMinApi(24)
        .setEditable(),
    role: new ArrayXMLField('role', 'Role')
        .setMinApi(22)
        .setEditable(),
    roles: new ArrayXMLField('roles', 'Roles')
        .setMinApi(17)
        .setMaxApi(21)
        .setEditable(),
    roleAndSubordinates: new ArrayXMLField('roleAndSubordinates', 'Role And Subordinates')
        .setMinApi(22)
        .setEditable(),
    rolesAndSubordinates: new ArrayXMLField('rolesAndSubordinates', 'Roles And Subordinates')
        .setMinApi(17)
        .setMaxApi(21)
        .setEditable(),
    roleAndSubordinatesInternal: new ArrayXMLField('roleAndSubordinatesInternal', 'Role And Subordinates Internal')
        .setMinApi(22)
        .setEditable(),
    territories: new ArrayXMLField('territories', 'Territories')
        .setMinApi(17)
        .setMaxApi(21)
        .setEditable(),
    territoriesAndSubordinates: new ArrayXMLField('territoriesAndSubordinates', 'Territories And Subordinates')
        .setMinApi(17)
        .setMaxApi(21)
        .setEditable(),
    territory: new ArrayXMLField('territory', 'Territory')
        .setMinApi(22)
        .setEditable(),
    territoryAndSubordinates: new ArrayXMLField('territoryAndSubordinates', 'Territory And Subordinates')
        .setMinApi(22)
        .setEditable(),
    queue: new ArrayXMLField('queue', 'Queue')
        .setMinApi(24)
        .setEditable(),
};