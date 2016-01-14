(function() {
    "use strict";
    var myInt;

    function mySetInterval(func, ms) {
        function timer() {
            func();
            myInt = setTimeout(timer, ms);
        }
        timer();
    }

    function myClearInterval(myVar) {
        clearTimeout(myVar);
    }

    function sayHi() {
        console.log('Hello World!');
    }
    mySetInterval(sayHi, 2000);
    setTimeout(function() {
        myClearInterval(myInt);
    }, 6010);
})();