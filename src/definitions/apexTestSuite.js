const { ArrayXMLField } = require('../factory/xmlFactory');


module.exports = {
    testClassName: new ArrayXMLField('testClassName', 'Test Class Name')
        .setMinApi(38)
        .setEditable()
}