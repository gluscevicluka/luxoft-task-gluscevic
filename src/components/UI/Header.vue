<template>
  <!-- Navigation bar -->
  <nav
    class="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
    data-te-navbar-ref
  >
    <div class="flex w-full flex-wrap items-center justify-between px-3">
      <div class="flex items-center">
        <!-- Hamburger menu button -->
        <button
          class="border-0 bg-transparent px-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContentX"
          aria-controls="navbarSupportedContentX"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <!-- Hamburger menu icon -->
          <span class="[&>svg]:w-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-7 w-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </button>
      </div>

      <!-- Navigation links -->
      <div
        class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto justify-center"
        id="navbarSupportedContentX"
        data-te-collapse-item
      >
        <ul
          class="flex flex-col lg:flex-row justify-center"
          data-te-navbar-nav-ref
        >
          <li class="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
            <router-link
              to="/"
              class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 dark:hover:text-white dark:focus:text-white lg:p-2 [&.active]:text-black/90"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Homepage</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="bg-gray-200 py-16 text-center">
    <h1 class="text-4xl font-extrabold text-gray-800 mb-4">Rick and Morty</h1>
    <p class="text-lg text-gray-600">Welcome to the world of Rick and Morty</p>
  </div>
</template>
