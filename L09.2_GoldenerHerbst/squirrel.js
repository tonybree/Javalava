"use strict";
var L09_GoldenerHerbst;
(function (L09_GoldenerHerbst) {
    class Squirrel extends L09_GoldenerHerbst.Moveables {
        constructor(_position, _velocity) {
            super(_position, new L09_GoldenerHerbst.Vector(0, 0));
            this.velocity.fly(100, 200);
        }
        drawSquirrel() {
            L09_GoldenerHerbst.crc2.save();
            L09_GoldenerHerbst.crc2.fillStyle = "black";
            L09_GoldenerHerbst.crc2.beginPath();
            L09_GoldenerHerbst.crc2.arc(320, 450, 10, 0, 2 * Math.PI);
            L09_GoldenerHerbst.crc2.closePath();
            L09_GoldenerHerbst.crc2.fill();
            /*body*/
            L09_GoldenerHerbst.crc2.beginPath();
            L09_GoldenerHerbst.crc2.moveTo(320, 450);
            L09_GoldenerHerbst.crc2.quadraticCurveTo(290, 500, 320, 500);
            L09_GoldenerHerbst.crc2.moveTo(320, 500);
            L09_GoldenerHerbst.crc2.quadraticCurveTo(350, 500, 320, 450);
            L09_GoldenerHerbst.crc2.fill();
            /*feet*/
            L09_GoldenerHerbst.crc2.beginPath();
            L09_GoldenerHerbst.crc2.arc(310, 500, 5, 0, 2 * Math.PI);
            L09_GoldenerHerbst.crc2.arc(330, 500, 5, 0, 2 * Math.PI);
            L09_GoldenerHerbst.crc2.closePath();
            L09_GoldenerHerbst.crc2.fill();
            /*ears*/
            L09_GoldenerHerbst.crc2.beginPath();
            L09_GoldenerHerbst.crc2.arc(313, 445, 5, 0, 2 * Math.PI);
            L09_GoldenerHerbst.crc2.arc(328, 445, 5, 0, 2 * Math.PI);
            L09_GoldenerHerbst.crc2.closePath();
            L09_GoldenerHerbst.crc2.fill();
            /*tail*/
            L09_GoldenerHerbst.crc2.beginPath();
            L09_GoldenerHerbst.crc2.moveTo(330, 495);
            L09_GoldenerHerbst.crc2.quadraticCurveTo(330, 460, 340, 450);
            L09_GoldenerHerbst.crc2.moveTo(340, 450);
            L09_GoldenerHerbst.crc2.quadraticCurveTo(370, 480, 330, 495);
            L09_GoldenerHerbst.crc2.fill();
            L09_GoldenerHerbst.crc2.restore();
        }
    }
    L09_GoldenerHerbst.Squirrel = Squirrel;
})(L09_GoldenerHerbst || (L09_GoldenerHerbst = {}));
//# sourceMappingURL=squirrel.js.map