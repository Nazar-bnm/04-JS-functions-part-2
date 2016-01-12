(function() {
    "use strict";

    function mySetInterval(func, ms) {
        setTimeout(function timer() {
            func();
            setTimeout(timer, ms);
        }, ms);
    }

    function sayHi() {
        console.log('Hello World!');
    }
    mySetInterval(sayHi, 2000);
})();