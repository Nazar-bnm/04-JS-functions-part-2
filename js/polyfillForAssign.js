(function() {
    'use strict';
    if (typeof Object.assign != 'function') {
        (function() {
            Object.assign = function() {
                if (arguments[0] === undefined || arguments[0] === null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }
                var copy = arguments[0];
                var i;
                for (i = 1; i < arguments.length; i++) {
                    var obj = arguments[i];
                    for (var key in obj) {
                        var ownPr = Object.getOwnPropertyDescriptor(obj, key);
                        if (ownPr !== undefined) {
                            copy[key] = obj[key];
                        }
                    }
                }
                return copy;
            };
        })();
    }
    //  the way with Object.defineProperty:
/*    if (!Object.assign) {
        Object.defineProperty(Object, 'assign', {
            configurable: true,
            writeable: true,
            value: function() {
                if (arguments[0] === undefined || arguments[0] === null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }
                var copy = arguments[0];
                var i;
                for (i = 1; i < arguments.length; i++) {
                    var obj = arguments[i];
                    for (var key in obj) {
                        var ownPr = Object.getOwnPropertyDescriptor(obj, key);
                        if (ownPr !== undefined) {
                            copy[key] = obj[key];
                        }
                    }
                }
                return copy;
            }
        });
    }*/
})();