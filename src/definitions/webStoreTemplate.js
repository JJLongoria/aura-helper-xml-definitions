const { StringXMLField, IntegerXMLField, EnumXMLField, ArrayXMLField } = require('@ah/core').Types;
const { DataValues } = require('@ah/core').Values;

module.exports = {
    defaultCurrency: new StringXMLField('defaultCurrency', 'Default Currency')
        .setMinApi(49)
        .setEditable(),
    defaultLanguage: new EnumXMLField('defaultLanguage', 'Default Language')
        .setMinApi(49)
        .setEditable()
        .setEnumValues(DataValues.SF_LANGUAGES),
    description: new StringXMLField('description', 'Description')
        .setMinApi(49)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(49)
        .setEditable(),
    maxValuesPerFacet: new IntegerXMLField('maxValuesPerFacet', 'Max Values Per Facet')
        .setMinApi(49)
        .setEditable(),
    paginationSize: new IntegerXMLField('paginationSize', 'Pagination Size')
        .setMinApi(49)
        .setEditable(),
    pricingStrategy: new EnumXMLField('pricingStrategy', 'Pricing Strategy')
        .setMinApi(49)
        .setEditable()
        .addEnumValue('Lowest Price', 'LowestPrice')
        .addEnumValue('Priority', 'Priority'),
    supportedCurrencies: new StringXMLField('supportedCurrencies', 'Supported Currencies')
        .setMinApi(49)
        .setEditable(),
    supportedLanguages: new StringXMLField('supportedLanguages', 'Supported Languages')
        .setMinApi(49)
        .setEditable(),
    webStoreType: new ArrayXMLField('webStoreType', 'Web Store Type')
        .setMinApi(49)
        .setEditable()
        .addField('webStoreType', new EnumXMLField('webStoreType', 'Web Store Type')
            .setEditable()
            .setDefaultValue('B2B')
            .addEnumValue('B2B', 'B2B')
        ),
}