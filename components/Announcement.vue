<template>
  <div class="border border-cyan-900/75 p-4 rounded">
    <h2 class="text-3xl mb-0">{{ props.title }}</h2>
    <p class="text-cyan-900 text-sm mb-2">
      Published on
      {{ getFormattedDate(props.publishDate) }}
    </p>
    <hr class="border-cyan-900/25 mx-auto" />
    <RichTextRenderer :document="props.content.json" />
  </div>
</template>

<script setup>
import RichTextRenderer from "contentful-rich-text-vue-renderer"
import { format } from "date-fns"

const props = defineProps({
  title: String,
  publishDate: String,
  content: Object,
})

const getFormattedDate = (date) => format(new Date(date), "MM/dd/yyyy")
</script>
