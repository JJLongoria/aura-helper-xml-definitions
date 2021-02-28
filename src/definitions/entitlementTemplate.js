const { StringXMLField, IntegerXMLField, BooleanXMLField } = require('@ah/core').Types;

module.exports = {
    businessHours: new StringXMLField('businessHours', 'Business Hours')
        .setMinApi(18)
        .setEditable(),
    casesPerEntitlement: new IntegerXMLField('casesPerEntitlement', 'Cases Per Entitlement')
        .setMinApi(18)
        .setEditable(),
    entitlementProcess: new StringXMLField('entitlementProcess', 'Entitlement Process')
        .setMinApi(18)
        .setEditable(),
    isPerIncident: new BooleanXMLField('isPerIncident', 'Is Per Incident')
        .setMinApi(18)
        .setEditable(),
    term: new IntegerXMLField('term', 'Term')
        .setMinApi(18)
        .setEditable(),
    type: new StringXMLField('type', 'Type')
        .setMinApi(18)
        .setEditable(),
}