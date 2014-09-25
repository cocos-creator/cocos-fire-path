var FooBar = require('../index');

describe('FooBar.foobar', function () {
    it('should work for simple case', function () {
        FooBar.foobar('foo', 'bar')
        .should.eql('foobar');
    });
});
