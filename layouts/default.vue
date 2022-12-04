<template>
  <div>
    <header>
      <nav id="main-menu" class="main-menu bg-cyan-900" aria-label="main menu">
        <ul class="flex justify-center gap-3 text-white">
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
            <NuxtLink to="/water-test-results" class="p-4"
              >Water Test Results</NuxtLink
            >
          </li>
          <li class="hover:bg-white/25">
            <NuxtLink to="/bylaws" class="p-4">Bylaws/Policies</NuxtLink>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
    <footer>footer</footer>
  </div>
</template>

<style scoped>
.main-menu li {
  cursor: pointer;
}
.main-menu a {
  display: block;
}
</style>
