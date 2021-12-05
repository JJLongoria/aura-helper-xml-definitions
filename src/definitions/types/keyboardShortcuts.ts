import { ObjectXMLField, ArrayXMLField } from '@aurahelper/core';
import { customShortcut } from './customShortcut';
import { defaultShortcut } from './defaultShortcut';

export function keyboardShortcut(shortcutName: string, shortcutLabel: string, minApi?: number | string) {
    return new ObjectXMLField(shortcutName, shortcutLabel)
        .setEditable()
        .setMinApi(minApi)
        .setFieldKey('defaultShortcut')
        .setSortOrder(undefined)
        .addField('customShortcuts', customShortcut(ArrayXMLField, 'customShortcuts', 'Custom Shortcuts', 42))
        .addField('customShortcut', customShortcut(ObjectXMLField, 'customShortcut', 'Custom Shortcut', minApi, 41))
        .addField('defaultShortcuts', defaultShortcut(ArrayXMLField, 'defaultShortcuts', 'Default Shortcuts', 42))
        .addField('defaultShortcut', defaultShortcut(ObjectXMLField, 'defaultShortcut', 'Default Shortcut', minApi, 41))
}