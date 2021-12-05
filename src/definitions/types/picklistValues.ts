import { ArrayXMLField,  StringXMLField, BooleanXMLField } from '@aurahelper/core';

export function picklistValues(picklistName: string, picklistLabel: string, minApi?: number | string) {
    return new ArrayXMLField(picklistName, picklistLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('fullName')
        .addField('fullName', new StringXMLField('fullName', 'Full Name')
            .setEditable()
            .addMatchPattern(/^[^\d\s_](\w| )+$/)
            .setUnique()
        )
        .addField('controllingFieldValues', new StringXMLField('controllingFieldValues', 'Controlling Field Values')
            .setEditable()
        )
        .addField('default', new BooleanXMLField('default', 'Default')
            .setEditable()
        )
} 