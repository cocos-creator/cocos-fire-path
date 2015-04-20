var FirePath = require('../index');

describe('FirePath.contains', function () {
    it('should work for simple case', function () {
        FirePath.contains('foo/bar', 'foo/bar/foobar')
        .should.eql(true, 'foo/bar > foo/bar/foobar');

        FirePath.contains('foo/bar', 'foo/bar')
        .should.eql(true, 'foo/bar == foo/bar');

        FirePath.contains('foo/bar/foo-01', 'foo/bar/foo-02')
        .should.eql(false, 'foo/bar/foo-01 != foo/bar/foo-02');

        FirePath.contains('foo/bar/foobar', 'foo/bar')
        .should.eql(false, 'foo/bar/foobar < foo/bar');

        FirePath.contains('foo/bar/foobar', 'foobar/bar/foo')
        .should.eql(false, 'foo/bar/foobar != foobar/bar/foo');

        FirePath.contains('foo/bar/foobar/foobar.js', 'foo/bar/foobar/foobar.js.meta')
        .should.eql(false, 'foo/bar/foobar/foobar.js != foo/bar/foobar/foobar.js.meta');

        FirePath.contains('foo/bar/foobar', 'foo/bar/foobar/foobar.js')
        .should.eql(true, 'foo/bar/foobar > foo/bar/foobar/foobar.js' );
    });

    it('should work for complex typing', function () {
        FirePath.contains('foo/bar/', 'foo/bar/foobar')
        .should.eql(true, 'foo/bar/ > foo/bar/foobar');

        FirePath.contains('foo/bar', 'foo/bar/')
        .should.eql(true, 'foo/bar == foo/bar/');

        FirePath.contains('foo/bar/', 'foo/bar')
        .should.eql(true, 'foo/bar/ == foo/bar');

        FirePath.contains('foo/bar/foo-01/', 'foo/bar/foo-02')
        .should.eql(false, 'foo/bar/foo-01/ != foo/bar/foo-02');
    });
});

describe('FirePath.slash', function () {
    it('should convert backwards-slash paths to forward slash paths', function () {
        FirePath.slash('c:/aaaa\\bbbb')
        .should.eql('c:/aaaa/bbbb');

        FirePath.slash('c:\\aaaa\\bbbb')
        .should.eql('c:/aaaa/bbbb');
    });

    // it('should not convert extended-length paths', function () {
    //     var path = '\\\\?\\c:\\aaaa\\bbbb';
    //     FirePath.slash(path)
    //     .should.eql(path);
    // });

    it('should convert paths with Unicode', function () {
        var path = 'c:\\aaaa\\bbbb\\★';
        FirePath.slash(path)
        .should.eql('c:/aaaa/bbbb/★');
    });

    it('should convert paths with Chinese', function () {
        var path = 'c:\\aaaa\\bbbb\\你好';
        FirePath.slash(path)
        .should.eql('c:/aaaa/bbbb/你好');
    });
});

describe('FirePath.stripExt', function () {
    it('should work for simple case', function () {
        FirePath.stripExt('foo/bar/foobar.sprite')
        .should.eql('foo/bar/foobar');

        FirePath.stripExt('foo/bar/foobar')
        .should.eql('foo/bar/foobar');

        FirePath.stripExt('foo/bar/foobar.sprite.foo')
        .should.eql('foo/bar/foobar.sprite');

        FirePath.stripExt('foo/bar/foobar.png/hello.sprite')
        .should.eql('foo/bar/foobar.png/hello');
    });
});
