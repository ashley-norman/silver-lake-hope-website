<template>
  <div class="mb-3">
    <h2 class="mb-0">{{ title }}</h2>
    <p class="mb-2">{{ description }}</p>
    <div class="flex gap-1 mb-1">
      <button :class="buttonClasses" @click="toggleDocument">
        {{ documentText }}
      </button>
      <button :class="buttonClasses">
        <a :href="source" :download="fileName" target="_blank">
          <fa-icon icon="fa-solid fa-download" /> Download
        </a>
      </button>
    </div>

    <template v-if="showDocument">
      <SimplePagination
        :page="page"
        :page-count="pageCount"
        @pageBack="pageBack"
        @pageForward="pageForward"
      />

      <div class="border border-gray-300">
        <vue-pdf-embed ref="pdfRef" :source="source" :page="page" />
      </div>
    </template>
  </div>
</template>

<script setup>
import SimplePagination from "./SimplePagination.vue"

const props = defineProps({
  title: String,
  description: String,
  source: String,
  fileName: String,
})

const buttonClasses =
  "px-4 py-2 font-semibold text-sm bg-cyan-700 enabled:hover:bg-cyan-900 text-white rounded-full shadow-sm"
const circleButtonClasses = "px-3 disabled:opacity-75 "

const pdfRef = ref(null)
const showDocument = ref(false)
const page = ref(1)
const documentText = computed(() =>
  showDocument.value ? "Hide Document" : "Show Document"
)
const pageCount = computed(() => pdfRef.value?.pageCount)

const toggleDocument = () => {
  showDocument.value = !showDocument.value
}
const pageForward = () => {
  if (page.value < pageCount.value) {
    page.value = page.value + 1
  }
}
const pageBack = () => {
  if (page.value > 1) {
    page.value = page.value - 1
  }
}
</script>
