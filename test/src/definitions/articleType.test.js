describe('Testing src/definitions/articleType.js', () => {
    test('Testing Definition', () => {
        const ArticleType = require('../../../src/definitions/articleType');
        ArticleType.description.validate('hola');
    });
});