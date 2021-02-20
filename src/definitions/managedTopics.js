const { StringXMLField, ObjectXMLField, IntegerXMLField } = require('../factory/xmlFactory');

module.exports = {
    ManagedTopic: new ObjectXMLField('ManagedTopic', 'Managed Topic')
        .setMinApi()
        .setEditable()
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
        )
        .addField('managedTopicType', new StringXMLField('managedTopicType', 'Managed Topic Type')
            .setEditable()
        )
        .addField('topicDescription', new StringXMLField('topicDescription', 'Topic Description')
            .setEditable()
        )
        .addField('parentName', new StringXMLField('parentName', 'Parent Name')
            .setEditable()
        )
        .addField('position', new IntegerXMLField('position', 'Position')
            .setEditable()
            .setMinValue(0)
            .setMaxValue(24)
        )
}