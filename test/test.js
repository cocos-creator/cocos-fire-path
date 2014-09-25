var FirePath = require('../index');

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
