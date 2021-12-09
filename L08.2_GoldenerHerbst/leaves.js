"use strict";
var L08_GoldenerHerbst;
(function (L08_GoldenerHerbst) {
    class Flower {
        constructor(_position) {
            let centerX = Math.random() * L08_GoldenerHerbst.crc2.canvas.width + 0;
            let centerY = 560;
            this.radius = 70;
            this.position = new L08_GoldenerHerbst.Vector(centerX, centerY);
        }
        draw() {
            console.log("zeichne Blätter");
        }
    }
    L08_GoldenerHerbst.Flower = Flower;
})(L08_GoldenerHerbst || (L08_GoldenerHerbst = {}));
//# sourceMappingURL=leaves.js.map