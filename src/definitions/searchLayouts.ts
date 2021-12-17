import { ArrayXMLField, MetadataTypes } from '@aurahelper/core';

export const SearchLayout = {
    customTabListAdditionalFields: new ArrayXMLField('customTabListAdditionalFields', 'Custom Tab List Additional Fields')
        .setMinApi(14)
        .setEditable(),
    excludedStandardButtons: new ArrayXMLField('excludedStandardButtons', 'Excluded Standard Buttons')
        .setMinApi(14)
        .setEditable(),
    listViewButtons: new ArrayXMLField('listViewButtons', 'List View Buttons')
        .setMinApi(14)
        .setEditable(),
    lookupDialogsAdditionalFields: new ArrayXMLField('lookupDialogsAdditionalFields', 'Lookup Dialogs Additional Fields')
        .setMinApi(14)
        .setEditable(),
    lookupFilterFields: new ArrayXMLField('lookupFilterFields', 'Lookup Filter Fields')
        .setMinApi(14)
        .setEditable(),
    lookupPhoneDialogsAdditionalFields: new ArrayXMLField('lookupPhoneDialogsAdditionalFields', 'Lookup Phone Dialogs Additional Fields')
        .setMinApi(14)
        .setEditable(),
    massQuickActions: new ArrayXMLField('massQuickActions', 'Mass Quick Actions')
        .setMinApi(14)
        .setEditable(),
    searchFilterFields: new ArrayXMLField('searchFilterFields', 'Search Filter Fields')
        .setMinApi(14)
        .setEditable(),
    searchResultsAdditionalFields: new ArrayXMLField('searchResultsAdditionalFields', 'Search Results Additional Fields')
        .setMinApi(14)
        .setEditable(),
    searchResultsCustomButtons: new ArrayXMLField('searchResultsCustomButtons', 'Search Results Custom Buttons')
        .setMinApi(14)
        .setEditable(),
};