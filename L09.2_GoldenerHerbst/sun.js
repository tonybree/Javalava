"use strict";
var L09_GoldenerHerbst;
(function (L09_GoldenerHerbst) {
    class Sun {
        constructor(_x, _y) {
            this.position = new L09_GoldenerHerbst.Vector(_x, _y);
        }
        draw(_crc2) {
            let r1 = 25;
            let r2 = 80;
            let gradient = _crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
            gradient.addColorStop(0, "HSL(60, 100%, 90%, 1)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            gradient.addColorStop(1, "HSLA(60, 100%, 50%, 0)");
            _crc2.save();
            _crc2.translate(this.position.x, this.position.y);
            _crc2.fillStyle = gradient;
            _crc2.arc(0, 0, r2, 0, 2 * Math.PI);
            _crc2.fill();
            _crc2.restore();
        }
    }
    L09_GoldenerHerbst.Sun = Sun;
})(L09_GoldenerHerbst || (L09_GoldenerHerbst = {}));
//# sourceMappingURL=sun.js.map