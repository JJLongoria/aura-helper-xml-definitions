# **Aura Helper XML Definitions Library**
Libraries to get any Salesforce Metadata XML Files Definition to process files Metadata files properly. Yoy can get all Raw definitions, a Rat definition for a specific type or get All or specific definitions for a specific api version. For example, yo can get all Salesforce XML Definitions for API 45.0 or get the Custom Object XML File Definition for API 35.0.

The **difference** between the **XML definition** and the **raw XML definition** is that the raw definition *is not processed*, it returns the entire XML information. The XML definitions return the XML definition processed for a *specific API version*, omitting everything that does not correspond to the indicated version.

**Support up to API 51.0**

## **Usage**

**Get the Profile XML definition for API 45.0**

Return the XML definition for the selected type and API version. If the type exists, but is not available in the selected API, return an empty object. If type not exists, return undefined.

    const XMLDefinitions = require('@ah/xml-definitions');

    const ProfileDefinition = XMLDefinitions.getDefinition('Profile', 45);


**Get All XML Definitions for API 43.0**

Return an Object with all XML definitions for the selected API version. The object has the Type as key and the XML definition as value. If not exists any definition for the selected API return an empty object

    const XMLDefinitions = require('@ah/xml-definitions');

    const AllDefinitions = XMLDefinitions.getAllDefinitions(43);
    const CustomObjectDefinition = AllDefinitions.CustomObject;
    const SkilDefinition = AllDefinitions['Skill'];

**Get the ConnectedApp XML raw definition**

Return the XML raw definition for the selected type. If type not exists, return undefined.

    const XMLDefinitions = require('@ah/xml-definitions');

    const ProfileDefinition = XMLDefinitions.getRawDefinition('ConnectedApp');

**Get All XML raw definitions**

Return an Object with all XML raw definitions. The object has the Type as key and the XML definition as value.

    const XMLDefinitions = require('@ah/xml-definitions');

    const AllRawDefinitions = XMLDefinitions.getAllRawDefinitions();
    const CustomFieldRawDefinition = AllRawDefinitions.CustomField;
    const WorkflowRawDefinition = AllRawDefinitions['Workflow'];

**Rsolve recursive definition reference**

Resolve the recursive definition references on an object like Bot Steps on Bot XML Definition

    const XMLDefinitions = require('@ah/xml-definitions');

    const BotDefinition = XMLDefinitions.getDefinition('Bot', 50);
    ...
    ...
    ...
    if(botStep.definitionRef){
        let botStepResolvedDefinition = XMLDefinitions.resolveDefinitionReference(BotDefinition, botStep);
    }
    

## **XML Factory**

This library provide the data types to process properly the files. This classes are store in the object XML Factory

**Example**

    const XMLDefinitions = require('@ah/xml-definitions');
    const XMLFactory = XMLDefinitions.XMLFactory;
    const ArrayXMLField = XMLFactory.ArrayXMLField;

    let arrayField = new ArrayXMLField('apiName', 'label');

### **Available Types**

- **StringXMLField**: Class to create String XML fields on XML definitions

- **BooleanXMLField**: Class to create Boolean XML fields on XML definitions

- **IntegerXMLField**: Class to create Integer XML fields on XML definitions

- **DoubleXMLField**: Class to create Double XML fields on XML definitions

- **DateTimeXMLField**: Class to create DateTime XML fields on XML definitions

- **TimeXMLField**: Class to create Double XML fields on XML definitions

- **EnumXMLField**: Class to create Enumeration XML fields on XML definitions

- **ArrayXMLField**: Class to create Array XML fields on XML definitions

- **ObjectXMLField**: Class to create Object XML fields on XML definitions

- **XMLDataControlledField**: Class to create an object to control other field values depending other field values

- **XMLDependencyField**: Class to create an object to control field dependencies. Available values on API, or if other field have specific values...

    

