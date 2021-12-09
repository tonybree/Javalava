"use strict";
var L08_GoldenerHerbst;
(function (L08_GoldenerHerbst) {
    class Bee extends Moveables {
        constructor(_position, _velocity) {
            super(_position, new L08_GoldenerHerbst.Vector(0, 0));
            this.velocity.fly(100, 200);
        }
        draw() {
            L08_GoldenerHerbst.crc2.save();
            L08_GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            L08_GoldenerHerbst.crc2.beginPath();
            L08_GoldenerHerbst.crc2.fillStyle = "yellow";
            L08_GoldenerHerbst.crc2.ellipse(this.position.x, this.position.y, 15, 20, Math.PI / 2, 0, 2 * Math.PI);
            L08_GoldenerHerbst.crc2.arc(this.position.x + 20, this.position.y - 5, 10, 0, 2 * Math.PI);
            L08_GoldenerHerbst.crc2.fill();
            L08_GoldenerHerbst.crc2.closePath();
            //streifen
            L08_GoldenerHerbst.crc2.beginPath();
            L08_GoldenerHerbst.crc2.fillStyle = "black";
            L08_GoldenerHerbst.crc2.ellipse(this.position.x, this.position.y, 15, 10, Math.PI / 2, 0, 1 * Math.PI);
            L08_GoldenerHerbst.crc2.fill();
            L08_GoldenerHerbst.crc2.closePath();
            //Flügel Biene
            L08_GoldenerHerbst.crc2.beginPath();
            L08_GoldenerHerbst.crc2.fillStyle = "lightBlue";
            L08_GoldenerHerbst.crc2.ellipse(this.position.x - 10, this.position.y - 20, 8, 20, Math.PI / -5, 0, 2 * Math.PI);
            L08_GoldenerHerbst.crc2.fill();
            L08_GoldenerHerbst.crc2.closePath();
            L08_GoldenerHerbst.crc2.restore();
        }
    }
    L08_GoldenerHerbst.Bee = Bee;
})(L08_GoldenerHerbst || (L08_GoldenerHerbst = {}));
//# sourceMappingURL=bee.js.map