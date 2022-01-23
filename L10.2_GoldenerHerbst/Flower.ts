namespace GoldenerHerbst {

    export class Flower {
        
        centerX: number;
        centerY: number;
        radius: number;
        numPetals: number;
        color: string;

        constructor (_color: string) {
            this.numPetals = 5;
            this.centerX = Math.random() * crc2.canvas.width + 0;
            this.centerY = 560;
            this.radius = 70;
            this.color = _color;
        }
        

        draw (crc2: CanvasRenderingContext2D): void {
            crc2.beginPath();
            crc2.moveTo(this.centerX, this.centerY);
            crc2.lineTo(this.centerX, this.centerY + 80);
            crc2.strokeStyle = "darkgreen";
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.closePath();
            
            crc2.beginPath();
            for (let i: number = 0; i < this.numPetals; i++) {
                let theta1: number = ((Math.PI * 2) / this.numPetals) * (i + 1);
                let theta2: number = ((Math.PI * 2) / this.numPetals) * (i);

                let x1: number = (this.radius * Math.sin(theta1)) + this.centerX;
                let y1: number = (this.radius * Math.cos(theta1)) + this.centerY;
                let x2: number = (this.radius * Math.sin(theta2)) + this.centerX;
                let y2: number = (this.radius * Math.cos(theta2)) + this.centerY;

                crc2.moveTo(this.centerX, this.centerY);
                crc2.bezierCurveTo(x1, y1, x2, y2, this.centerX, this.centerY);
            }

            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.centerX, this.centerY, this.radius / 5, 0, 2 * Math.PI, false);
            crc2.closePath();
            crc2.fillStyle = "#FFFF66";
            crc2.fill();
            crc2.strokeStyle = "white";
            crc2.lineWidth = 1;
            crc2.stroke();
        }
    }
}