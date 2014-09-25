var FooBar = {};

function privateFunc () {
}

FooBar.foobar = function () {
    return 'foobar';
};

//
module.exports = FooBar;
