<template>
  <div class="container mx-auto my-12">
    <h1 class="text-2xl font-bold">Rick and Morty</h1>
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
