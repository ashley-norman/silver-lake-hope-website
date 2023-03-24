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
      </div>
    </div>
    <Content v-if="announcements.length > 0">
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
      <SimplePagination
        :page="page"
        :page-count="pageCount"
        @pageBack="pageBack"
        @pageForward="pageForward"
      />
    </Content>
    <Content v-else>
      <h3 class="my-4 flex justify-center">
        No Announcements for now, check back later!
      </h3>
    </Content>
  </article>
</template>

<script setup>
import Content from "~~/components/Content.vue"
import Announcement from "~~/components/Announcement.vue"
import SimplePagination from "~~/components/SimplePagination.vue"
import { getAllAnnounements } from "~~/lib/api"

const preview = usePreview()

const skip = ref(0)
const limit = ref(10)

const { data } = await useAsyncData(
  () => {
    return getAllAnnounements(
      { skip: skip.value, limit: limit.value },
      preview.value
    )
  },
  { watch: [skip, limit, preview] }
)

const announcements = computed(() => data.value?.items)
const total = computed(() => data.value?.total || 0)
const page = computed(() => Math.floor(skip.value / limit.value) + 1)
const pageCount = computed(() => Math.ceil(total.value / limit.value))

const pageBack = () => {
  const newSkip = skip.value - limit.value
  if (newSkip < 0) skip.value = 0
  else skip.value = newSkip
}
const pageForward = () => {
  const newSkip = skip.value + limit.value
  if (newSkip > total.value) skip.value = total.value
  else skip.value = newSkip
}
</script>

<style scoped>
.page-header {
  height: 200px;
  max-height: 100vh;
  background-image: url(~~/assets/images/silver-lake-4.jpg);
  background-size: cover;
  background-position: 50% 60%;
  filter: grayscale(100%) contrast(200%);
}
</style>
