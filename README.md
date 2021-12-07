# **Aura Helper XML Definitions Module**

[![Version](https://img.shields.io/npm/v/@aurahelper/xml-definitions?logo=npm)](https://www.npmjs.com/package/@aurahelper/xml-definitions)
[![Total Downloads](https://img.shields.io/npm/dt/@aurahelper/xml-definitions?logo=npm)](https://www.npmjs.com/package/@aurahelper/xml-definitions)
[![Downloads/Month](https://img.shields.io/npm/dm/@aurahelper/xml-definitions?logo=npm)](https://www.npmjs.com/package/@aurahelper/xml-definitions)
[![Issues](https://img.shields.io/github/issues/jjlongoria/aura-helper-xml-definitions)](https://github.com/JJLongoria/aura-helper-xml-definitions/issues)
[![Known Vulnerabilities](https://snyk.io/test/github/JJLongoria/aura-helper-xml-definitions/badge.svg)](https://snyk.io/test/github/JJLongoria/aura-helper-xml-definitions)
[![Code Size](https://img.shields.io/github/languages/code-size/jjlongoria/aura-helper-xml-definitions)](https://github.com/JJLongoria/aura-helper-xml-definitions)
[![License](https://img.shields.io/github/license/jjlongoria/aura-helper-xml-definitions?logo=github)](https://github.com/JJLongoria/aura-helper-xml-definitions/blob/master/LICENSE)

Module to get any Salesforce Metadata XML Files Definition to process Metadata files properly. Yoy can get all Raw definitions, a Raw definition for a specific type or get All or specific definitions for a specific api version. For example, yo can get all Salesforce XML Definitions for API 45.0 or get the Custom Object XML File Definition for API 35.0.

The **difference** between the **XML definition** and the **raw XML definition** is that the raw definition *is not processed*, it returns the entire XML information. The XML definitions return the XML definition processed for a *specific API version*, omitting everything that does not correspond to the indicated version.

### **Support up to API 53.0**

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
    - `string` 
  - **apiVersion**: API Version number to get the version definition
    - `string` | `number`
   
### **Return:**
Return the XML definition for the selected type and API version. If the type exists, but is not available in the selected API, return an empty object. If type not exists, return undefined.
- `any`
    
### **Examples:**
**Get the Profile XML definition for API 45.0**
```javascript
    import { XMLDefinitions } from '@aurahelper/xml-definitions';

    const ProfileDefinition = XMLDefinitions.getDefinition('Profile', 45);
    console.log(ProfileDefinition);
```
**Get the CustomObject XML definition for API 33.0**
```javascript
    import { XMLDefinitions } from '@aurahelper/xml-definitions';

    const CustomObjectDefinition = XMLDefinitions.getDefinition('CustomObject', 33);
    console.log(CustomObjectDefinition);    
```
---
## [**getRawDefinition(type)**](#getrawdefinitiontype)
Method to get the Metadata Type's XML RAW definition

### **Parameters:**
  - **type**: Metadata Type API Name to get the XML definition
      - `string` 
### **Return:**
Return the XML raw definition for the selected type. If type not exists, return undefined
- `any`

### **Examples:**
**Get the ConnectedApp XML raw definition**
```javascript
    import { XMLDefinitions } from '@aurahelper/xml-definitions';

    const ConnectedAppDefinition = XMLDefinitions.getRawDefinition('ConnectedApp');
    console.log(ConnectedAppDefinition);
```
**Get the CustomField XML raw definition**
```javascript
    import { XMLDefinitions } from '@aurahelper/xml-definitions';

    const CustomFieldDefinition = XMLDefinitions.getRawDefinition('CustomField');
    console.log(CustomFieldDefinition);
```
---
## [**getAllDefinitions(apiVersion)**](#getalldefinitionsapiversion)
Method to get all XML Definitions for all Metadata Types for an specific API Version.

### **Parameters:**
  - **apiVersion**: API Version number to get the version definition
    - `string` | `number` 
### **Return:**
Return an Object with all XML definitions for the selected API version. The object has the Type as key and the XML definition as value. If not exists any definition for the selected API return an empty object
- `any`

### **Examples:**
**Get All XML Definitions for API 43.0**
```javascript
    import { XMLDefinitions } from '@aurahelper/xml-definitions';

    const AllDefinitions = XMLDefinitions.getAllDefinitions(43);

    const CustomObjectDefinition = AllDefinitions.CustomObject;
    const SkilDefinition = AllDefinitions['Skill'];

    console.log(CustomObjectDefinition);
    console.log(SkilDefinition);
```
---
## [**getAllRawDefinitions()**](#getallrawdefinitions)
Method to get all XML RAW Definitions for all Metadata Types

### **Return:**
Return an Object with all XML raw definitions. The object has the Type as key and the XML definition as value
- `any`

### **Examples:**
**Get All XML raw definitions**
```javascript
    import { XMLDefinitions } from '@aurahelper/xml-definitions';

    const AllRawDefinitions = XMLDefinitions.getAllRawDefinitions();

    const CustomFieldRawDefinition = AllRawDefinitions.CustomField;
    const WorkflowRawDefinition = AllRawDefinitions['Workflow'];

    console.log(CustomFieldRawDefinition);
    console.log(WorkflowRawDefinition);
```
---
## [**resolveDefinitionReference(xmlDefinition, subFieldDefinition)**](#resolvedefinitionreferencexmldefinition-subfielddefinition)
Method to resolve the recursive reference from some XML Definition files

### **Parameters:**
  - **typeDefinition**: XML file Definition
    -  `any` 
  - **subFieldDefinition**: XML Field definition to resolve
    - `any` 
   
### **Return:**
Returns the XML Definition to the selected XML field
- `any`
    
### **Examples:**
Resolve the recursive definition references on an object like Bot Steps on Bot XML Definition

```javascript
    import { XMLDefinitions } from '@aurahelper/xml-definitions';

    const BotDefinition = XMLDefinitions.getDefinition('Bot', 50);
    ...
    ...
    ...
    if(botStep.definitionRef){
        let botStepResolvedDefinition = XMLDefinitions.resolveDefinitionReference(BotDefinition, botStep);
    }
```

