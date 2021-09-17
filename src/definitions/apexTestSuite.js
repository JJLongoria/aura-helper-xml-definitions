const { ArrayXMLField } = require('@aurahelper/core').Types;


module.exports = {
    testClassName: new ArrayXMLField('testClassName', 'Test Class Name')
        .setMinApi(38)
        .setEditable()
}