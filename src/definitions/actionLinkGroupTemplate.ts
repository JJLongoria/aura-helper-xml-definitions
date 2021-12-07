import { ArrayXMLField,  StringXMLField, IntegerXMLField, BooleanXMLField, XMLDependencyField, EnumXMLField, DataValues } from '@aurahelper/core';

export const ActionLinkGroupTemplate = {
    actionLinkTemplates: new ArrayXMLField('actionLinkTemplates', 'Action Link Templates')
        .setMinApi(33)
        .setEditable()
        .setFieldKey('actionUrl')
        .addField('actionUrl', new StringXMLField('actionUrl', 'Action Url')
            .setEditable()
            .setRequired()
        )
        .addField('headers', new StringXMLField('headers', 'Headers')
            .setEditable()
        )
        .addField('isConfirmationRequired', new BooleanXMLField('isConfirmationRequired', 'Is Confirmation Required')
            .setEditable()
            .setRequired()
            .setDefaultValue(true)
        )
        .addField('isGroupDefault', new BooleanXMLField('isGroupDefault', 'Is Group Default')
            .setEditable()
            .setRequired()
        )
        .addField('label', new StringXMLField('label', 'Label')
            .setEditable()
        )
        .addField('labelKey', new StringXMLField('labelKey', 'Label Key')
            .setEditable()
            .setRequired()
        )
        .addField('linkType', new EnumXMLField('linkType', 'Link Type')
            .setEditable()
            .setRequired()
            .addEnumValue('Api', 'Api')
            .addEnumValue('Api Async', 'ApiAsync')
            .addEnumValue('Download', 'Download')
            .addEnumValue('UI', 'Ui')
        )
        .addField('method', new EnumXMLField('method', 'Method')
            .setEditable()
            .setRequired()
            .addEnumValue('HTTP Delete', 'HttpDelete')
            .addEnumValue('HTTP Get', 'HttpGet')
            .addEnumValue('HTTP Head', 'HttpHead')
            .addEnumValue('HTTP Patch', 'HttpPatch')
            .addEnumValue('HTTP Post', 'HttpPost')
            .addEnumValue('HTTP Put', 'HttpPut')
            .addDependencyField(new XMLDependencyField('linkType', 'Download', 'HTTP Get'))
            .addDependencyField(new XMLDependencyField('linkType', 'Ui', 'HTTP Get'))
        )
        .addField('position', new IntegerXMLField('position', 'Position')
            .setEditable()
            .setRequired()
        )
        .addField('requestBody', new StringXMLField('requestBody', 'Request Body')
            .setEditable()
        )
        .addField('userAlias', new StringXMLField('userAlias', 'User Alias')
            .setEditable()
        )
        .addField('userVisibility', new EnumXMLField('userVisibility', 'User Visibility')
            .setEditable()
            .setRequired()
            .addEnumValue('Creator', 'Creator')
            .addEnumValue('Everyone', 'Everyone')
            .addEnumValue('Everyone But Creator', 'EveryoneButCreator')
            .addEnumValue('Manager', 'Manager')
            .addEnumValue('Custom User', 'CustomUser')
            .addEnumValue('Custom Excluded User', 'CustomExcludedUser')
        ),
    category: new EnumXMLField('category', 'Category')
        .setMinApi(33)
        .setEditable()
        .setRequired()
        .addEnumValue('Primary', 'Primary')
        .addEnumValue('Overflow', 'Overflow'),
    executionsAllowed: new EnumXMLField('executionsAllowed', 'Executions Allowed')
        .setMinApi(33)
        .setEditable()
        .setRequired()
        .addEnumValue('Once', 'Once')
        .addEnumValue('Once Per User', 'OncePerUser')
        .addEnumValue('Unlimited', 'Unlimited')
        .addDependencyField(new XMLDependencyField('actionUrl>linkType', 'Api', DataValues.ANY_VALUE, DataValues.NOT_NULL))
        .addDependencyField(new XMLDependencyField('actionUrl>linkType', 'ApiAsync', DataValues.ANY_VALUE, DataValues.NOT_NULL)),
    hoursUntilExpiration: new IntegerXMLField('hoursUntilExpiration', 'Hours Until Expiration')
        .setMinApi(33)
        .setEditable()
        .setRequired(),
    isPublished: new BooleanXMLField('isPublished', 'Is Published')
        .setMinApi(33)
        .setEditable()
        .setRequired(),
    name: new StringXMLField('name', 'Name')
        .setMinApi(33)
        .setUnique()
        .setEditable()
        .setRequired()
};