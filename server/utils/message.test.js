var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'TestUser';
        var lat = 10;
        var lng = 15;
        var url = `https://www.google.com/maps?q=${lat},${lng}`;
        var message = generateLocationMessage(from, lat, lng);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});
