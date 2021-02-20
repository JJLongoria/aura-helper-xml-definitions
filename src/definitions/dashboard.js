const { StringXMLField, ObjectXMLField, ArrayXMLField, IntegerXMLField, EnumXMLField, BooleanXMLField } = require('../factory/xmlFactory');
const DashboardComponentType = require('./types/dashboardComponent');

module.exports = {
    backgroundEndColor: new StringXMLField('backgroundEndColor', 'Background End Color')
        .setMinApi(14)
        .setEditable()
        .setRequired(),
    backgroundFadeDirection: new EnumXMLField('backgroundFadeDirection', 'Background Fade Direction')
        .setMinApi(14)
        .setEditable()
        .setRequired()
        .addEnumValue('Diagonal', 'Diagonal')
        .addEnumValue('Left To Right', 'LeftToRight')
        .addEnumValue('Top To Bottom', 'TopToBottom'),
    backgroundStartColor: new StringXMLField('backgroundStartColor', 'Background Start Color')
        .setMinApi(14)
        .setEditable()
        .setRequired(),
    chartTheme: new EnumXMLField('chartTheme', 'Chart Theme')
        .setMinApi(42)
        .setEditable()
        .addEnumValue('Light', 'light')
        .addEnumValue('Dark', 'dark'),
    colorPalette: new EnumXMLField('colorPalette', 'Color Palette')
        .setMinApi(42)
        .setEditable()
        .addEnumValue('Accessible', 'accessible')
        .addEnumValue('Bluegrass', 'bluegrass')
        .addEnumValue('Color Safe', 'colorSafe')
        .addEnumValue('Default', 'Default')
        .addEnumValue('Dusk', 'dusk')
        .addEnumValue('Earth', 'earth')
        .addEnumValue('Fire', 'fire')
        .addEnumValue('Gray', 'gray')
        .addEnumValue('Heat', 'heat')
        .addEnumValue('Justice', 'justice')
        .addEnumValue('Nightfall', 'nightfall')
        .addEnumValue('Pond', 'pond')
        .addEnumValue('Sunrise', 'sunrise')
        .addEnumValue('Tropic', 'tropic')
        .addEnumValue('Unity', 'unity')
        .addEnumValue('Water', 'water')
        .addEnumValue('Watermelon', 'watermelon'),
    dashboardChartTheme: new EnumXMLField('dashboardChartTheme', 'Dashboard Chart Theme')
        .setMinApi(42)
        .setEditable()
        .addEnumValue('Light', 'light')
        .addEnumValue('Dark', 'dark'),
    dashboardColorPalette: new EnumXMLField('dashboardColorPalette', 'Dashboard Color Palette')
        .setMinApi(42)
        .setEditable()
        .addEnumValue('Accessible', 'accessible')
        .addEnumValue('Bluegrass', 'bluegrass')
        .addEnumValue('Color Safe', 'colorSafe')
        .addEnumValue('Default', 'Default')
        .addEnumValue('Dusk', 'dusk')
        .addEnumValue('Earth', 'earth')
        .addEnumValue('Fire', 'fire')
        .addEnumValue('Gray', 'gray')
        .addEnumValue('Heat', 'heat')
        .addEnumValue('Justice', 'justice')
        .addEnumValue('Nightfall', 'nightfall')
        .addEnumValue('Pond', 'pond')
        .addEnumValue('Sunrise', 'sunrise')
        .addEnumValue('Tropic', 'tropic')
        .addEnumValue('Unity', 'unity')
        .addEnumValue('Water', 'water')
        .addEnumValue('Watermelon', 'watermelon'),
    dashboardFilters: new ArrayXMLField('dashboardFilters', 'Dashboard Filters')
        .setMinApi(23)
        .setEditable()
        .setFieldKey('name')
        .addField('dashboardFilterOptions', new ArrayXMLField('dashboardFilterOptions', 'Dashboard Filter Options')
            .setEditable()
            .addField('operator', new EnumXMLField('operator', 'operator')
                .setEditable()
                .setRequired()
                .addEnumValue('Equals', 'equals')
                .addEnumValue('Not Equal', 'notEqual')
                .addEnumValue('Less Than', 'lessThan')
                .addEnumValue('Greater Than', 'greaterThan')
                .addEnumValue('Less Or Equal', 'lessOrEqual')
                .addEnumValue('Greater Or Equal', 'greaterOrEqual')
                .addEnumValue('Contains', 'contains')
                .addEnumValue('Not Contain', 'notContain')
                .addEnumValue('Starts With', 'startsWith')
                .addEnumValue('Includes', 'includes')
                .addEnumValue('Excludes', 'excludes')
                .addEnumValue('Within', 'within', undefined, 23)
                .addEnumValue('Between', 'between', 24)
            )
            .addField('values', new ArrayXMLField('values', 'Values')
                .setMinApi(24)
                .setEditable()
                .setRequired()
            )
        )
        .addField('name', new StringXMLField('name', 'Name')
            .setEditable()
            .setRequired()
        ),
    dashboardGridLayout: new ObjectXMLField('dashboardGridLayout', 'Dashboard Grid Layout')
        .setMinApi(35)
        .setEditable()
        .addField('dashboardGridComponents', new ArrayXMLField('dashboardGridComponents', 'Dashboard Grid Components')
            .setEditable()
            .addField('colSpan', new IntegerXMLField('colSpan', 'Column Span')
                .setEditable()
                .setRequired()
            )
            .addField('columnIndex', new IntegerXMLField('columnIndex', 'Column Index')
                .setEditable()
                .setRequired()
            )
            .addField('dashboardComponent', DashboardComponentType(ObjectXMLField, 'dashboardComponent', 'Dashboard Component'))
            .addField('rowIndex', new IntegerXMLField('rowIndex', 'Row Index')
                .setEditable()
                .setRequired()
            )
            .addField('rowSpan', new IntegerXMLField('rowSpan', 'Row Span')
                .setEditable()
                .setRequired()
            )
        ),
    dashboardType: new EnumXMLField('dashboardType', 'Dashboard Type')
        .setMinApi(19)
        .setEditable()
        .addEnumValue('Specified User', 'SpecifiedUser')
        .addEnumValue('Logged In User', 'LoggedInUser')
        .addEnumValue('My Team User', 'MyTeamUser'),
    description: new StringXMLField('description', 'Description')
        .setMinApi(14)
        .setEditable()
        .setMaxLength(255),
    folderName: new StringXMLField('folderName', 'Folder Name')
        .setMinApi(35)
        .setEditable(),
    fullName: new StringXMLField('fullName', 'Full Name')
        .setMinApi(14)
        .setEditable()
        .setRequired()
        .setUnique(),
    isGridLayout: new BooleanXMLField('isGridLayout', 'Is Grid Layout')
        .setMinApi(35)
        .setEditable(),
    dashboardResultRefreshedDate: new StringXMLField('dashboardResultRefreshedDate', 'Dashboard Result Refreshed Date')
        .setMinApi(14)
        .setEditable()
        .setRequired(),
    dashboardResultRunningUser: new StringXMLField('dashboardResultRunningUser', 'Dashboard Result Running User')
        .setMinApi(14)
        .setEditable()
        .setRequired(),
    leftSection: new ObjectXMLField('leftSection', 'Left Section')
        .setMinApi(14)
        .setEditable()
        .setRequired()
        .addField('columnSize', new EnumXMLField('columnSize', 'Column Size')
            .setEditable()
            .setRequired()
            .addEnumValue('Medium', 'Medium')
            .addEnumValue('Narrow', 'Narrow')
            .addEnumValue('Wide', 'Wide')
        )
        .addField('components', DashboardComponentType(ArrayXMLField, 'components', 'Components')),
    middleSection: new ObjectXMLField('middleSection', 'Middle Section')
        .setMinApi(14)
        .setEditable()
        .setRequired()
        .addField('columnSize', new EnumXMLField('columnSize', 'Column Size')
            .setEditable()
            .setRequired()
            .addEnumValue('Medium', 'Medium')
            .addEnumValue('Narrow', 'Narrow')
            .addEnumValue('Wide', 'Wide')
        )
        .addField('components', DashboardComponentType(ArrayXMLField, 'components', 'Components')),
    numSubscriptions: new IntegerXMLField('numSubscriptions', 'Number of Subscriptions')
        .setMinApi(42)
        .setEditable(),
    rightSection: new ObjectXMLField('rightSection', 'Right Section')
        .setMinApi(14)
        .setEditable()
        .setRequired()
        .addField('columnSize', new EnumXMLField('columnSize', 'Column Size')
            .setEditable()
            .setRequired()
            .addEnumValue('Medium', 'Medium')
            .addEnumValue('Narrow', 'Narrow')
            .addEnumValue('Wide', 'Wide')
        )
        .addField('components', DashboardComponentType(ArrayXMLField, 'components', 'Components')),
    runningUser: new StringXMLField('runningUser', 'Running User')
        .setMinApi(14)
        .setEditable()
        .linkFieldToSObject('User', 'Username'),
    textColor: new StringXMLField('textColor', 'Text Color')
        .setMinApi(14)
        .setEditable()
        .setRequired(),
    title: new StringXMLField('title', 'Title')
        .setMinApi(14)
        .setEditable()
        .setRequired(),
    titleColor: new StringXMLField('titleColor', 'Title Color')
        .setMinApi(14)
        .setEditable()
        .setRequired(),
    titleSize: new IntegerXMLField('titleSize', 'Title Size')
        .setMinApi(14)
        .setEditable()
        .setRequired()
}