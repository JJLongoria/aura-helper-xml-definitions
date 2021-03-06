const { StringXMLField, ObjectXMLField, XMLDependencyField } = require('@ah/core').Types;
const { DataValues } = require('@ah/core').Values;
const FilterItemType = require('./filterItem');

module.exports = function (criteriaName, criteriaLabel, minApi) {
    return new ObjectXMLField(criteriaName, criteriaLabel)
        .setMinApi(minApi)
        .setEditable()
        .addField('booleanFilter', new StringXMLField('booleanFilter', 'Boolean Filter')
            .setEditable()
            .addDependencyField(new XMLDependencyField('formula', [DataValues.NOT_NULL], DataValues.NOT_AVAILABLE))
        )
        .addField('criteriaItems', FilterItemType('criteriaItems', 'Criteria Items')
        )
        .addField('formula', new StringXMLField('formula', 'Formula')
            .setEditable()
        );
} 