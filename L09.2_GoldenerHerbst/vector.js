"use strict";
var L09_GoldenerHerbst;
(function (L09_GoldenerHerbst) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x = this.x * _factor;
            this.y = this.y * _factor;
        }
        add(_addend) {
            this.x += _addend.x;
            this.y += _addend.y;
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        fly(_minLength, _maxLength) {
            let length = _minLength + Math.random() * (_maxLength - _minLength);
            let direction = Math.random() * 2 * Math.PI;
            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }
    }
    L09_GoldenerHerbst.Vector = Vector;
})(L09_GoldenerHerbst || (L09_GoldenerHerbst = {}));
//# sourceMappingURL=vector.js.map