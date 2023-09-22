<template>
  <Spinner v-if="isLoading" />
  <div v-else>
    <div class="flex items-center justify-end">
      <input
        @input="searchByName()"
        v-model="name"
        type="text"
        class="border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Search..."
      />
    </div>
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
      api: "https://rickandmortyapi.com/api/character/",
      isLoading: false,
      currentPage: 1,
      error: null,
      searchInput: null,
      name: "",
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

      if (scrollY + windowHeight >= documentHeight - 100 && this.name === "") {
        this.currentPage++;
        this.getAllCharactersData();
      }
    },
    searchByName() {
      if (this.name !== "") {
        this.charactersData = [];
        axios
          .get(this.api + `?name=${this.name}`)
          .then((response) => {
            if (response.status === 200) {
              this.charactersData = response.data.results;
            } else if (response.status === 404) {
              this.charactersData = [];
            }
          })
          .catch((error) => {
            // this.error = {
            //   header: error.response.data.error,
            //   content: error.message,
            // };
          });
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
