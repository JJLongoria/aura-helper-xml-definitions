const BotMessageType = require('../../../definitions/types/botMessage');

describe('Testing src/definitions/types/botMessage.js', () => {
    test('Testing Definition', () => {
        let result = BotMessageType('test', 'test', 42);
    });
});