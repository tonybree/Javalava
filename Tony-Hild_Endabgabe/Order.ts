namespace KebapStore {
    
    export class Order {
        dishType: DishType;
        ingredients: Ingredient[];

        constructor(_dishType: DishType, _ingredients: Ingredient[]) {
            this.dishType = _dishType;
            this.ingredients = _ingredients;
            
        }
    }
}
