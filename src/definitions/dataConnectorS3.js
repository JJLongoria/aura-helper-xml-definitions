const { StringXMLField } = require('@ah/core').Types;

module.exports = {
    fileNameWildcard: new StringXMLField('fileNameWildcard', 'File Name Wildcard')
        .setMinApi(50)
        .setEditable(),
    importFromDirectory: new StringXMLField('importFromDirectory', 'Import From Directory')
        .setMinApi(50)
        .setEditable()
        .setRequired(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(50)
        .setEditable()
        .setRequired()
        .setUnique(),
    s3BucketName: new StringXMLField('s3BucketName', 'S3 Bucket Name')
        .setMinApi(50)
        .setEditable(),
}