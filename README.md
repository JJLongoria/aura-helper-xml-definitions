# **Aura Helper Metadata Types Libraries**
Libraries to get any Salesforce Metadata XML Files Definition to process files Metadata files properly. Yoy can get all Raw definitions, a Rat definition for a specific type or get All or specific definitions for a specific api version. For example, yo can get all Salesforce XML Definitions for API 45.0 or get thhe Custom Object XML File Definition for API 35.0.

The difference between the XML definition and the raw XML definition is that the raw definition is not processed, it returns the entire XML information. The XML definitions return the XML definition processed for a specific API version, omitting everything that does not correspond to the indicated version.

**Support up to API 51.0**

## **Usage**

**Get the Profile XML definition for API 45.0**

    const XMLDefinitions = require('@ah/xml-definitions');

    const ProfileDefinition = XMLDefinitions.getDefinition('Profile', 45);

**Get All XML Definitions for API 43.0**

    const XMLDefinitions = require('@ah/xml-definitions');

    const AllDefinitions = XMLDefinitions.getAllDefinitions(43);
    const CustomObjectDefinition = AllDefinitions.CustomObject;
    const SkilDefinition = AllDefinitions['Skill'];

**Get the ConnectedApp XML raw definition**

    const XMLDefinitions = require('@ah/xml-definitions');

    const ProfileDefinition = XMLDefinitions.getRawDefinition('ConnectedApp');

**Get the all XML raw definition**

    const XMLDefinitions = require('@ah/xml-definitions');

    const AllRawDefinitions = XMLDefinitions.getAllRawDefinitions();
    const CustomFieldRawDefinition = AllRawDefinitions.CustomField;
    const WorkflowRawDefinition = AllRawDefinitions['Workflow'];

