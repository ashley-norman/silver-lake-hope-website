<template>
  <div class="flex mb-1 justify-between items-end">
    <span class="text-sm">Page {{ page }} of {{ pageCount }}</span>
    <div class="flex gap-1">
      <button
        :disabled="page === 1"
        :class="[buttonClasses]"
        @click="emit('pageBack')"
      >
        <fa-icon icon="fa-solid fa-arrow-left" />
      </button>
      <button
        :disabled="page === pageCount"
        :class="[buttonClasses]"
        @click="emit('pageForward')"
      >
        <fa-icon icon="fa-solid fa-arrow-right" />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["page", "pageCount"])

const emit = defineEmits(["pageBack", "pageForward"])

const buttonClasses =
  "px-3 py-2 font-semibold text-sm bg-cyan-700 enabled:hover:bg-cyan-900 text-white rounded-full shadow-sm disabled:opacity-75"
</script>
