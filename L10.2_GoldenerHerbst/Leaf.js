"use strict";
var GoldenerHerbst;
(function (GoldenerHerbst) {
    class Leaf extends GoldenerHerbst.Moveables {
        constructor(_position, _fillColor, _shape) {
            super(_position);
            this.velocity = new GoldenerHerbst.Vector(0, 0);
            this.velocity.random(100, 400);
            this.fillColor = _fillColor;
            this.shape = _shape;
        }
        draw() {
            GoldenerHerbst.crc2.save();
            GoldenerHerbst.crc2.translate(this.position.x, this.position.y);
            GoldenerHerbst.crc2.beginPath();
            GoldenerHerbst.crc2.fillStyle = this.fillColor;
            // check shape
            switch (this.shape) {
                case 0:
                    this.drawShape0();
                    break;
                case 1:
                    this.drawShape1();
                    break;
                case 2:
                    this.drawShape2();
                    break;
                default:
                    break;
            }
            GoldenerHerbst.crc2.closePath();
            GoldenerHerbst.crc2.fill();
            GoldenerHerbst.crc2.restore();
        }
        drawShape0() {
            GoldenerHerbst.crc2.bezierCurveTo(1, 1, 30, 30, 30, 20);
        }
        drawShape1() {
            GoldenerHerbst.crc2.ellipse(10, 10, 9, 6, -10, 20, 40);
        }
        drawShape2() {
            GoldenerHerbst.crc2.ellipse(10, 10, 9, 6, -10, 20, 40, true);
        }
    }
    GoldenerHerbst.Leaf = Leaf;
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=Leaf.js.map