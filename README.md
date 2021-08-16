# **Aura Helper XML Definitions Module**
Module to get any Salesforce Metadata XML Files Definition to process Metadata files properly. Yoy can get all Raw definitions, a Raw definition for a specific type or get All or specific definitions for a specific api version. For example, yo can get all Salesforce XML Definitions for API 45.0 or get the Custom Object XML File Definition for API 35.0.

The **difference** between the **XML definition** and the **raw XML definition** is that the raw definition *is not processed*, it returns the entire XML information. The XML definitions return the XML definition processed for a *specific API version*, omitting everything that does not correspond to the indicated version.

### **Support up to API 51.0**

# [**XMLDefinitions Class**](#xmldefinitions-class)
Class with static methods to get the XML Definitions for one Metadata Type or get all XML Definitions for all types and specific Salesforce API Version. Also you can get a XML Raw definitions and Resolve Recursive definitions on some files. 

# [**Methods**](#xmldefinitions-methods)
  - [**getDefinition(type, apiVersion)**](#getdefinitiontype-apiversion)

    Method to get the Metadata Type's XML definition for an API Version.

  - [**getRawDefinition(type)**](#getrawdefinitiontype)
 
    Method to get the Metadata Type's XML RAW definition

  - [**getAllDefinitions(apiVersion)**](#getalldefinitionsapiversion)
  
    Method to get all XML Definitions for all Metadata Types for an specific API Version

  - [**getAllRawDefinitions()**](#getallrawdefinitions)

    Method to get all XML RAW Definitions for all Metadata Types
    
  - [**resolveDefinitionReference(xmlDefinition, subFieldDefinition)**](#resolvedefinitionreferencexmldefinition-subfielddefinition)

    Method to resolve the recursive reference from some XML Definition files

---

## [**getDefinition(type, apiVersion)**](#getdefinitiontype-apiversion)
Method to get the Metadata Type's XML definition for an API Version.

### **Parameters:**
  - **type**: Metadata Type API Name to get the XML definition
    - String 
  - **apiVersion**: API Version number to get the version definition
    - String | Number
   
### **Return:**
Return the XML definition for the selected type and API version. If the type exists, but is not available in the selected API, return an empty object. If type not exists, return undefined.
- Object
    
### **Examples:**
**Get the Profile XML definition for API 45.0**

    const XMLDefinitions = require('@ah/xml-definitions');

    const ProfileDefinition = XMLDefinitions.getDefinition('Profile', 45);
    console.log(ProfileDefinition);

**Get the CustomObject XML definition for API 33.0**

    const XMLDefinitions = require('@ah/xml-definitions');

    const CustomObjectDefinition = XMLDefinitions.getDefinition('CustomObject', 33);
    console.log(CustomObjectDefinition);    
---
## [**getRawDefinition(type)**](#getrawdefinitiontype)
Method to get the Metadata Type's XML RAW definition

### **Parameters:**
  - **type**: Metadata Type API Name to get the XML definition
      - String 
### **Return:**
Return the XML raw definition for the selected type. If type not exists, return undefined
- Object

### **Examples:**
**Get the ConnectedApp XML raw definition**

    const XMLDefinitions = require('@ah/xml-definitions');

    const ConnectedAppDefinition = XMLDefinitions.getRawDefinition('ConnectedApp');
    console.log(ConnectedAppDefinition);

**Get the CustomField XML raw definition**

    const XMLDefinitions = require('@ah/xml-definitions');

    const CustomFieldDefinition = XMLDefinitions.getRawDefinition('CustomField');
    console.log(CustomFieldDefinition);

---
## [**getAllDefinitions(apiVersion)**](#getalldefinitionsapiversion)
Method to get all XML Definitions for all Metadata Types for an specific API Version.

### **Parameters:**
  - **apiVersion**: API Version number to get the version definition
    - String | Number 
### **Return:**
Return an Object with all XML definitions for the selected API version. The object has the Type as key and the XML definition as value. If not exists any definition for the selected API return an empty object
- Object

### **Examples:**
**Get All XML Definitions for API 43.0**

    const XMLDefinitions = require('@ah/xml-definitions');

    const AllDefinitions = XMLDefinitions.getAllDefinitions(43);

    const CustomObjectDefinition = AllDefinitions.CustomObject;
    const SkilDefinition = AllDefinitions['Skill'];

    console.log(CustomObjectDefinition);
    console.log(SkilDefinition);

---
## [**getAllRawDefinitions()**](#getallrawdefinitions)
Method to get all XML RAW Definitions for all Metadata Types

### **Return:**
Return an Object with all XML raw definitions. The object has the Type as key and the XML definition as value
- Object

### **Examples:**
**Get All XML raw definitions**

    const XMLDefinitions = require('@ah/xml-definitions');

    const AllRawDefinitions = XMLDefinitions.getAllRawDefinitions();

    const CustomFieldRawDefinition = AllRawDefinitions.CustomField;
    const WorkflowRawDefinition = AllRawDefinitions['Workflow'];

    console.log(CustomFieldRawDefinition);
    console.log(WorkflowRawDefinition);

---
## [**resolveDefinitionReference(xmlDefinition, subFieldDefinition)**](#resolvedefinitionreferencexmldefinition-subfielddefinition)
Method to resolve the recursive reference from some XML Definition files

### **Parameters:**
  - **typeDefinition**: XML file Definition
    -  Object 
  - **subFieldDefinition**: XML Field definition to resolve
    - Object 
   
### **Return:**
Returns the XML Definition to the selected XML field
- Object
    
### **Examples:**
Resolve the recursive definition references on an object like Bot Steps on Bot XML Definition

    const XMLDefinitions = require('@ah/xml-definitions');

    const BotDefinition = XMLDefinitions.getDefinition('Bot', 50);
    ...
    ...
    ...
    if(botStep.definitionRef){
        let botStepResolvedDefinition = XMLDefinitions.resolveDefinitionReference(BotDefinition, botStep);
    }

