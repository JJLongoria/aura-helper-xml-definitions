const { ObjectXMLField, ArrayXMLField } = require('../../factory/xmlFactory');
const CustomShortcutType = require('./customShortcut');
const DefaultShortcutType = require('./defaultShortcut');

module.exports = function (shortcutName, shortcutLabel, minApi) {
    return new ObjectXMLField(shortcutName, shortcutLabel)
        .setEditable()
        .setMinApi(minApi)
        .addField('customShortcuts', CustomShortcutType(ArrayXMLField, 'customShortcuts', 'Custom Shortcuts', 42))
        .addField('customShortcut', CustomShortcutType(ObjectXMLField, 'customShortcut', 'Custom Shortcut', minApi, 41))
        .addField('defaultShortcuts', DefaultShortcutType(ArrayXMLField, 'defaultShortcuts', 'Default Shortcuts', 42))
        .addField('defaultShortcut', DefaultShortcutType(ObjectXMLField, 'defaultShortcut', 'Default Shortcut', minApi, 41))
}