import { StringXMLField } from '@aurahelper/core';
import { mlIntent } from './types/mlIntent';
import { mlSlot } from './types/mlSlot';

export const MlDomain = {
    description: new StringXMLField('description', 'Description')
        .setMinApi(43)
        .setEditable(),
    label: new StringXMLField('label', 'Label')
        .setMinApi(43)
        .setEditable(),
    mlIntents: mlIntent('mlIntents', 'Machine Learning Intents'),
    mlSlotClasses: mlSlot('mlSlotClasses', 'Machine Slot Classes'),
};