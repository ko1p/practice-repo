var addNumber = function (a, b) {
    return a + b;
};
var toUppercase = function (str) {
    return str.trim().toUpperCase();
};
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log(position(), 'no args');
console.log(position(5), 'only a');
console.log(position(4, 12), 'a and b');
