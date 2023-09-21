<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12"
  >
    <CharacterItem />
    <CharacterItem />
    <CharacterItem />
    <CharacterItem />
  </div>
</template>

<script>
import CharacterItem from "./CharacterItem.vue";
export default {
  components: {
    CharacterItem,
  },
};
</script>
