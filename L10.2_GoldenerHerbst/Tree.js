"use strict";
var GoldenerHerbst;
(function (GoldenerHerbst) {
    class Tree {
        constructor(_min, _max, _minSize, _maxSize) {
            this.min = _min;
            this.max = _max;
            this.minSize = _minSize;
            this.maxSize = _maxSize;
        }
        draw() {
            GoldenerHerbst.crc2.save();
            GoldenerHerbst.crc2.translate(0, 0);
            let stepMin = 300;
            let stepMax = 100;
            let x = 0;
            do {
                let y = -this.min - Math.random() * (this.max - this.min);
                GoldenerHerbst.crc2.save();
                GoldenerHerbst.crc2.translate(x, y + (GoldenerHerbst.golden + 15));
                let yTree1 = -30;
                let yTree2 = -100;
                let treeColor = ["white"];
                let treeSize = this.minSize + Math.random() * (this.maxSize - this.minSize);
                GoldenerHerbst.crc2.scale(treeSize, treeSize);
                GoldenerHerbst.crc2.fillStyle = "brown";
                GoldenerHerbst.crc2.fillRect(0, 0, 22, -40);
                for (let z = 0; z < 4; z++) {
                    GoldenerHerbst.crc2.beginPath();
                    GoldenerHerbst.crc2.moveTo(-80, yTree1);
                    GoldenerHerbst.crc2.lineTo(92, yTree1);
                    GoldenerHerbst.crc2.lineTo(5, yTree2);
                    GoldenerHerbst.crc2.closePath();
                    GoldenerHerbst.crc2.fillStyle = treeColor[z];
                    GoldenerHerbst.crc2.fill();
                    yTree1 += -40;
                    yTree2 += -40;
                }
                x += stepMin + Math.random() * (stepMax - stepMin);
                GoldenerHerbst.crc2.restore();
            } while (x < GoldenerHerbst.crc2.canvas.width);
        }
    }
    GoldenerHerbst.Tree = Tree;
})(GoldenerHerbst || (GoldenerHerbst = {}));
//# sourceMappingURL=Tree.js.map