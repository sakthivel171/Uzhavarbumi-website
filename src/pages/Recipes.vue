<template>
  <section class="p-10 max-w-6xl 2xl:max-w-full mx-auto my-10">
   
    <h1 class="text-4xl font-montserrat font-medium mb-4 text-center"> Recipes</h1>
   <p class="px-4 lg:px-24 text-gray-500 text-lg leading-relaxed tracking-wide text-center mb-4" >“The people who give you their food give you their heart.”</p>
   <img src="../assets/banner-of-recipe-page.png" alt="Uzhavarbumi-banner-image" class="mx-auto my-14">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-6">
      <div
        v-for="(recipe, index) in recipes"
        :key="index"
        class="bg-white rounded-2xl  overflow-hidden shadow-lg transition">
        <img :src="recipe.image" :alt="recipe.name"  class="w-full h-48 object-cover 2xl:h-72"/>

        <div class="p-2 flex flex-col justify-between text-center">
         <p class="mt-2 text-gray-500 text-lg leading-relaxed">How to Prepare</p>
          <a :href="recipe.link" target="_blank">
             <h2 class="text-xl font-lato font-extralight mb-2 leading-relaxed tracking-wide hover:text-gray-600">{{ recipe.name }}</h2>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import recipes from "../data/Recipes.json";

export default {
  name: "Recipes",
  data() {
    return {
      recipes
    };
  }
};
</script>

<style scoped>
/* optional extra styles */
</style>
