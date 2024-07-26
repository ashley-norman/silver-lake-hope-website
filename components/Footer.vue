<template>
  <hr class="border-cyan-900/25 w-[98vw] mx-auto" />
  <section id="contact">
    <Content class="py-4 text-center">
      <h2 class="text-2xl mb-3">Contact Us</h2>
      <p>
        Have a question, comment, suggestion, or just want to say hi?
        <a
          href="patton478@gmail.com"
          class="underline hover:no-underline text-cyan-900"
        >
          Send us an email!
        </a>
      </p>
    </Content>
  </section>
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
            <a href="mailto:patton478@gmail.com">patton478@gmail.com</a>
          </dd>
          <dt class="uppercase mt-3">Address</dt>
          <a
            class="hover:underline"
            href="https://goo.gl/maps/NvPALEo6hE6BnGUe6"
            target="_blank"
          >
            <dd>13 Lake View Ave</dd>
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
  <div class="text-xs mx-auto">
    © Silver Lake Property Owner's Association, 2022-2023 | Website design and
    development by
    <a
      href="mailto:ashley.ansell@gmail.com"
      class="text-cyan-900 font-semibold"
    >
      Ashley
    </a>
  </div>
</template>

<script setup>
import Content from "~~/components/Content.vue"
</script>
