<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mb-6">
    <img class="w-full" :src="this.image" :alt="this.name" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ this.name }}</div>
    </div>
    <div class="px-6 pt-4 pb-2">
      <div class="flex items-center">
        <div>Status:</div>
        &nbsp;
        <div
          class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"
          :class="getStatusColor(this.status)"
        >
          {{ this.status }}
        </div>
      </div>
      <div class="flex">
        <div>Creation time:</div>
        <div
          class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"
        >
          {{ formattedDate }}
        </div>
      </div>
      <div class="flex">
        <div>Location:</div>
        <div
          class="inline-block rounded-full px-3 py-1 text-sm font-semibold text-black-700 mr-2 mb-2"
        >
          {{ this.location }}
        </div>
      </div>
      <router-link
        :to="'/character/' + this.id"
        class="block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded mt-6 w-full text-center uppercase"
      >
        More Details
      </router-link>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
    created: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    getStatusColor(status) {
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
    },
  },
  computed: {
    formattedDate() {
      const date = new Date(this.created);

      const formattedDate = format(date, "d. MMMM yyyy HH:mm:ss");

      return formattedDate;
    },
  },
};
</script>
