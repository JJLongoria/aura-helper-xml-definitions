const XMLFactory = require("../../../src/factory/xmlFactory");
const DataTypes = require("../../../src/values/datatypes");

describe('Testing src/factory/xmlFactory.js', () => {
    describe('Testing ObjectXMLField Class', () => {
        test('Testing instance', () => {
            let field = new XMLFactory.ObjectXMLField('key', 'Label');
            expect(field.key).toMatch('key');
            expect(field.label).toMatch('Label');
            expect(field.datatype).toMatch(DataTypes.OBJECT);
        });
    });
    describe('Testing ArrayXMLField Class', () => {
        test('Testing instance', () => {
            let field = new XMLFactory.ArrayXMLField('key', 'Label');
            expect(field.key).toMatch('key');
            expect(field.label).toMatch('Label');
            expect(field.datatype).toMatch(DataTypes.ARRAY);
        });
    });
    describe('Testing EnumXMLField Class', () => {
        test('Testing instance', () => {
            let field = new XMLFactory.EnumXMLField('key', 'Label');
            expect(field.key).toMatch('key');
            expect(field.label).toMatch('Label');
            expect(field.datatype).toMatch(DataTypes.ENUM);
        });
    });
    describe('Testing StringXMLField Class', () => {
        test('Testing instance', () => {
            let field = new XMLFactory.StringXMLField('key', 'Label');
            expect(field.key).toMatch('key');
            expect(field.label).toMatch('Label');
            expect(field.datatype).toMatch(DataTypes.STRING);
        });
    });
    describe('Testing BooleanXMLField Class', () => {
        test('Testing instance', () => {
            let field = new XMLFactory.BooleanXMLField('key', 'Label');
            expect(field.key).toMatch('key');
            expect(field.label).toMatch('Label');
            expect(field.datatype).toMatch(DataTypes.BOOLEAN);
        });
    });
    describe('Testing IntegerXMLField Class', () => {
        test('Testing instance', () => {
            let field = new XMLFactory.IntegerXMLField('key', 'Label');
            expect(field.key).toMatch('key');
            expect(field.label).toMatch('Label');
            expect(field.datatype).toMatch(DataTypes.INTEGER);
        });
    });
    describe('Testing DateTimeXMLField Class', () => {
        test('Testing instance', () => {
            let field = new XMLFactory.DateTimeXMLField('key', 'Label');
            expect(field.key).toMatch('key');
            expect(field.label).toMatch('Label');
            expect(field.datatype).toMatch(DataTypes.DATE_TIME);
        });
    });
    describe('Testing TimeXMLField Class', () => {
        test('Testing instance', () => {
            let field = new XMLFactory.TimeXMLField('key', 'Label');
            expect(field.key).toMatch('key');
            expect(field.label).toMatch('Label');
            expect(field.datatype).toMatch(DataTypes.TIME);
        });
    });
    describe('Testing XMLDataControlledField Class', () => {
        test('Testing instance', () => {
            let controllerField = new XMLFactory.XMLDataControlledField('key', 'valueToCompare', 'valueToSet');
            expect(controllerField.field).toMatch('key');
            expect(controllerField.valueToCompare).toMatch('valueToCompare');
            expect(controllerField.valueToSet).toMatch('valueToSet');
        });
    });
    describe('Testing XMLDependencyField Class', () => {
        test('Testing instance', () => {
            let controllerField = new XMLFactory.XMLDependencyField('field', 'valueToCompare', 'allowedValues', 'forbidenValues');
            expect(controllerField.field).toMatch('field');
            expect(controllerField.valueToCompare).toEqual(['valueToCompare']);
            expect(controllerField.allowedValues).toEqual(['allowedValues']);
            expect(controllerField.forbidenValues).toEqual(['forbidenValues']);
        });
    });
});