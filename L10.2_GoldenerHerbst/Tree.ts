namespace GoldenerHerbst {

    export class Tree {

        min: number;
        max: number;
        minSize: number;
        maxSize: number;

        constructor (_min: number, _max: number, _minSize: number, _maxSize: number) {
            this.min = _min;
            this.max = _max;
            this.minSize = _minSize;
            this.maxSize = _maxSize;
        }
        draw (): void {
            crc2.save();
            crc2.translate(0, 0);
            let stepMin: number = 300;
            let stepMax: number = 100;
            let x: number = 0;


            do {
                let y: number = -this.min - Math.random() * (this.max - this.min);
                crc2.save();
                crc2.translate(x, y + (golden + 15));

                let yTree1: number = -30;
                let yTree2: number = -100;
                let treeColor: string[] = ["white"];
                let treeSize: number = this.minSize + Math.random() * (this.maxSize - this.minSize);

                crc2.scale(treeSize, treeSize);
                crc2.fillStyle = "brown";
                crc2.fillRect(0, 0, 22, -40);

                for (let z: number = 0; z < 4; z++) {
                    crc2.beginPath();
                    crc2.moveTo(-80, yTree1);
                    crc2.lineTo(92, yTree1);
                    crc2.lineTo(5, yTree2);
                    crc2.closePath();
                    crc2.fillStyle = treeColor[z];
                    crc2.fill();

                    yTree1 += -40;
                    yTree2 += -40;
                }
                x += stepMin + Math.random() * (stepMax - stepMin);
                crc2.restore();
            } while (x < crc2.canvas.width);
            
        }
    }
}