<template>
  <hr />
  <footer class="p-9 bg-cyan-900 text-white">
    <div
      class="flex flex-col md:flex-row mx-auto gap-10 justify-center container"
    >
      <div class="grow">
        <h2 class="text-2xl">Silver Lake Property Owners Association</h2>
        <dl>
          <dt class="uppercase mt-3">Phone</dt>
          <dd class="hover:underline">
            <a href="tel:9084489421">(908) 448-9421</a>
          </dd>
          <dt class="uppercase mt-3">Email</dt>
          <dd class="hover:underline">
            <a href="mailto:SLPOA@yahoo.com">SLPOA@yahoo.com</a>
          </dd>
          <dt class="uppercase mt-3">Address</dt>
          <a
            class="hover:underline"
            href="https://goo.gl/maps/kE5YUYrTaqWkkHxU9"
            target="_blank"
          >
            <dd>11 Lakeview Ave</dd>
            <dd>Blairstown, NJ</dd>
          </a>
        </dl>
      </div>
      <div class="grow">
        <h2 class="text-2xl">Helpful Links</h2>
        <ul>
          <li class="hover:underline mt-3"><NuxtLink to="/">Home</NuxtLink></li>
          <li class="hover:underline mt-3">
            <NuxtLink to="/membership">Membership</NuxtLink>
          </li>
          <li class="hover:underline mt-3">
            <NuxtLink to="/reservations">Reservations</NuxtLink>
          </li>
          <li class="hover:underline mt-3">
            <NuxtLink to="/water-test-results">Water Test Results</NuxtLink>
          </li>
          <li class="hover:underline mt-3">
            <NuxtLink to="/bylaws">Bylaws/Policies</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
