const { StringXMLField, ObjectXMLField, ArrayXMLField, EnumXMLField, BooleanXMLField } = require('@ah/core').Types;

module.exports = {
    format: new EnumXMLField('format', 'Format')
        .setMinApi(38)
        .setEditable()
        .addEnumValue('Original', 'Original')
        .addEnumValue('Zipped Versions', 'ZippedVersions'),
    isVisibleByExternalUsers: new BooleanXMLField('isVisibleByExternalUsers', 'Is Visible By External Users')
        .setMinApi(44)
        .setEditable()
        .setDefaultValue(false),
    language: new StringXMLField('language', 'Language')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    originNetwork: new StringXMLField('originNetwork', 'Origin Network')
        .setMinApi(38)
        .setEditable()
        .setRequired(),
    relationships: new ArrayXMLField('', '')
        .setMinApi(38)
        .setEditable()
        .addField('organization', new ArrayXMLField('organization', 'Organization')
            .setEditable()
            .setFieldKey('name')
            .addField('access', new EnumXMLField('access', 'Access')
                .setEditable()
                .setRequired()
                .addEnumValue('Viewer', 'VIEWER')
                .addEnumValue('Collaborator', 'COLLABORATOR')
                .addEnumValue('Inferred', 'INFERRED')
            )
            .addField('name', new StringXMLField('name', 'Name')
                .setEditable()
            )
        ),
    versions: new ObjectXMLField('versions', 'Versions')
        .setMinApi(38)
        .setEditable()
        .setRequired()
        .addField('version', new ArrayXMLField('version', 'Version')
            .setEditable()
            .addField('number', new StringXMLField('number', 'Number')
                .setEditable()
                .setRequired()
            )
            .addField('pathOnClient', new StringXMLField('pathOnClient', 'Path On Client')
                .setEditable()
                .setRequired()
            )
            .addField('zipEntry', new StringXMLField('zipEntry', 'Zip Entry')
                .setEditable()
            )
        )
}