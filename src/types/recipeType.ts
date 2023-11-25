export interface Recipe {
  recipeId: number;
  title: string;
  image: string;
  summary: string;
  instructions: string;
  sourceUrl: string;
  ingredients?: RecipeIngredient[];
  nutrition?: NutritionInformation;
}

export interface Ingredient {
  ingredientId: number;
  name: string;
}

export interface RecipeIngredient {
  recipeId: number;
  ingredientId: number;
  quantity: string;
}

export interface NutritionInformation {
  nutritionId: number;
  recipeId: number;
  calories: number;
  protein: number;
  carbohydrates: number;
  fats: number;
}

export interface RecipeDetailsProps {
  recipeId: number | null;
  recipeDetails: Recipe | null;
  onClose: () => void;
}


export interface RecipeSearchProps {
  ingredient: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface RecipeListProps {
  recipes: Recipe[];
  handleRecipeClick: (recipeId: number) => void;
}

