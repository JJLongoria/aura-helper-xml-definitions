const { ArrayXMLField } = require('@ah/core').Types;


module.exports = {
    testClassName: new ArrayXMLField('testClassName', 'Test Class Name')
        .setMinApi(38)
        .setEditable()
}