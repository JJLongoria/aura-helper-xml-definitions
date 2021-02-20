const BotInvocationType = require('../../../../src/definitions/types/botInvocation');

describe('Testing src/definitions/types/botInvocation.js', () => {
    test('Testing Definition', () => {
        let result = BotInvocationType('test', 'test', 42);
    });
});