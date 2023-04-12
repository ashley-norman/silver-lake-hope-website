<template>
  <div class="flex flex-col flex-grow mb-7">
    <CalendarView
      :show-date="showDate"
      :items="calendarEvents"
      class="theme-default holiday-us-traditional holiday-us-official"
      @click-item="onClickItem"
    >
      <template #header="{ headerProps }">
        <CalendarViewHeader :header-props="headerProps" @input="setShowDate" />
      </template>
    </CalendarView>
  </div>

  <CalendarItemModal
    v-show="showModal"
    @close="onCloseModal"
    :item="modalDetails"
  />
</template>

<script setup>
import { CalendarView, CalendarViewHeader } from "vue-simple-calendar"
import CalendarItemModal from "~~/components/CalendarItemModal.vue"
import { getAllCalendarEvents } from "~~/lib/api"
import "../node_modules/vue-simple-calendar/dist/style.css"
import "../node_modules/vue-simple-calendar/dist/css/default.css"
import "../node_modules/vue-simple-calendar/dist/css/holidays-us.css"

const preview = usePreview()

const { data } = await useAsyncData(
  () => {
    return getAllCalendarEvents(preview.value)
  },
  { watch: [preview] }
)

const calendarEvents = computed(() => {
  if (Array.isArray(data.value)) {
    return data.value.map((item) => ({
      id: item.sys?.id,
      startDate: item.startDateTime,
      endDate: item.endDateTime,
      title: item.eventTitle,
      classes: [
        item.eventType === "Reservation"
          ? "!bg-green-500 hover:!bg-green-600"
          : "!bg-zinc-600 hover:!bg-zinc-800 text-white",
        "cursor-pointer",
      ],
      item,
    }))
  }
  return []
})

const showDate = ref(new Date())
const showModal = ref(false)
const modalDetails = ref({})

const setShowDate = (d) => {
  showDate.value = d
}
const onClickItem = (e) => {
  showModal.value = true
  modalDetails.value = e.originalItem.item
}
const onCloseModal = () => {
  showModal.value = false
  modalDetails.value = {}
}
</script>
