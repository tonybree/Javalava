"use strict";
var KebapStore;
(function (KebapStore) {
    class Customer {
        constructor(_position, _isHappy, _order) {
            super(_position);
            this.velocity.set(150, 0);
            this.isHappy = _isHappy;
            this.order = [];
        }
        draw() {
            console.log("sketch Customer");
            switch (this.isHappy) {
                //Customer
                case true:
                    KebapStore.crc2.beginPath();
                    KebapStore.crc2.fillStyle = "white";
                    KebapStore.crc2.arc(70, 420, 40, 0, 2 * Math.PI);
                    KebapStore.crc2.strokeStyle = "green";
                    KebapStore.crc2.stroke();
                    KebapStore.crc2.fill();
                    KebapStore.crc2.save();
                    KebapStore.crc2.restore();
                    break;
                case false:
                    KebapStore.crc2.beginPath();
                    KebapStore.crc2.fillStyle = "white";
                    KebapStore.crc2.arc(70, 420, 40, 0, 2 * Math.PI);
                    KebapStore.crc2.strokeStyle = "red";
                    KebapStore.crc2.stroke();
                    KebapStore.crc2.fill();
                    KebapStore.crc2.save();
                    KebapStore.crc2.restore();
                    break;
            }
        }
    }
    KebapStore.Customer = Customer;
})(KebapStore || (KebapStore = {}));
//# sourceMappingURL=Customer.js.map