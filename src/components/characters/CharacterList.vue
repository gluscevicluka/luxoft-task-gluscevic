<template>
  <Spinner v-if="isLoading" />
  <div
    v-else
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
  <Modal
    v-if="error"
    :header="error.header"
    :content="error.content"
    @close-modal="closeModal()"
  />
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
      error: null,
    };
  },
  methods: {
    getAllCharactersData() {
      if (this.currentPage === 1) {
        this.isLoading = true;
      }
      axios
        .get(this.api + `?page=${this.currentPage}`)
        .then((response) => {
          this.charactersData = [
            ...this.charactersData,
            ...response.data.results,
          ];
          this.isLoading = false;
        })
        .catch((error) => {
          this.error = {
            header: error.response.data.error,
            content: error.message,
          };
          this.isLoading = false;
        });
    },
    closeModal() {
      this.error = null;
      //...redirect to home page, but we have only one page :)
    },
    handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollY + windowHeight >= documentHeight - 100) {
        this.currentPage++;
        this.getAllCharactersData();
      }
    },
  },
  created() {
    this.getAllCharactersData();
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.character-row {
  padding: 0 1.5rem;
}
</style>
