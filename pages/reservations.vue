<template>
  <article>
    <div class="page-header">
      <div
        class="logo bg-cyan-900/50 h-full w-full flex flex-col justify-center items-center"
      >
        <h1
          class="text-xl md:text-5xl text-white mb-0 p-3 bg-black/40 font-sans font-extralight tracking-widest"
        >
          Reservations
        </h1>
        <a
          class="absolute bottom-0 right-0 text-white/5 text-xs"
          href="https://unsplash.com/@erothermel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Source
        </a>
      </div>
    </div>
    <Content class="bg-cyan-900 text-white pt-7">
      <h1 class="mb-4 text-4xl">Calendar</h1>
      <p>
        Below, view a read-only calendar with currently scheduled events. If you
        would like to schedule an event, or modify an existing event, please
        send an email to
        <a href="mailto:SLPOA@yahoo.com" class="underline hover:no-underline">
          SLPOA@yahoo.com
        </a>
      </p>
    </Content>
    <Wave class="bg-cyan-900" />
    <Content>
      <Calendar />
    </Content>
  </article>
</template>

<script setup>
import Content from "~~/components/Content.vue"
import Wave from "~~/components/Wave.vue"
import Calendar from "~~/components/Calendar.vue"
</script>

<style scoped>
.page-header {
  height: 200px;
  max-height: 100vh;
  background-image: url(~~/assets/images/calendar.jpg);
  background-size: cover;
  background-position: 50% 60%;
  filter: grayscale(100%) contrast(200%);
}
</style>
