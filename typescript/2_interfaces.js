// === Interfaces ===
var rect1 = {
    id: 1,
    size: {
        heigth: 10,
        width: 25
    },
    color: 'red'
};
var rect2 = {
    id: 2,
    size: {
        width: 12,
        heigth: 11
    }
};
rect2.color = 'blue';
rect2.color = 'yellow';
// rect2.id = 1 this is readonly property
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: 5,
    size: {
        width: 10,
        heigth: 5
    },
    getArea: function () {
        return this.size.width * this.size.heigth;
    }
};
console.log(rect5.getArea());
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
        this.num = 0;
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    Clock.prototype.setNum = function (num) {
        this.num = num;
    };
    return Clock;
}());
var clock = new Clock();
clock.setTime(1231231233425);
console.log(clock);
var css = {
    margin: '0 0 0 10px',
    color: 'red',
    border: '1px solid grey'
};
