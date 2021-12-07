import { ArrayXMLField } from '@aurahelper/core';


export const ApexTestSuite = {
    testClassName: new ArrayXMLField('testClassName', 'Test Class Name')
        .setMinApi(38)
        .setEditable()
};