"use strict";
var KebapStore;
(function (KebapStore) {
    class Worker {
        constructor(_isHappy) {
            this.isHappy = _isHappy;
        }
        move(_timeslice) {
            console.log("Customer come it");
        }
        draw() {
            console.log("sketch Worker1");
            switch (this.isHappy) {
                //Worker1
                case true:
                    KebapStore.crc2.beginPath();
                    KebapStore.crc2.fillStyle = "green";
                    KebapStore.crc2.arc(75, 190, 40, 0, 2 * Math.PI);
                    KebapStore.crc2.fill();
                    KebapStore.crc2.save();
                    break;
                case false:
                    KebapStore.crc2.beginPath();
                    KebapStore.crc2.fillStyle = "red";
                    KebapStore.crc2.arc(75, 190, 40, 0, 2 * Math.PI);
                    KebapStore.crc2.fill();
                    KebapStore.crc2.save();
                    break;
            }
            console.log("sketch Worker2");
            switch (this.isHappy) {
                //Worker2
                case true:
                    KebapStore.crc2.beginPath();
                    KebapStore.crc2.fillStyle = "green";
                    KebapStore.crc2.arc(330, 170, 40, 0, 2 * Math.PI);
                    KebapStore.crc2.fill();
                    KebapStore.crc2.save();
                    break;
                case false:
                    KebapStore.crc2.beginPath();
                    KebapStore.crc2.fillStyle = "red";
                    KebapStore.crc2.arc(330, 170, 40, 0, 2 * Math.PI);
                    KebapStore.crc2.fill();
                    KebapStore.crc2.save();
                    break;
            }
            console.log("sketch Worker3");
            switch (this.isHappy) {
                //Worker3
                case true:
                    KebapStore.crc2.beginPath();
                    KebapStore.crc2.fillStyle = "green";
                    KebapStore.crc2.arc(550, 190, 40, 0, 2 * Math.PI);
                    KebapStore.crc2.fill();
                    KebapStore.crc2.save();
                    break;
                case false:
                    KebapStore.crc2.beginPath();
                    KebapStore.crc2.fillStyle = "red";
                    KebapStore.crc2.arc(550, 190, 40, 0, 2 * Math.PI);
                    KebapStore.crc2.fill();
                    KebapStore.crc2.save();
                    break;
            }
        }
    }
    KebapStore.Worker = Worker;
})(KebapStore || (KebapStore = {}));
//# sourceMappingURL=Worker.js.map