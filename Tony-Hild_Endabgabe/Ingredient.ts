namespace KebapStore {
    
    
    export class Ingredient {
        ingredientType: IngredientType;
        ingredientPosition: IngredientPositionType;
        public amount: number;


        constructor(_ingredientType: IngredientType, _ingredientPosition: IngredientPositionType, _amount: number) {
            this.ingredientType = _ingredientType;
            this.ingredientPosition = _ingredientPosition;
            this.amount = _amount;
            
        }

        public draw(): void {
            switch (this.ingredientPosition) {

                //Back
                case IngredientPositionType.Back:
                    switch (this.ingredientType) {

                    case IngredientType.Rotkraut:
                    crc2.beginPath();
                    crc2.fillStyle = "#751EEC";
                    crc2.fillRect(470, 5, 60, 50);      //Rotkraut hinten
                    crc2.save();
                    crc2.restore();
                    break;

                    case IngredientType.Salat:
                    crc2.beginPath();
                    crc2.fillStyle = "#7EB343";
                    crc2.fillRect(405, 60, 60, 50);     //Salat hinten
                    crc2.save();
                    crc2.restore();
                    break;

                    case IngredientType.Soße:
                    crc2.beginPath();
                    crc2.fillStyle = "#D3D86A";
                    crc2.fillRect(470, 60, 60, 50);     //Soße hinten
                    crc2.save();
                    crc2.restore();
                    break;

                    case IngredientType.Tomate:
                    crc2.beginPath();
                    crc2.fillStyle = "#EC3D1E";
                    crc2.fillRect(405, 5, 60, 50);      //Tomate hinten
                    crc2.save();
                    crc2.restore();
                    break;

                    case IngredientType.Zwiebel:
                    crc2.beginPath();
                    crc2.fillStyle = "#DFE0C0";
                    crc2.fillRect(535, 60, 60, 50);     //Zwiebel hinten
                    crc2.save();
                    crc2.restore();
                    break;
                }

                //Front
                case IngredientPositionType.Front:
                    switch (this.ingredientType) {

                    case IngredientType.Rotkraut:
                    crc2.beginPath();
                    crc2.fillStyle = "#751EEC";
                    crc2.fillRect(345, 245, 80, 110);      //Rotkraut vorne
                    crc2.save();
                    crc2.restore();
                    break;

                    case IngredientType.Salat:
                    crc2.beginPath();
                    crc2.fillStyle = "#7EB343";
                    crc2.fillRect(5, 245, 80, 110);      //Salat vorne
                    crc2.save();
                    crc2.restore();
                    break;

                    case IngredientType.Soße:
                    crc2.beginPath();
                    crc2.fillStyle = "#D3D86A";
                    crc2.fillRect(90, 245, 80, 110);     //Soße vorne
                    crc2.save();
                    crc2.restore();
                    break;

                    case IngredientType.Tomate:
                    crc2.beginPath();
                    crc2.fillStyle = "#EC3D1E";
                    crc2.fillRect(260, 245, 80, 110);      //Tomate vorne
                    crc2.save();
                    crc2.restore();
                    break;

                    case IngredientType.Zwiebel:
                    crc2.beginPath();
                    crc2.fillStyle = "#DFE0C0";
                    crc2.fillRect(175, 245, 80, 110);     //Zwiebel vorne
                    crc2.save();
                    crc2.restore();
                    break;
                }
            }
        }
    }        
}