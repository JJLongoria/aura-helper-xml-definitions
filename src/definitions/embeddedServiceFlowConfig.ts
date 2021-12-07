import { BooleanXMLField } from '@aurahelper/core';

export const EmbeddedServiceFlowConfig = {
    enabled: new BooleanXMLField('enabled', 'Enabled')
        .setMinApi(45)
        .setEditable()
        .setDefaultValue(false)
};