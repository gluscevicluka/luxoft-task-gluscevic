<template>
  <div class="container my-12">
    <h1 class="text-2xl font-bold text-center">Details</h1>
    <div class="max-w-2xl mx-auto p-4 mt-12 border border-black">
      <div
        class="bg-white shadow-md rounded-lg p-6 flex flex-col justify-center items-center text-center"
      >
        <img :src="getImage" :alt="getName" />
        <h1 class="text-2xl font-semibold mb-4">{{ getName }}</h1>

        <div class="mb-4">
          <h2 class="text-lg font-semibold">Status:</h2>
          <div
            class="rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"
            :class="getStatusClass(getStatus)"
          >
            {{ getStatus }}
          </div>
        </div>

        <div>
          <h2 class="text-lg font-semibold">Created time:</h2>
          <p>{{ formattedDate }}</p>
        </div>
        <div>
          <h2 class="text-lg font-semibold">Episode number:</h2>
          <p>{{ getEpisodeNumber }}</p>
        </div>
      </div>
      <router-link
        to="/"
        class="block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded mt-6 w-full text-center uppercase"
      >
        go back
      </router-link>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
import axios from "axios";
export default {
  data() {
    return {
      characterData: null,
      api: "https://rickandmortyapi.com/api/character/",
      isLoading: false,
    };
  },
  methods: {
    getCharacter() {
      const characterId = this.$route.params.id;
      axios
        .get(this.api + characterId)
        .then((response) => {
          this.characterData = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getStatusClass(status) {
      if (this.characterData !== null) {
        switch (status.toLowerCase()) {
          case "alive":
            return "bg-green-500";

          case "dead":
            return "bg-red-500";

          case "unknown":
            return "bg-gray-500";

          default:
            return null;
        }
      }
    },
  },
  computed: {
    formattedDate() {
      if (this.characterData !== null) {
        const date = new Date(this.characterData.created);

        const formattedDate = format(date, "d. MMMM yyyy HH:mm:ss");

        return formattedDate;
      }
    },
    getImage() {
      if (this.characterData !== null) {
        return this.characterData.image;
      }
    },
    getName() {
      if (this.characterData !== null) {
        return this.characterData.name;
      }
    },
    getStatus() {
      if (this.characterData !== null) {
        return this.characterData.status;
      }
    },
    getCreated() {
      if (this.characterData !== null) {
        return this.characterData.created;
      }
    },
    getEpisodeNumber() {
      if (this.characterData !== null) {
        return this.characterData.episode.length;
      }
    },
  },
  created() {
    this.getCharacter();
  },
};
</script>
