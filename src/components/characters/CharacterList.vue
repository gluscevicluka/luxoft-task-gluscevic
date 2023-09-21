<template>
  <Spinner/>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-12 character-row"
  >
    <CharacterItem
      v-for="character in charactersData"
      :key="character.id"
      :id="character.id"
      :name="character.name"
      :image="character.image"
      :created="character.created"
      :location="character.location.name"
      :status="character.status"
    />
  </div>
</template>

<script>
import CharacterItem from "./CharacterItem.vue";
import axios from "axios";
export default {
  components: {
    CharacterItem,
  },
  data() {
    return {
      charactersData: [],
      api: "https://rickandmortyapi.com/api/character",
      isLoading: false,
      currentPage: 1,
    };
  },
  methods: {
    getAllCharactersData() {
      this.isLoading = true;
      axios
        .get(this.api + `?page=${this.currentPage}`)
        .then((response) => {
          this.charactersData = response.data.results;
          console.log(this.charactersData);
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getAllCharactersData();
  },
};
</script>

<style scoped>
.character-row {
  padding: 0 1.5rem;
}
</style>
