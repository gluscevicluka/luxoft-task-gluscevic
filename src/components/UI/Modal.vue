<template>
  <div class="modal">
    <div class="flex justify-center items-center h-screen">
      <div class="modal-content">
        <h3 class="p-6 text-2xl font-bold border-b border-black mb-4">
          {{ this.header }}
        </h3>
        <p class="p-6">{{ this.content }}</p>
        <button
          class="block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 border border-gray-700 rounded mt-6 w-full text-center uppercase"
          @click="closeModal()"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    header: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  methods: {
    closeModal() {
        this.$emit('close-modal');
    },
  },
};
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

.modal .modal-content {
  width: 70vh;
  height: 30vh;
  text-align: left;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
