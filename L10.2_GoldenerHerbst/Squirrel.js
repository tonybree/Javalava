"use strict";
var GoldenerHerbst;
(function (GoldenerHerbst) {
    class Squirrel {
        constructor(_position, _fillColor) {
            this.position = _position;
            this.fillColor = _fillColor;
        }
        draw() {
            GoldenerHerbst.crc2.save();
            GoldenerHerbst.crc2.fillStyle = "black";
            GoldenerHerbst.crc2.beginPath();
            GoldenerHerbst.crc2.fillStyle = this.fillColor;
            GoldenerHerbst.crc2.arc(320, 450, 10, 0, 2 * Math.PI);
            GoldenerHerbst.crc2.closePath();
            GoldenerHerbst.crc2.fill();
            /*body*/
            GoldenerHerbst.crc2.beginPath();
            GoldenerHerbst.crc2.fillStyle = this.fillColor;
            GoldenerHerbst.crc2.moveTo(320, 450);
            GoldenerHerbst.crc2.quadraticCurveTo(290, 500, 320, 500);
            GoldenerHerbst.crc2.moveTo(320, 500);
            GoldenerHerbst.crc2.quadraticCurveTo(350, 500, 320, 450);
            GoldenerHerbst.crc2.fill();
            /*feet*/
            GoldenerHerbst.crc2.beginPath();
            GoldenerHerbst.crc2.fillStyle = this.fillColor;
            GoldenerHerbst.crc2.arc(310, 500, 5, 0, 2 * Math.PI);
            GoldenerHerbst.crc2.arc(330, 500, 5, 0, 2 * Math.PI);
            GoldenerHerbst.crc2.closePath();
            GoldenerHerbst.crc2.fill();
            /*ears*/
            GoldenerHerbst.crc2.beginPath();
            GoldenerHerbst.crc2.fillStyle = this.fillColor;
            GoldenerHerbst.crc2.arc(313, 445, 5, 0, 2 * Math.PI);
            GoldenerHerbst.crc2.arc(328, 445, 5, 0, 2 * Math.PI);
            GoldenerHerbst.crc2.closePath();
            GoldenerHerbst.crc2.fill();
            /*tail*/
            GoldenerHerbst.crc2.beginPath();
            GoldenerHerbst.crc2.fillStyle = this.fillColor;
            GoldenerHerbst.crc2.moveTo(330, 495);
            GoldenerHerbst.crc2.quadraticCurveTo(330, 460, 340, 450);
            GoldenerHerbst.crc2.moveTo(340, 450);
            GoldenerHerbst.crc2.quadraticCurveTo(370, 480, 330, 495);
            GoldenerHerbst.crc2.fill();
        }
    }
    GoldenerHerbst.Squirrel = Squirrel;
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=Squirrel.js.map