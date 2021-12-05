import { StringXMLField, BooleanXMLField, ArrayXMLField, XMLDependencyField, DataValues, MetadataTypes, EnumXMLField, IntegerXMLField, DoubleXMLField, ObjectXMLField } from '@aurahelper/core';

export const ObjectSourceTargetMap = {
    creationType: new StringXMLField('creationType', 'Creation Type')
        .setMinApi(51)
        .setEditable(),
    fieldSourceTargetMaps: new ObjectXMLField('fieldSourceTargetMaps', 'Field Source Target Maps')
        .setMinApi(51)
        .setEditable()
        .addField('creationType', new StringXMLField('creationType', 'Creation Type')
            .setEditable()
        )
        .addField('isSourceFormula', new BooleanXMLField('isSourceFormula', 'Is Source Formula')
            .setEditable()
        )
        .addField('sourceField', new StringXMLField('sourceField', 'Source Field')
            .setEditable()
        )
        .addField('sourceFormula', new StringXMLField('sourceFormula', 'Source Formula')
            .setEditable()
        )
        .addField('targetField', new StringXMLField('targetField', 'Target Field')
            .setEditable()
        ),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    sequenceNbr: new IntegerXMLField('sequenceNbr', 'Sequence Nbr')
        .setMinApi(51)
        .setEditable(),
    sourceObjectName: new StringXMLField('sourceObjectName', 'Source Object Name')
        .setMinApi(51)
        .setEditable(),
    targetObjectName: new StringXMLField('targetObjectName', 'Target Object Name')
        .setMinApi(51)
        .setEditable()
}