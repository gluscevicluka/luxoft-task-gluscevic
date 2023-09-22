<template>
  <div class="bg-gray-200 py-16 text-center">
    <h1 class="text-4xl font-extrabold text-gray-800 mb-4">Rick and Morty</h1>
    <p class="text-lg text-gray-600">Welcome to the world of Rick and Morty</p>
  </div>
  <div class="container mx-auto my-12">
    <CharacterList />
  </div>
</template>

<script>
import CharacterList from "../components/characters/CharacterList.vue";
export default {
  components: {
    CharacterList,
  },
};
</script>
