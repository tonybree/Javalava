namespace KebapStore {

    export class Customer {
        public order: string[];
        position: Vector;
        velocity: Vector;
        isHappy: boolean;

        public constructor(_position: Vector, _isHappy: boolean, _order: String) {
            super(_position);
            this.velocity.set(150, 0);
            this.isHappy = _isHappy;
            this.order = [];

        }

        public move(_timeslice: number): void {
            super.move(_timeslice);

        }

        public draw(): void {
            console.log("sketch Customer");
            switch (this.isHappy) {

                //Customer
                case true:
                crc2.beginPath();
                crc2.fillStyle = "white";
                crc2.arc(70, 420, 40, 0, 2 * Math.PI);
                crc2.strokeStyle = "green";
                crc2.stroke();
                crc2.fill();
                crc2.save();
                crc2.restore();
                break;

                case false:
                crc2.beginPath();
                crc2.fillStyle = "white";
                crc2.arc(70, 420, 40, 0, 2 * Math.PI);
                crc2.strokeStyle = "red";
                crc2.stroke();
                crc2.fill();
                crc2.save();
                crc2.restore();
                break;

            }
        }
    }
}