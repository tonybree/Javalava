"use strict";
var GoldenerHerbst;
(function (GoldenerHerbst) {
    class Flower {
        constructor(_color) {
            this.numPetals = 5;
            this.centerX = Math.random() * GoldenerHerbst.crc2.canvas.width + 0;
            this.centerY = 560;
            this.radius = 70;
            this.color = _color;
        }
        draw(_crc2) {
            _crc2.beginPath();
            _crc2.moveTo(this.centerX, this.centerY);
            _crc2.lineTo(this.centerX, this.centerY + 80);
            _crc2.strokeStyle = "darkgreen";
            _crc2.lineWidth = 5;
            _crc2.stroke();
            _crc2.closePath();
            _crc2.beginPath();
            for (let i = 0; i < this.numPetals; i++) {
                let theta1 = ((Math.PI * 2) / this.numPetals) * (i + 1);
                let theta2 = ((Math.PI * 2) / this.numPetals) * (i);
                let x1 = (this.radius * Math.sin(theta1)) + this.centerX;
                let y1 = (this.radius * Math.cos(theta1)) + this.centerY;
                let x2 = (this.radius * Math.sin(theta2)) + this.centerX;
                let y2 = (this.radius * Math.cos(theta2)) + this.centerY;
                _crc2.moveTo(this.centerX, this.centerY);
                _crc2.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
            }
            _crc2.closePath();
            _crc2.fillStyle = this.color;
            _crc2.fill();
            _crc2.beginPath();
            _crc2.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
            _crc2.closePath();
            _crc2.fillStyle = "#FFFF66";
            _crc2.fill();
            _crc2.strokeStyle = "white";
            _crc2.lineWidth = 1;
            _crc2.stroke();
        }
    }
    GoldenerHerbst.Flower = Flower;
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=Flower.js.map