namespace L09_GoldenerHerbst {

    export class Leaf extends Moveables {

        constructor (_position: Vector, _velocity: Vector) {
            super (_position, new Vector (0, 0));
            this.velocity.fly(100, 200);

        }
        drawLeaf(): void {

            for (let i: number = 0; i < 50; i++) {
                let x: number = Math.random() * 800;
                let y: number = Math.random() * (-100);

                crc2.save();
                crc2.translate(x, y);

                crc2.fillStyle = "#ad5810";

                crc2.beginPath();
                crc2.moveTo(50, 580);
                crc2.quadraticCurveTo(30, 570, 10, 580);
                crc2.moveTo(10, 580);
                crc2.quadraticCurveTo(30, 590, 50, 580);
                crc2.fill();

                crc2.restore();
            }
        } 
    }
}