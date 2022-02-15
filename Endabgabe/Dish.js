"use strict";
var KebapStore;
(function (KebapStore) {
    class Dish {
        constructor(_crc2, _dishType) {
            console.log("dish constructor");
            this.crc2 = _crc2;
            this.dishType = _dishType;
        }
        draw() {
            console.log("sketch Dish");
            switch (this.dishType) {
                case KebapStore.DishType.Döner:
                    KebapStore.crc2.beginPath();
                    KebapStore.crc2.fillStyle = "#BF882E";
                    KebapStore.crc2.fillRect(150, 83, 65, 32); //Döner
                    KebapStore.crc2.save();
                    KebapStore.crc2.restore();
                    break;
                case KebapStore.DishType.Falafel:
                    KebapStore.crc2.beginPath();
                    KebapStore.crc2.fillStyle = "#BF882E";
                    KebapStore.crc2.fillRect(150, 8, 65, 32); //Falafel
                    KebapStore.crc2.save();
                    KebapStore.crc2.restore();
                    break;
                case KebapStore.DishType.Yufka:
                    KebapStore.crc2.beginPath();
                    KebapStore.crc2.fillStyle = "#BF882E";
                    KebapStore.crc2.fillRect(150, 45.5, 65, 32); //Yufka
                    KebapStore.crc2.save();
                    KebapStore.crc2.restore();
                    break;
            }
        }
    }
    KebapStore.Dish = Dish;
})(KebapStore || (KebapStore = {}));
//# sourceMappingURL=Dish.js.map