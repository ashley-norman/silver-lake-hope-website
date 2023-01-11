<template>
  <div class="bg-neutral-50 flex flex-col min-h-screen">
    <header>
      <nav
        id="main-menu"
        class="main-menu bg-cyan-900 text-white absolute md:fixed w-full z-10 shadow-xl"
        aria-label="main menu"
      >
        <div class="w-full flex justify-between items-center md:hidden h-full">
          <NuxtLink to="/" class="px-3 uppercase !no-underline">
            Silver Lake
          </NuxtLink>
          <button
            class="hamburger hamburger--spin"
            :class="{ 'is-active': showMenu }"
            type="button"
            aria-label="Menu"
            aria-controls="navigation"
            :aria-expanded="showMenu"
            @click="toggleNavbar"
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div
          id="navigation"
          :class="{ hidden: !showMenu, flex: showMenu }"
          class="md:flex md:flex-grow md:justify-center"
        >
          <ul class="flex flex-col md:flex-wrap md:flex-row md:gap-3">
            <li class="hover:bg-white/25">
              <NuxtLink to="/" class="p-4">Home</NuxtLink>
            </li>
            <li class="hover:bg-white/25">
              <NuxtLink to="/membership" class="p-4">Membership</NuxtLink>
            </li>
            <li class="hover:bg-white/25">
              <NuxtLink to="/reservations" class="p-4">Reservations</NuxtLink>
            </li>
            <li class="hover:bg-white/25">
              <NuxtLink to="/water-test-results" class="p-4">
                Water Test Results
              </NuxtLink>
            </li>
            <li class="hover:bg-white/25">
              <NuxtLink to="/bylaws" class="p-4">Bylaws/Policies</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <div class="grow">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, watch } from "vue"
import { useRoute } from "vue-router"

import Footer from "~~/components/Footer.vue"

const route = useRoute()

watch(route, () => {
  showMenu.value = false
})

const showMenu = ref(false)

const toggleNavbar = () => {
  showMenu.value = !showMenu.value
}
</script>

<style scoped lang="scss">
header {
  height: 56px;
}
.main-menu li {
  cursor: pointer;
}
.main-menu a {
  display: block;
}
a.router-link-exact-active {
  text-decoration: underline;
}
.hamburger {
  &-inner,
  &.is-active &-inner {
    &,
    &::before,
    &::after {
      background-color: #fff;
    }
  }
}
</style>
