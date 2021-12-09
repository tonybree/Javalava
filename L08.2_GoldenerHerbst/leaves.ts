namespace L08_GoldenerHerbst {

    export abstract class Flower {
        protected centerX: number;
        protected centerY: number;
        protected position: Vector;
        protected radius: number;
        protected color: string;
        protected nectarLevel: number;

        constructor (_position: Vector) {
            
            let centerX: number = Math.random() * crc2.canvas.width + 0;
            let centerY: number = 560;
            this.radius = 70;
            this.position = new Vector (centerX, centerY);
            
        }
        

        public draw(): void {
            console.log("zeichne Blätter");
        }

        /*draw (_crc2: CanvasRenderingContext2D): void {
            _crc2.beginPath();
            _crc2.moveTo(this.centerX, this.centerY);
            _crc2.lineTo(this.centerX, this.centerY + 80);
            _crc2.strokeStyle = "darkgreen";
            _crc2.lineWidth = 5;
            _crc2.stroke();
            _crc2.closePath();
            
            _crc2.beginPath();
            for (let i: number = 0; i < this.numPetals; i++) {
                let theta1: number = ((Math.PI * 2) / this.numPetals) * (i + 1);
                let theta2: number = ((Math.PI * 2) / this.numPetals) * (i);

                let x1: number = (this.radius * Math.sin(theta1)) + this.centerX;
                let y1: number = (this.radius * Math.cos(theta1)) + this.centerY;
                let x2: number = (this.radius * Math.sin(theta2)) + this.centerX;
                let y2: number = (this.radius * Math.cos(theta2)) + this.centerY;

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
        }*/
    }
}