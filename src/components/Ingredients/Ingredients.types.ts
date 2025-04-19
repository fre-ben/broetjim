export interface Ingredient {
  name: string;
  amount: number;
}

export interface Ingredients {
  flour: Ingredient;
  yeast: Ingredient;
  sugar: Ingredient;
  salt: Ingredient;
  water: Ingredient;
}
