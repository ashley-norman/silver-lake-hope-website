<template>
  <article>
    <div class="page-header">
      <div
        class="logo bg-cyan-900/50 h-full w-full flex flex-col justify-center items-center"
      >
        <h1
          class="text-xl md:text-5xl text-white mb-0 p-3 bg-black/40 font-sans font-extralight tracking-widest"
        >
          Bylaws
        </h1>
        <a
          class="absolute bottom-0 right-0 text-white/5 text-xs"
          href="https://unsplash.com/@dkfra19?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Source
        </a>
      </div>
    </div>
    <Content class="bg-cyan-900 text-white pt-7">
      <h1 class="mb-0">Documents</h1>
    </Content>
    <Wave class="bg-cyan-900" />
    <Content>
      <div v-for="(document, index) in documents" :key="index" class="mb-2">
        <DocumentDisplay
          :title="document.title"
          :description="document.description"
          :source="document.documentation.url"
          :file-name="document.documentation.title"
        />
        <hr
          v-if="index < documents.length - 1"
          class="border-cyan-900/25 my-3"
        />
      </div>
    </Content>
  </article>
</template>

<script setup>
import Content from "~~/components/Content.vue"
import Wave from "~~/components/Wave.vue"
import DocumentDisplay from "~~/components/DocumentDisplay.vue"
import { getBylawsDocuments } from "~~/lib/api"

const preview = usePreview()

const { data: documents } = await useAsyncData(
  () => {
    return getBylawsDocuments(preview.value)
  },
  { watch: [preview] }
)
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
