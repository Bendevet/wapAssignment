var myHello = (function() {
    var rat = 4;

    function getSum() {
        return rat + 5;
    }

    function increment() {
        rat += 1;
    }

    function decrement() {
        rat -= 1;
    }

    function setRat(val) {
        rat = val;
    }

    function getRat() {
        return rat;
    }
    return {
        result: getSum(),
        add: increment,
        remove: decrement,
        getRat: getRat,
        setRat: setRat
    }
})();

//myHello();
console.log(myHello.getRat());
myHello.add();
myHello.add();
console.log(myHello.getRat());
// console.log(myHello().result);