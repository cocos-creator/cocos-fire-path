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

FirePath.stripSep = function ( path ) {
    path = Path.normalize(path);
    for ( var i = path.length-1; i >= 0; --i ) {
        if ( path[i] !== Path.sep ) {
            break;
        }
    }
    return path.substring(0,i);
};

// pathA = foo/bar,         pathB = foo/bar/foobar, return true
// pathA = foo/bar,         pathB = foo/bar,        return true
// pathA = foo/bar/foobar,  pathB = foo/bar,        return false
// pathA = foo/bar/foobar,  pathB = foobar/bar/foo, return false
FirePath.contains = function ( pathA, pathB ) {
    pathA = FirePath.stripSep(pathA);
    pathB = FirePath.stripSep(pathB);
    var pathDirB = Path.dirname(pathB);

    if ( pathA.length < pathDirB.length &&
         pathDirB.indexOf (pathA) === 0 )
    {
        return true;
    }

    if ( pathA === pathDirB ) {
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
