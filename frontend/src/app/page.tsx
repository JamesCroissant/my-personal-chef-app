'use client';

import RecipeDetails from '@/components/RecipeDetails';
import React, { useState, useEffect, FormEvent } from 'react';
import { Recipe, Ingredient, RecipeIngredient, NutritionInformation } from '../types/recipeType';
import RecipeList from '@/components/RecipeList';
import RecipeSearch from '@/components/RecipeSearch';
import NotFound from '@/components/NotFound';
import Loading from '@/components/Loading';

const Home: React.FC = () => {
  const [ingredient, setIngredient] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [recipeDetails, setRecipeDetails] = useState<Recipe | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [hasSearched, setHasSearched] = useState<boolean>(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIngredient(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHasSearched(true);
    fetchRecipes(ingredient);
  };

  const fetchRecipes = async (ingredient: string) => {
    if (!ingredient) return;
    try {
      setLoading(true);
      const response = await fetch(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredient}&number=20&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const recipes: Recipe[]  = await response.json();

      const formattedData = recipes.map((recipe: any) => ({  // ここでany使って良いのか
        ...recipe,
        recipeId: recipe.id,
      }));
      setRecipes(formattedData);
      setLoading(false);

    } catch (error) {
      console.error('Fetch error:', error);
      setLoading(false);
    }
  };

  const handleRecipeClick = (recipeId: number) => {
    setSelectedRecipeId(recipeId);
  };

  const handleCloseDialog = () => {
    setSelectedRecipeId(null);
  };

  const fetchRecipeDetails = async (recipeId: number): Promise<Recipe | null> => {
    try {
      const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=true&apiKey=${process.env.NEXT_PUBLIC_SPOONACULAR_API_KEY}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      return null;
    }
  };

  useEffect(() => {
    if (selectedRecipeId) {
      setRecipeDetails(null);
      fetchRecipeDetails(selectedRecipeId).then(setRecipeDetails);
    }
  }, [selectedRecipeId]);


  return (
    <>
      <RecipeSearch
        ingredient={ingredient}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      {loading ? (
        <Loading />
      ) : hasSearched && recipes.length > 0 ? (
        <RecipeList
          recipes={recipes}
          handleRecipeClick={handleRecipeClick}
        />
      ) : hasSearched && recipes?.length === 0 ? (
        <NotFound />
      ) : null}

      <RecipeDetails 
        recipeId={selectedRecipeId} 
        recipeDetails={recipeDetails}
        onClose={handleCloseDialog} 
      />

    </>
  );
};

export default Home;