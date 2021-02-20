const { StringXMLField, EnumXMLField, BooleanXMLField } = require('../factory/xmlFactory');
const MetadataTypes = require('../values/metadataTypes');

module.exports = {
    areHeadersIncludedInFile: new BooleanXMLField('areHeadersIncludedInFile', 'Are Headers Included In File')
        .setMinApi(50)
        .setEditable(),
    definitionCreationType: new EnumXMLField('definitionCreationType', 'Definition Creation Type')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .addEnumValue('Standard', 'Standard')
        .addEnumValue('Custom', 'Custom'),
    dataConnector: new StringXMLField('dataConnector', 'Data Connector')
        .setMinApi(50)
        .setEditable(),
    dataConnectorType: new EnumXMLField('dataConnectorType', 'Data Connector Type')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .addEnumValue('Salesforce Marketing Cloud', 'SalesforceMarketingCloud')
        .addEnumValue('Mobile App', 'MobileApp')
        .addEnumValue('Salesforce.com', 'SalesforceDotCom')
        .addEnumValue('Amazon S3', 'AmazonS3'),
    dataExtractField: new StringXMLField('dataExtractField', 'Data Extract Field')
        .setMinApi(50)
        .setEditable(),
    dataExtractMethods: new EnumXMLField('dataExtractMethods', 'Data Extract Methods')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .addEnumValue('Full Refresh', 'FULL_REFRESH')
        .addEnumValue('Numeric CDC', 'NUMERIC_CDC')
        .addEnumValue('DateTime CDC', 'DATETIME_CDC'),
    dataPlatDataSetBundle: new StringXMLField('dataPlatDataSetBundle', 'Data Platform Data Set Bundle')
        .setMinApi(50)
        .setEditable(),
    dataPlatformDataSet: new StringXMLField('dataPlatformDataSet', 'Data Platform Data Set')
        .setMinApi(50)
        .setEditable(),
    dataPlatformDataSetItemName: new StringXMLField('dataPlatformDataSetItemName', 'Data Platform Data Set Item')
        .setMinApi(50)
        .setEditable(),
    dataSource: new StringXMLField('dataSource', 'Data Source')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .setMetadataType(MetadataTypes.DATA_SOURCE),
    description: new StringXMLField('description', 'Description')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
    isLimitedToNewFiles: new BooleanXMLField('isLimitedToNewFiles', 'Is Limited To New Files')
        .setMinApi(50)
        .setEditable(),
    isMissingFileFailure: new BooleanXMLField('isMissingFileFailure', 'Is Missing File Failure')
        .setMinApi(50)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .setUnique(),
    mktDataLakeObject: new StringXMLField('mktDataLakeObject', 'MKT Data Lake Object')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
}