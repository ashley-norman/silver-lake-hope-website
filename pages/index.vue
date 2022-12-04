<template>
  <div>
    <div class="hero">
      <div class="logo">
        <h1 class="text-lg">Silver Lake</h1>
        <h2>Hope, NJ</h2>
      </div>
      <div>Hero image here</div>
    </div>

    <main>
      <section id="overview">
        <h1 class="text-5xl">Overview</h1>
        <p>This is the overview</p>
        <h2>History</h2>
        <p>History lesson incoming</p>
      </section>
      <section id="tshirts">
        <h1>T-Shirts</h1>
        <p>We sell them.</p>
      </section>
      <section id="announcements">
        <h1>Announcements</h1>
        <div v-for="(announcement, i) in announcements" :key="i">
          <h2>{{ announcement.title }}</h2>
          <p>{{ announcement.publishDate }}</p>
        </div>
      </section>
      <section id="contact">
        <h1>Contact Us</h1>
      </section>
    </main>
  </div>
</template>

<script setup>
import { getAllAnnounements } from "~~/lib/api"

const { data: announcements } = await useAsyncData(() => {
  return getAllAnnounements()
})
</script>
