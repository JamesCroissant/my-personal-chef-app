import React from 'react'
import { RecipeListProps } from '../types/recipeType';

const RecipeList: React.FC<RecipeListProps> = ({recipes, handleRecipeClick}) => {

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-center justify-center mt-6">
        {recipes.map((recipe) => (
          <div className="flex justify-center items-center">
            <div 
              key={recipe.recipeId}
              className="max-w-xs space-y-3 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 transition-transform duration-300 transform hover:scale-110"
              onClick={() => handleRecipeClick(recipe.recipeId)}
            >
              <img 
                src={recipe.image} 
                alt={recipe.title}
                className="rounded-xl"
              />
              <h3>{recipe.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default RecipeList