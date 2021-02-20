const { StringXMLField, ObjectXMLField, ArrayXMLField, EnumXMLField } = require('../factory/xmlFactory');
const MetadataTypes = require('../values/metadataTypes');
const SharedTo = require('./sharedTo');
const FilterItemType = require('./types/filterItem');

module.exports = {
    sharingCriteriaRules: new ArrayXMLField('sharingCriteriaRules', 'Sharing Criteria Rules')
        .setMinApi(33)
        .setEditable()
        .setMetadataType(MetadataTypes.SHARING_CRITERIA_RULE)
        .addField('accessLevel', new EnumXMLField('accessLevel', 'Access Level')
            .setEditable()
            .setRequired()
            .addEnumValue('Read', 'Read')
            .addEnumValue('Edit', 'Edit')
            .addEnumValue('None', 'None')
        )
        .addField('accountSettings', new ArrayXMLField('accountSettings', 'Account Settings')
            .setEditable()
            .addField('caseAccessLevel', new EnumXMLField('caseAccessLevel', 'Case Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
            .addField('contactAccessLevel', new EnumXMLField('contactAccessLevel', 'Contact Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
            .addField('opportunityAccessLevel', new EnumXMLField('opportunityAccessLevel', 'Opportunity Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
        )
        .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
            .setEditable()
        )
        .addField('criteriaItems', FilterItemType('criteriaItems', 'Criteria Items', 33))
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
            .setMaxLength(1000)
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
        )
        .addField('sharedTo', new ObjectXMLField('sharedTo', 'Shared To')
            .setEditable()
            .setRequired()
            .setFields(SharedTo)
        ),
    sharingGuestRules: new ArrayXMLField('sharingGuestRules', 'Sharing Guest Rules')
        .setMinApi(47)
        .setEditable()
        .setMetadataType(MetadataTypes.SHARING_GUEST_RULE)
        .addField('accessLevel', new EnumXMLField('accessLevel', 'Access Level')
            .setEditable()
            .setRequired()
            .setDefaultValue('Read')
            .addEnumValue('Read', 'Read')
        )
        .addField('accountSettings', new ArrayXMLField('accountSettings', 'Account Settings')
            .setEditable()
            .addField('caseAccessLevel', new EnumXMLField('caseAccessLevel', 'Case Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
            .addField('contactAccessLevel', new EnumXMLField('contactAccessLevel', 'Contact Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
            .addField('opportunityAccessLevel', new EnumXMLField('opportunityAccessLevel', 'Opportunity Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
        )
        .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
            .setMinApi(48)
            .setEditable()
        )
        .addField('criteriaItems', FilterItemType('criteriaItems', 'Criteria Items', 48))
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
            .setMaxLength(1000)
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
        )
        .addField('sharedTo', new ObjectXMLField('sharedTo', 'Shared To')
            .setEditable()
            .setRequired()
            .setFields(SharedTo)
        ),
    sharingOwnerRules: new ArrayXMLField('sharingOwnerRules', 'Sharing Owner Rules')
        .setMinApi(33)
        .setEditable()
        .setMetadataType(MetadataTypes.SHARING_OWNER_RULE)
        .addField('accessLevel', new EnumXMLField('accessLevel', 'Access Level')
            .setEditable()
            .setRequired()
            .addEnumValue('Read', 'Read')
            .addEnumValue('Edit', 'Edit')
            .addEnumValue('None', 'None')
        )
        .addField('accountSettings', new ArrayXMLField('accountSettings', 'Account Settings')
            .setEditable()
            .addField('caseAccessLevel', new EnumXMLField('caseAccessLevel', 'Case Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
            .addField('contactAccessLevel', new EnumXMLField('contactAccessLevel', 'Contact Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
            .addField('opportunityAccessLevel', new EnumXMLField('opportunityAccessLevel', 'Opportunity Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
        )
        .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
            .setEditable()
        )
        .addField('criteriaItems', FilterItemType('criteriaItems', 'Criteria Items', 33))
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
            .setMaxLength(1000)
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
        )
        .addField('sharedTo', new ObjectXMLField('sharedTo', 'Shared To')
            .setEditable()
            .setRequired()
            .setFields(SharedTo)
        )
        .addField('sharedFrom', new ObjectXMLField('sharedFrom', 'Shared From')
            .setEditable()
            .setRequired()
            .setFields(SharedTo)
        ),
    sharingTerritoryRules: new ArrayXMLField('sharingTerritoryRules', 'Sharing Territory Rules')
        .setMinApi(33)
        .setEditable()
        .setMetadataType(MetadataTypes.SHARING_TERRITORY_RULE)
        .addField('accessLevel', new EnumXMLField('accessLevel', 'Access Level')
            .setEditable()
            .setRequired()
            .addEnumValue('Read', 'Read')
            .addEnumValue('Edit', 'Edit')
            .addEnumValue('None', 'None')
        )
        .addField('accountSettings', new ArrayXMLField('accountSettings', 'Account Settings')
            .setEditable()
            .addField('caseAccessLevel', new EnumXMLField('caseAccessLevel', 'Case Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
            .addField('contactAccessLevel', new EnumXMLField('contactAccessLevel', 'Contact Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
            .addField('opportunityAccessLevel', new EnumXMLField('opportunityAccessLevel', 'Opportunity Access Level')
                .setEditable()
                .setRequired()
                .addEnumValue('Read', 'Read')
                .addEnumValue('Edit', 'Edit')
                .addEnumValue('None', 'None')
            )
        )
        .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
            .setEditable()
        )
        .addField('criteriaItems', FilterItemType('criteriaItems', 'Criteria Items', 33))
        .addField('description', new StringXMLField('description', 'Description')
            .setEditable()
            .setMaxLength(1000)
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
            .setRequired()
        )
        .addField('sharedTo', new ObjectXMLField('sharedTo', 'Shared To')
            .setEditable()
            .setRequired()
            .setFields(SharedTo)
        )
        .addField('sharedFrom', new ObjectXMLField('sharedFrom', 'Shared From')
            .setEditable()
            .setRequired()
            .setFields(SharedTo)
        )
}