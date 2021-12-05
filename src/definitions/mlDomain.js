import { StringXMLField } from '@aurahelper/core';

export const MlDomain = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(43)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(43)
        .setEditable(),
    mlIntents: MLIntentType('mlIntents', 'Machine Learning Intents'),
    mlSlotClasses: MLSlotType('mlSlotClasses', 'Machine Slot Classes'),
}