<template>
  <div>
    <Hero />

    <main>
      <section id="overview">
        <Content class="bg-cyan-900 text-white">
          <h1 class="pt-5">Overview</h1>
          <p>
            The purpose of SLPOA is to promote good fellowship among its
            members, protect their common interests, provide social enjoyment by
            means of athletic and aquatic sports, community picnics and
            entertainment, and other purposes as the Association may deem
            necessary.
          </p>
          <p>
            The water’s edge slopes gradually with a roped off area for children
            and a larger area of deep water with a swim float for more
            experienced swimmers. The sandy beach, fishing dock, boat area, and
            large grassy field make it an ideal spot for member families to
            enjoy summer days close to home.
          </p>
        </Content>
      </section>
      <Wave class="bg-cyan-900" />
      <section id="history" class="pb-20">
        <Content>
          <h1>History</h1>
          <p class="mb-2">
            The property surrounding Big Silver Lake came into the possession of
            John J. Albertson and his wife of Hope-Delaware, from his father
            Gideon L. Albertson. Building their own cottage there about 1920 ---
            they sold off parcels of land which were surveyed by the local
            surveyor of the time, Lanterman, and marked by stones and trees and
            other less dependable markers --- and thus do the early deeds read.
          </p>
          <p class="mb-2">
            As more and more land was sold and more and more cottages built, the
            need for an organization was felt.The Silver Lake Property Owners
            Association (SLPOA) was started in 1936 by a small group of summer
            residents. Members had a right of way to the lake, where they built
            a cement dock to tie up their boats and use as a “home base” for
            lake activities. Full membership in SLPOA grew and incorporated in
            1953. Since SLPOA has been in existence, much growth and improvement
            has taken place.
          </p>
          <p>
            Perhaps the highlight of the organization’s accomplishment is the
            purchase of its own waterfront in 1964. Money was raised to purchase
            a tract of land at the far end of the lake, which was marshland with
            heavy tree and brush growth. After clearing the land and dredging
            the lake area, a beach area and eventually a small pavilion were
            created. This included a limited kitchen, two restrooms, and a
            covered patio area. In 1988, the covered area of the pavilion was
            enlarged to accommodate our membership.
          </p>
        </Content>
      </section>

      <hr class="border-cyan-900/25 w-[98vw] mx-auto" />

      <section v-if="announcement != null" id="announcements" class="py-4">
        <Content>
          <h2 class="">Latest Announcement</h2>
          <Announcement
            :title="announcement.title"
            :publish-date="announcement.publishDate"
            :content="announcement.content"
          />
          <NuxtLink
            to="/announcements"
            class="flex justify-center items-center my-3 gap-1"
          >
            <div>View All Announcements</div>
            <button
              class="px-3 py-2 font-semibold text-sm bg-cyan-700 enabled:hover:bg-cyan-900 text-white rounded-full shadow-sm"
              @click="pageBack"
            >
              <!-- <NuxtLink to="/announcements"> -->
              <fa-icon icon="fa-solid fa-arrow-right" />
              <!-- </NuxtLink> -->
            </button>
          </NuxtLink>
        </Content>
      </section>

      <!-- <section id="tshirts" class="bg-cyan-900 text-white">
        <Content>
          <h1 class="pt-7">T-Shirts</h1>
          <p>We sell them.</p>
        </Content>
      </section> -->

      <!-- <Wave class="bg-cyan-900" /> -->
    </main>
  </div>
</template>

<script setup>
import Hero from "~~/components/Hero.vue"
import Content from "~~/components/Content.vue"
import Wave from "~~/components/Wave.vue"
import Announcement from "~~/components/Announcement.vue"
import { getNewestAnnouncement } from "~~/lib/api"

const preview = usePreview()

const { data: announcement } = await useAsyncData(
  () => {
    return getNewestAnnouncement(preview.value)
  },
  { watch: [preview] }
)
</script>

<style scoped>
#overview > svg {
  display: block;
}
</style>
