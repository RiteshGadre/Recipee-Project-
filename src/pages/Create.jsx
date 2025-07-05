import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { recipeContext } from '../contexts/RecipeContext';
import {nanoid} from 'nanoid'

const Create = () => {
  const {register, handleSubmit, reset} = useForm();
  const {recipeCollection, setRecipeCollection} = useContext(recipeContext);
  const onSubmit = (data) => {
    
    data.id = nanoid();
    const ingredients = data.ingredients.split(', ');
    data.ingredients = ingredients;
    const process = data.process.split(', ');
    data.process = process;
    console.log(data);
    setRecipeCollection(prev => [...prev, data]);
    reset();
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-800 p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6">
        <h2 className="text-2xl font-semibold text-center text-green-400">Create a New Recipe</h2>

        <input
          {...register('title')}
          placeholder="Recipe Name"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          {...register('image')}
          placeholder="Image URL"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          {...register('ingredients')}
          placeholder="Ingredients"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 outline-none focus:ring-2 focus:ring-green-400"
        />

        <textarea
          {...register('process')}
          placeholder="Enter Cooking Process"
          rows={5}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-2 px-4 outline-none resize-none focus:ring-2 focus:ring-green-400"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-lg transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  )
}

export default Create
