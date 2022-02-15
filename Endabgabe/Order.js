"use strict";
var KebapStore;
(function (KebapStore) {
    class Order {
        constructor(_dishType, _ingredients) {
            this.dishType = _dishType;
            this.ingredients = _ingredients;
        }
        draw() {
            console.log("sketch Order");
            KebapStore.crc2.beginPath();
            KebapStore.crc2.lineWidth = 4;
            KebapStore.crc2.strokeStyle = "black";
            KebapStore.crc2.fillStyle = "white";
            KebapStore.crc2.strokeRect(140, 370, 200, 100);
            KebapStore.crc2.fillRect(140, 370, 200, 100);
            KebapStore.crc2.stroke();
            KebapStore.crc2.fill();
            KebapStore.crc2.save();
        }
    }
    KebapStore.Order = Order;
})(KebapStore || (KebapStore = {}));
//# sourceMappingURL=Order.js.map