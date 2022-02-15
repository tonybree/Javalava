namespace KebapStore {

    export class Worker {
        position: Vector;
        velocity: Vector;
        task: Task;
        isHappy: boolean;

        constructor(_task: Task, _isHappy: boolean) {
            this.task = _task;
            this.isHappy = _isHappy;
            
        }

        move(_timeslice: number): void {
            console.log("Customer come it");
            this.position = new Vector(75, 190);
            this.velocity = new Vector(75, 190);
        }

            public draw(): void {
            console.log("sketch Worker1");
            switch (this.isHappy) {

                //Worker1
                case true:
                crc2.beginPath();
                crc2.fillStyle = "green";
                crc2.arc(75, 190, 40, 0, 2 * Math.PI);
                crc2.fill();
                crc2.save();
                break;

                case false:
                crc2.beginPath();
                crc2.fillStyle = "red";
                crc2.arc(75, 190, 40, 0, 2 * Math.PI);
                crc2.fill();
                crc2.save();
                break;

            }


            console.log("sketch Worker2");
            switch (this.isHappy) {

                //Worker2
                case true:
                crc2.beginPath();
                crc2.fillStyle = "green";
                crc2.arc(330, 170, 40, 0, 2 * Math.PI);
                crc2.fill();
                crc2.save();
                break;

                case false:
                crc2.beginPath();
                crc2.fillStyle = "red";
                crc2.arc(330, 170, 40, 0, 2 * Math.PI);
                crc2.fill();
                crc2.save();
                break;

            }


            console.log("sketch Worker3");
            switch (this.isHappy) {
            
                //Worker3
                case true:
                crc2.beginPath();
                crc2.fillStyle = "green";
                crc2.arc(550, 190, 40, 0, 2 * Math.PI);
                crc2.fill();
                crc2.save();
                break;

                case false:
                crc2.beginPath();
                crc2.fillStyle = "red";
                crc2.arc(550, 190, 40, 0, 2 * Math.PI);
                crc2.fill();
                crc2.save();
                break;

            }
        }
    }
}