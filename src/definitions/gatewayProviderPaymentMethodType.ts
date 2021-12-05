import { StringXMLField, EnumXMLField } from '@aurahelper/core';

export const GatewayProviderPaymentMethodType = {
    comment: new StringXMLField('comment', 'comment')
        .setMinApi(51)
        .setEditable()
        .setMaxLength(1000),
    gtwyProvPaymentMethodType: new EnumXMLField('gtwyProvPaymentMethodType', 'Gateway Provider Payment Method Type')
        .setMinApi(51)
        .setEditable()
        .addEnumValue('Creadit Card', 'CREDIT_CARD')
        .addEnumValue('Basic Credit', 'BASIC_CREDIT')
        .addEnumValue('CreditCard', 'CreditCard')
        .addEnumValue('Google Pay', 'GooglePay')
        .addEnumValue('Apple Pay', 'ApplePay'),
    masterLabel: new StringXMLField('masterLabel', 'Master Label')
        .setMinApi(51)
        .setEditable()
        .setRequired(),
    paymentGatewayProvider: new StringXMLField('paymentGatewayProvider', 'Payment Gateway Provider')
        .setMinApi(51)
        .setEditable(),
    paymentMethodType: new EnumXMLField('paymentMethodType', 'Payment Method Type')
        .setMinApi(51)
        .setEditable()
        .addEnumValue('Alternative Payment Method', 'AlternativePaymentMethod')
        .addEnumValue('Card Payment Method', 'CardPaymentMethod')
        .addEnumValue('Digital Wallet', 'DigitalWallet'),
    recordType: new StringXMLField('recordType', 'Record Type')
        .setMinApi(51)
        .setEditable(),
};