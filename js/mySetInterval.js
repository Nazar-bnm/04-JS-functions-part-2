(function() {
    'use strict';
    var myObjId = {};

    function mySetInterval(func, ms) {
        var id = Symbol();

        function timer() {
            func();
            myObjId[id] = setTimeout(timer, ms);
        }
        timer();
        return id;
    }

    function myClearInterval(id) {
        var myId = myObjId[id];
        clearTimeout(myId);
    }
    // functions for test
    function sayHi() {
        console.log('Hi');
    }

    function sayHello() {
        console.log('Hello World!');
    }
    // test mySetInterval
    var idSayHi = mySetInterval(sayHi, 2000);
    var idSayHello = mySetInterval(sayHello, 3000);
    // test myClearInterval
    setTimeout(function() {
        myClearInterval(idSayHi);
    }, 6010);
    setTimeout(function() {
        myClearInterval(idSayHello);
    }, 12010);
})();