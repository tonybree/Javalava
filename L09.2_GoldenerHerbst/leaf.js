"use strict";
var L09_GoldenerHerbst;
(function (L09_GoldenerHerbst) {
    class Leaf extends L09_GoldenerHerbst.Moveables {
        constructor(_position, _velocity) {
            super(_position, new L09_GoldenerHerbst.Vector(0, 0));
            this.velocity.fly(100, 200);
        }
        drawLeaf() {
            for (let i = 0; i < 50; i++) {
                let x = Math.random() * 800;
                let y = Math.random() * (-100);
                L09_GoldenerHerbst.crc2.save();
                L09_GoldenerHerbst.crc2.translate(x, y);
                L09_GoldenerHerbst.crc2.fillStyle = "#ad5810";
                L09_GoldenerHerbst.crc2.beginPath();
                L09_GoldenerHerbst.crc2.moveTo(50, 580);
                L09_GoldenerHerbst.crc2.quadraticCurveTo(30, 570, 10, 580);
                L09_GoldenerHerbst.crc2.moveTo(10, 580);
                L09_GoldenerHerbst.crc2.quadraticCurveTo(30, 590, 50, 580);
                L09_GoldenerHerbst.crc2.fill();
                L09_GoldenerHerbst.crc2.restore();
            }
        }
    }
    L09_GoldenerHerbst.Leaf = Leaf;
})(L09_GoldenerHerbst || (L09_GoldenerHerbst = {}));
//# sourceMappingURL=leaf.js.map