namespace KebapStore {
    
    export class Dish {
        dishType: DishType;

        constructor(_dishType: DishType) {
            console.log("dish constructor");
            this.dishType = _dishType;
            
        }

        public draw(): void{
            console.log("sketch Dish");
            switch (this.dishType) {

                case DishType.Döner:
                    crc2.beginPath();
                    crc2.fillStyle = "#BF882E";
                    crc2.fillRect(150, 83, 65, 32);     //Döner
                    crc2.save();
                    crc2.restore();
                    break;
                
                case DishType.Falafel:
                    crc2.beginPath();
                    crc2.fillStyle = "#BF882E";
                    crc2.fillRect(150, 8, 65, 32);      //Falafel
                    crc2.save();
                    crc2.restore();
                    break;
                
                case DishType.Yufka:
                    crc2.beginPath();
                    crc2.fillStyle = "#BF882E";
                    crc2.fillRect(150, 45.5, 65, 32);   //Yufka
                    crc2.save();
                    crc2.restore();
                    break;
            }
        }
    }
}