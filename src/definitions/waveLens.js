const { StringXMLField, EnumXMLField } = require('@ah/core').Types;
const { MetadataTypes } = require('@ah/core').Values;

module.exports = {
    application: new StringXMLField('application', 'Application')
        .setMinApi(37)
        .setEditable(),
    datasets: new StringXMLField('datasets', 'Datasets')
        .setMinApi(37)
        .setEditable()
        .setMetadataType(MetadataTypes.WAVE_DATASET),
    description: new StringXMLField('description', 'Description')
        .setMinApi(37)
        .setEditable(),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(37)
        .setEditable()
        .setRequired(),
    templateAssetSourceName: new StringXMLField('templateAssetSourceName', 'Template Asset Source Name')
        .setMinApi(37)
        .setEditable(),
    visualizationType: new EnumXMLField('visualizationType', 'Visualization Type')
        .setMinApi(37)
        .setEditable()
        .addEnumValue('Calendar heat map', 'calheatmap')
        .addEnumValue('Comparison table', 'comparisontable')
        .addEnumValue('Heat map', 'heatmap')
        .addEnumValue('Horizontal bar', 'hbar')
        .addEnumValue('Horizontal dot plot', 'hbarhdot')
        .addEnumValue('Mmatrix', 'matrix')
        .addEnumValue('Parallel coordinates', 'parallelcoords')
        .addEnumValue('Donut', 'pie')
        .addEnumValue('Pivot table', 'pivottable')
        .addEnumValue('Scatter plot', 'scatter')
        .addEnumValue('Stacked horizontal bar', 'stackhbar')
        .addEnumValue('Stacked vertical bar', 'stackvbar')
        .addEnumValue('Time line', 'time')
        .addEnumValue('Values table', 'valuestable')
        .addEnumValue('Vertical bar', 'vbar')
        .addEnumValue('Vertical dot plot', 'vdot')
}