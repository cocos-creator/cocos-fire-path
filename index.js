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

// pathA = foo/bar,         pathB = foo/bar/foobar, return true
// pathA = foo/bar,         pathB = foo/bar,        return true
// pathA = foo/bar/foobar,  pathB = foo/bar,        return false
// pathA = foo/bar/foobar,  pathB = foobar/bar/foo, return false
FirePath.contains = function ( pathA, pathB ) {
    pathA = Path.normalize(pathA);
    pathB = Path.normalize(pathB);
    if ( pathA.length < pathB.length &&
         pathB.indexOf (pathA) === 0 ) 
    {
        return true;
    }

    if ( pathA === pathB ) {
        return true;
    }

    return false;
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
