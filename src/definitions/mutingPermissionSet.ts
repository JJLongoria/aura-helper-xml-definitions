import { StringXMLField, BooleanXMLField, ArrayXMLField, DataValues, MetadataTypes, EnumXMLField, XMLDataControlledField } from '@aurahelper/core';

export const MutingPermissionSet = {
    label: new StringXMLField('label', 'label'),
    userLicense: new StringXMLField('userLicense', 'User License')
        .setMinApi(46),
    license: new StringXMLField('license', 'License')
        .setMinApi(46),
    description: new StringXMLField('description', 'Description')
        .setMinApi(46)
        .setEditable(),
    hasActivationRequired: new BooleanXMLField('hasActivationRequired', 'Has Activation Required')
        .setMinApi(46),
    applicationVisibilities: new ArrayXMLField('applicationVisibilities', 'Application ')
        .setMinApi(46)
        .setEditable()
        .setMergeable()
        .setFieldKey('application')
        .addField('application', new StringXMLField('application', 'Application')
            .setUnique()
            .setMetadataType(MetadataTypes.CUSTOM_APPLICATION)
        )
        .addField('visible', new BooleanXMLField('visible', 'Visible')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('default', new BooleanXMLField('default', 'Default')
            .setEditable()
            .setUnique()
            .addControlledField(new XMLDataControlledField('visible', true, true))
        ),
    classAccesses: new ArrayXMLField('classAccesses', 'Class Accesses')
        .setMinApi(46)
        .setEditable()
        .setMergeable()
        .setFieldKey('apexClass')
        .addField('apexClass', new StringXMLField('apexClass', 'Apex Class')
            .setUnique()
            .setMetadataType(MetadataTypes.APEX_CLASS)
        )
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        ),
    customMetadataTypeAccesses: new ArrayXMLField('customMetadataTypeAccesses', 'Custom Metadata Type Accesses')
        .setMinApi(46)
        .setEditable()
        .setFieldKey('name')
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setUnique()
            .setMetadataType(MetadataTypes.CUSTOM_METADATA)
        ),
    customPermissions: new ArrayXMLField('customPermissions', 'Custom Permissions')
        .setMinApi(46)
        .setEditable()
        .setFieldKey('name')
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setUnique()
            .setMetadataType(MetadataTypes.CUSTOM_PERMISSION)
        ),
    customSettingAccesses: new ArrayXMLField('customSettingAccesses', 'Custom Settings Accesses')
        .setMinApi(46)
        .setEditable()
        .setFieldKey('name')
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setUnique()
            .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        ),
    externalDataSourceAccesses: new ArrayXMLField('externalDataSourceAccesses', 'External Data Source Accesses')
        .setMinApi(46)
        .setEditable()
        .setFieldKey('externalDataSource')
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('externalDataSource', new StringXMLField('externalDataSource', 'externalDataSource')
            .setUnique()
            .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        ),
    fieldPermissions: new ArrayXMLField('fieldPermissions', 'Field Permissions')
        .setMinApi(46)
        .setEditable()
        .setMergeable()
        .setFieldKey('field')
        .addField('readable', new BooleanXMLField('readable', 'Readable')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('field', new StringXMLField('field', 'Field')
            .setUnique()
            .setSeparator(DataValues.POINT)
            .setMetadataType(MetadataTypes.CUSTOM_FIELD)
        )
        .addField('editable', new BooleanXMLField('editable', 'Editable')
            .setEditable()
            .setDefaultValue(false)
            .addControlledField(new XMLDataControlledField('readable', true, true))
        ),
    flowAccesses: new ArrayXMLField('flowAccesses', 'Flow Accesses')
        .setMinApi(46)
        .setEditable()
        .setMergeable()
        .setFieldKey('flow')
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('flow', new StringXMLField('flow', 'Flow')
            .setUnique()
            .setMetadataType(MetadataTypes.FLOW)
        ),
    objectPermissions: new ArrayXMLField('objectPermissions', 'Object Permissions')
        .setMinApi(46)
        .setEditable()
        .setMergeable()
        .setFieldKey('object')
        .addField('allowRead', new BooleanXMLField('allowRead', 'Allow Read')
            .setEditable()
            .setDefaultValue(true)
            .addControlledField(new XMLDataControlledField('allowCreate', false, false))
            .addControlledField(new XMLDataControlledField('allowEdit', false, false))
            .addControlledField(new XMLDataControlledField('allowDelete', false, false))
            .addControlledField(new XMLDataControlledField('viewAllRecords', false, false))
            .addControlledField(new XMLDataControlledField('modifyAllRecords', false, false))
        )
        .addField('allowCreate', new BooleanXMLField('allowCreate', 'Allow Create')
            .setEditable()
            .setDefaultValue(true)
            .addControlledField(new XMLDataControlledField('allowRead', true, true))
        )
        .addField('allowEdit', new BooleanXMLField('allowEdit', 'Allow Edit')
            .setEditable()
            .addControlledField(new XMLDataControlledField('allowRead', true, true))
            .addControlledField(new XMLDataControlledField('allowDelete', false, false))
            .addControlledField(new XMLDataControlledField('modifyAllRecords', false, false))
        )
        .addField('allowDelete', new BooleanXMLField('allowDelete', 'Allow Delete')
            .setEditable()
            .addControlledField(new XMLDataControlledField('allowRead', true, true))
            .addControlledField(new XMLDataControlledField('allowEdit', true, true))
            .addControlledField(new XMLDataControlledField('modifyAllRecords', false, false))
        )
        .addField('object', new StringXMLField('object', 'Object')
            .setUnique()
            .setMetadataType(MetadataTypes.CUSTOM_OBJECT)
        )
        .addField('viewAllRecords', new BooleanXMLField('viewAllRecords', 'View All Records')
            .setEditable()
            .addControlledField(new XMLDataControlledField('allowRead', true, true))
            .addControlledField(new XMLDataControlledField('modifyAllRecords', false, false))
        )
        .addField('modifyAllRecords', new BooleanXMLField('modifyAllRecords', 'Modify All Records')
            .setEditable()
            .addControlledField(new XMLDataControlledField('allowRead', true, true))
            .addControlledField(new XMLDataControlledField('allowEdit', true, true))
            .addControlledField(new XMLDataControlledField('allowDelete', true, true))
            .addControlledField(new XMLDataControlledField('viewAllRecords', true, true))
        ),
    pageAccesses: new ArrayXMLField('pageAccesses', 'Visualforce Accesses')
        .setMinApi(46)
        .setEditable()
        .setMergeable()
        .setFieldKey('apexPage')
        .addField('apexPage', new StringXMLField('apexPage', 'Apex Page')
            .setUnique()
            .setMetadataType(MetadataTypes.APEX_PAGE)
        )
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        ),
    recordTypeVisibilities: new ArrayXMLField('recordTypeVisibilities', 'Record Type Visibilities')
        .setMinApi(46)
        .setEditable()
        .setFieldKey('recordType')
        .addField('default', new BooleanXMLField('default', 'Default')
            .setEditable()
            .setUnique()
            .setMetadataType(MetadataTypes.RECORD_TYPE)
        )
        .addField('personAccountDefault', new BooleanXMLField('personAccountDefault', 'Person Account Default')
            .setEditable()
            .setUnique()
        )
        .addField('recordType', new StringXMLField('recordType', 'Record Type')
            .setUnique()
            .setSeparator(DataValues.POINT)
        )
        .addField('visible', new BooleanXMLField('visible', 'Visible')
            .setEditable()
            .setDefaultValue(true)
        ),
    tabSettings: new ArrayXMLField('tabSettings', 'Tab Settings')
        .setMinApi(46)
        .setEditable()
        .setFieldKey('tab')
        .addField('tab', new StringXMLField('tab', 'Tab')
            .setUnique()
            .setMetadataType(MetadataTypes.CUSTOM_TAB)
        )
        .addField('visibility', new EnumXMLField('visibility', 'visibility')
            .setEditable()
            .setDefaultValue('Available')
            .addEnumValue('Available', 'Available')
            .addEnumValue('Visible', 'Visible')
            .addEnumValue('None', 'None')
        ),
    userPermissions: new ArrayXMLField('userPermissions', 'User Permissions')
        .setMinApi(46)
        .setEditable()
        .setFieldKey('name')
        .addField('enabled', new BooleanXMLField('enabled', 'Enabled')
            .setEditable()
            .setDefaultValue(true)
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setUnique()
        )
};