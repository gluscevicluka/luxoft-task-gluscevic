<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg mb-6">
    <img
      class="w-full"
      src="https://v1.tailwindcss.com/img/card-top.jpg"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">Name</div>
    </div>
    <div class="px-6 pt-4 pb-2">
      <div>
        Status:
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#photography</span
        >
      </div>
      <div>
        creation time:
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#photography</span
        >
      </div>
      <div>
        Location:
        <span
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >#photography</span
        >
      </div>
      <router-link
        to="/"
        class="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-6 w-full text-center uppercase"
      >
        More Details
      </router-link>
    </div>
  </div>
</template>
