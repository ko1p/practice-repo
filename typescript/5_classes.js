var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return name + " this is " + this.version + " of TypeScript";
    };
    return Typescript;
}());
var typescript = new Typescript('1.0.0');
console.log(typescript.info('Anton'));
var Car1 = /** @class */ (function () {
    function Car1(carModel) {
        this.numOfWeels = 4;
        this.model = carModel;
    }
    return Car1;
}());
// OR THE SAME
var Car2 = /** @class */ (function () {
    function Car2(model) {
        this.model = model;
        this.numOfWeels = 4;
    }
    return Car2;
}());
//============
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = 'no sound';
        this.color = 'black'; // default type of key
    }
    Animal.prototype.go = function () {
        console.log(this.color + " animal is going");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    Cat.prototype.getVoice = function () {
        return this.voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
console.log(cat.getVoice());
cat.setVoice('Miau');
console.log(cat.getVoice());
