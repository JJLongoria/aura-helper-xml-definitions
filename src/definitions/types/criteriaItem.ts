import { StringXMLField, ObjectXMLField, XMLDependencyField, DataValues } from '@aurahelper/core';
import { filterItem } from './filterItem';

export function criteriaItem(criteriaName: string, criteriaLabel: string, minApi?: number | string) {
    return new ObjectXMLField(criteriaName, criteriaLabel)
        .setMinApi(minApi)
        .setEditable()
        .setFieldKey('booleanFilter')
        .setSortOrder(undefined)
        .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
            .setEditable()
            .addDependencyField(new XMLDependencyField('formula', [DataValues.NOT_NULL], DataValues.NOT_AVAILABLE))
        )
        .addField('criteriaItems', filterItem('criteriaItems', 'Criteria Items')
        )
        .addField('formula', new StringXMLField('formula', 'Formula')
            .setEditable()
        );
} 