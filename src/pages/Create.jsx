import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { recipeContext } from '../contexts/RecipeContext';
import { nanoid } from 'nanoid';

const Create = () => {
  const { register, handleSubmit, reset } = useForm();
  const { recipeCollection, setRecipeCollection } = useContext(recipeContext);

  const onSubmit = (data) => {
    data.id = nanoid();
    data.ingredients = data.ingredients.split(', ').map(i => i.trim());
    data.process = data.process.split(', ').map(p => p.trim());
    data.category = data.category;
    console.log(data);
    setRecipeCollection(prev => [...prev, data]);
    reset();
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-green-400">Create a New Recipe</h2>

        <input
          {...register('title', { required: true })}
          placeholder="Enter recipe name"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-green-400"
        />

        <select
          {...register('category', { required: true })}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-green-400"
        >
          <option value="">-- Select Category --</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
        </select>

        <input
          {...register('image')}
          placeholder="Enter image URL"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-green-400"
        />

        <input
          {...register('ingredients', { required: true })}
          placeholder="Ingredients (comma separated)"
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 outline-none focus:ring-2 focus:ring-green-400"
        />

        <textarea
          {...register('process', { required: true })}
          placeholder="Cooking process (comma separated steps)"
          rows={5}
          className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 outline-none resize-none focus:ring-2 focus:ring-green-400"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-lg transition duration-300"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default Create;
