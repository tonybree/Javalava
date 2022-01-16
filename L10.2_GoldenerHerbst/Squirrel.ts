namespace GoldenerHerbst {
    export class Squirrel {

        position: Vector;
        fillColor: string;

        constructor(_position: Vector, _fillColor: string) {
            
            this.position = _position;
            this.fillColor = _fillColor;
        }

        draw(): void {  
            crc2.save();
            crc2.fillStyle = "black";
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.arc (320, 450, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
    
            /*body*/
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.moveTo(320, 450);
            crc2.quadraticCurveTo(290, 500, 320, 500);
            crc2.moveTo(320, 500);
            crc2.quadraticCurveTo(350, 500, 320, 450);
            crc2.fill();
    
            /*feet*/
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.arc(310, 500, 5, 0, 2 * Math.PI);
            crc2.arc(330, 500, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
    
            /*ears*/
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.arc(313, 445, 5, 0, 2 * Math.PI);
            crc2.arc(328, 445, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
    
            /*tail*/
            crc2.beginPath();
            crc2.fillStyle = this.fillColor;
            crc2.moveTo(330, 495);
            crc2.quadraticCurveTo(330, 460, 340, 450);
            crc2.moveTo(340, 450);
            crc2.quadraticCurveTo(370, 480, 330, 495);
            crc2.fill();
        }
    }
}