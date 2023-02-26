<template>
  <article>
    <div class="page-header">
      <div
        class="logo bg-cyan-900/50 h-full w-full flex flex-col justify-center items-center"
      >
        <h1
          class="text-xl md:text-5xl text-white mb-0 p-3 bg-black/40 font-sans font-extralight tracking-widest"
        >
          Announcements
        </h1>
        <a
          class="absolute bottom-0 right-0 text-white/5 text-xs"
          href="https://unsplash.com/@dkfra19?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Source
        </a>
      </div>
    </div>
    <Content>
      <div
        v-for="(announcement, index) in announcements"
        :key="index"
        class="my-4"
      >
        <Announcement
          :title="announcement.title"
          :publish-date="announcement.publishDate"
          :content="announcement.content"
        />
      </div>
    </Content>
  </article>
</template>

<script setup>
import Content from "~~/components/Content.vue"
import Announcement from "~~/components/Announcement.vue"
import { getAllAnnounements } from "~~/lib/api"

const { data: announcements } = await useAsyncData(() => {
  return getAllAnnounements()
})
</script>

<style scoped>
.page-header {
  height: 200px;
  max-height: 100vh;
  background-image: url(~~/assets/images/documents.jpg);
  background-size: cover;
  background-position: 50% 60%;
  filter: grayscale(100%) contrast(200%);
}
</style>