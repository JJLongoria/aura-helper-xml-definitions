import { ArrayXMLField,  StringXMLField, IntegerXMLField } from '@aurahelper/core';

export function packageVersion(pkgVersionsName: string, pkgVersionsLabel: string, minApi?: number | string) {
    return new ArrayXMLField(pkgVersionsName, pkgVersionsLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('namespace')
        .addField('namespace', new StringXMLField('namespace', 'Namespace')
            .setEditable()
            .setRequired()
        )
        .addField('majorNumber', new IntegerXMLField('majorNumber', 'Major Number')
            .setEditable()
            .setRequired()
        )
        .addField('minorNumber', new IntegerXMLField('minorNumber', 'Minor Number')
            .setEditable()
            .setRequired()
        );
} 