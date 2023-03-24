<template>
  <div v-if="item != null" class="modal-overlay">
    <div class="modal p-8 relative">
      <h6 class="font-medium text-3xl">{{ props.item.eventTitle }}</h6>
      <p class="text-red-500 font-medium mb-4">
        {{ date }}
      </p>
      <dl v-if="props.item.eventType === 'Reservation'">
        <dt :class="dtClass">Family</dt>
        <dd>{{ props.item.family }}</dd>
        <dt :class="dtClass">Number of People</dt>
        <dd>{{ props.item.numberOfPeople }}</dd>
        <dt :class="dtClass">Description</dt>
        <dd>{{ description }}</dd>
      </dl>
      <dl v-else>
        <dt :class="dtClass">Description</dt>
        <dd>{{ description }}</dd>
      </dl>
      <button
        @click="emit('close')"
        class="absolute top-3 right-3 hover:cursor-pointer hover:bg-cyan-900/10 rounded-full px-3 py-1"
      >
        <fa-icon icon="fa-solid fa-close" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { format } from "date-fns-tz"

const props = defineProps({
  item: Object,
})
const emit = defineEmits(["close"])

const getFormattedDateTime = (dateTime) =>
  dateTime ? format(new Date(dateTime), "MM/dd/yyyy HH:mm zzz") : ""
const dtClass = "font-medium text-cyan-900"

const description = computed(
  () => props.item.description || "No description provided."
)
const date = computed(() => {
  if (props.item.allDayEvent) return "All Day Event"

  return `${getFormattedDateTime(
    Date.parse(props.item.startDateTime)
  )} - ${getFormattedDateTime(Date.parse(props.item.endDateTime))}`
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  background-color: white;
  height: 500px;
  width: 500px;
  margin-top: 10%;
  border-radius: 20px;
}

dl {
  display: grid;
  grid-template-columns: 10px auto;
  gap: 10px;
}
dt {
  grid-column-start: span 2;
}
dd {
  grid-column-start: 2;
}
</style>
