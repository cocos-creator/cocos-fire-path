var Path = require('path');
var FirePath = {};

FirePath.slash = function ( path ) {
    // var isExtendedLengthPath = /^\\\\\?\\/.test(path);
    // var hasNonAscii = /[^\x00-\x80]+/.test(path);
    // if (isExtendedLengthPath || hasNonAscii) {
    //     return path;
    // }
    return path.replace(/\\/g, '/');
};

//
var _ = {};
var prop;
for ( prop in Path ) {
    _[prop] = Path[prop];
}
for ( prop in FirePath ) {
    _[prop] = FirePath[prop];
}
module.exports = _;
