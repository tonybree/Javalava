"use strict";
var KebapStore;
(function (KebapStore) {
    class Ingredient {
        constructor(_ingredientType, _ingredientPosition) {
            this.ingredientType = _ingredientType;
            this.ingredientPosition = _ingredientPosition;
        }
        draw() {
            switch (this.ingredientPosition) {
                //Back
                case KebapStore.IngredientPositionType.Back:
                    switch (this.ingredientType) {
                        case KebapStore.IngredientType.Rotkraut:
                            KebapStore.crc2.beginPath();
                            KebapStore.crc2.fillStyle = "#751EEC";
                            KebapStore.crc2.fillRect(470, 5, 60, 50); //Rotkraut hinten
                            KebapStore.crc2.save();
                            KebapStore.crc2.restore();
                            break;
                        case KebapStore.IngredientType.Salat:
                            KebapStore.crc2.beginPath();
                            KebapStore.crc2.fillStyle = "#7EB343";
                            KebapStore.crc2.fillRect(405, 60, 60, 50); //Salat hinten
                            KebapStore.crc2.save();
                            KebapStore.crc2.restore();
                            break;
                        case KebapStore.IngredientType.Soße:
                            KebapStore.crc2.beginPath();
                            KebapStore.crc2.fillStyle = "#D3D86A";
                            KebapStore.crc2.fillRect(470, 60, 60, 50); //Soße hinten
                            KebapStore.crc2.save();
                            KebapStore.crc2.restore();
                            break;
                        case KebapStore.IngredientType.Tomate:
                            KebapStore.crc2.beginPath();
                            KebapStore.crc2.fillStyle = "#EC3D1E";
                            KebapStore.crc2.fillRect(405, 5, 60, 50); //Tomate hinten
                            KebapStore.crc2.save();
                            KebapStore.crc2.restore();
                            break;
                        case KebapStore.IngredientType.Zwiebel:
                            KebapStore.crc2.beginPath();
                            KebapStore.crc2.fillStyle = "#DFE0C0";
                            KebapStore.crc2.fillRect(535, 60, 60, 50); //Zwiebel hinten
                            KebapStore.crc2.save();
                            KebapStore.crc2.restore();
                            break;
                    }
                //Front
                case KebapStore.IngredientPositionType.Front:
                    switch (this.ingredientType) {
                        case KebapStore.IngredientType.Rotkraut:
                            KebapStore.crc2.beginPath();
                            KebapStore.crc2.fillStyle = "#751EEC";
                            KebapStore.crc2.fillRect(345, 245, 80, 110); //Rotkraut vorne
                            KebapStore.crc2.save();
                            KebapStore.crc2.restore();
                            break;
                        case KebapStore.IngredientType.Salat:
                            KebapStore.crc2.beginPath();
                            KebapStore.crc2.fillStyle = "#7EB343";
                            KebapStore.crc2.fillRect(5, 245, 80, 110); //Salat vorne
                            KebapStore.crc2.save();
                            KebapStore.crc2.restore();
                            break;
                        case KebapStore.IngredientType.Soße:
                            KebapStore.crc2.beginPath();
                            KebapStore.crc2.fillStyle = "#D3D86A";
                            KebapStore.crc2.fillRect(90, 245, 80, 110); //Soße vorne
                            KebapStore.crc2.save();
                            KebapStore.crc2.restore();
                            break;
                        case KebapStore.IngredientType.Tomate:
                            KebapStore.crc2.beginPath();
                            KebapStore.crc2.fillStyle = "#EC3D1E";
                            KebapStore.crc2.fillRect(260, 245, 80, 110); //Tomate vorne
                            KebapStore.crc2.save();
                            KebapStore.crc2.restore();
                            break;
                        case KebapStore.IngredientType.Zwiebel:
                            KebapStore.crc2.beginPath();
                            KebapStore.crc2.fillStyle = "#DFE0C0";
                            KebapStore.crc2.fillRect(175, 245, 80, 110); //Zwiebel vorne
                            KebapStore.crc2.save();
                            KebapStore.crc2.restore();
                            break;
                    }
            }
        }
    }
    KebapStore.Ingredient = Ingredient;
})(KebapStore || (KebapStore = {}));
//# sourceMappingURL=Ingredient.js.map