"use strict";
var L08_GoldenerHerbst;
(function (L08_GoldenerHerbst) {
    class Mountain {
        constructor(_x, _y, _min, _max, _colorLow, _colorHigh) {
            this.position = new L08_GoldenerHerbst.Vector(_x, _y);
            this.min = _min;
            this.max = _max;
            this.colorLow = _colorLow;
            this.colorHigh = _colorHigh;
        }
        draw(_crc2) {
            let stepMin = 30;
            let stepMax = 80;
            let x = 0;
            _crc2.save();
            _crc2.translate(this.position.x, this.position.y);
            _crc2.beginPath();
            _crc2.moveTo(0, 0);
            _crc2.lineTo(0, -this.max);
            do {
                x += stepMin + Math.random() * (stepMax - stepMin);
                let y = -this.min - Math.random() * (this.max - this.min);
                _crc2.lineTo(x, y);
            } while (x < _crc2.canvas.width);
            _crc2.lineTo(x, 0);
            _crc2.closePath();
            let gradient = _crc2.createLinearGradient(0, 0, 0, -this.max);
            gradient.addColorStop(0, this.colorLow);
            gradient.addColorStop(1, this.colorHigh);
            _crc2.fillStyle = gradient;
            _crc2.fill();
            _crc2.restore();
        }
    }
    L08_GoldenerHerbst.Mountain = Mountain;
})(L08_GoldenerHerbst || (L08_GoldenerHerbst = {}));
//# sourceMappingURL=mountain.js.map