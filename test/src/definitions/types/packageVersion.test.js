const PackageVersionType = require('../../../../src/definitions/types/packageVersion');

describe('Testing src/definitions/types/packageVersion.js', () => {
    test('Testing Definition', () => {
        let result = PackageVersionType('packageVersionTest', 'Package Version Test', 30);
    });
});