<template>
  <article>
    <div class="page-header">
      <div
        class="logo bg-cyan-900/50 h-full w-full flex flex-col justify-center items-center"
      >
        <h1
          class="text-xl md:text-5xl text-white mb-0 p-3 bg-black/40 font-sans font-extralight tracking-widest"
        >
          Water Testing Results
        </h1>
        <a
          class="absolute bottom-0 right-0 text-white/5 text-xs"
          href="https://unsplash.com/s/photos/water-testing?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Source
        </a>
      </div>
    </div>
    <Content class="bg-cyan-900 text-white pt-7">
      <div class="flex flex-col gap-5 text-center">
        <p>
          SLPOA has the lake treated for weed control and the water tested
          weekly to ensure its suitability for swimming and it regularly tests
          “squeaky clean”.
        </p>
        <template v-if="waterTestResults != null">
          <dl
            class="inline-grid auto-cols-auto grid-rows-2 gap-x-3 gap-y-2 justify-center"
          >
            <dt
              class="col-start-1 row-start-1 text-2xl font-semibold tracking-wider text-right"
            >
              Date
            </dt>
            <dd class="col-start-1 row-start-2 text-right">{{ date }}</dd>
            <div class="w-px bg-white row-span-full col-start-2" />
            <dt
              class="col-start-3 row-start-1 text-2xl font-semibold tracking-wider text-center"
            >
              Results
            </dt>

            <dd class="col-start-3 row-start-2 text-center">
              {{ waterTestResult?.results }}
            </dd>
            <div class="w-px bg-white row-span-full col-start-4" />
            <dt
              class="col-start-5 row-start-1 text-2xl font-semibold tracking-wider text-left"
            >
              Conforms?
            </dt>
            <dd class="col-start-5 row-start-2 uppercase text-left">
              {{ conforms }}
            </dd>
          </dl>

          <p v-if="waterTestResult?.conforms">
            This sample conforms to State Public Recreational Bathing Standards
            for the below analyses.
          </p>
          <p v-else>
            This sample does not conform to State Public Recreational Bathing
            Standards for the below analyses.
          </p>
        </template>
        <template v-else>
          <p>No water test results posted, check back later!</p>
        </template>
      </div>
    </Content>
    <Wave class="bg-cyan-900" />
    <Content class="pb-7">
      <h1 class="mb-1 -mt-2">Details</h1>
      <dl>
        <div class="grid grid-cols-4 gap-y-4 md:gap-x-5 my-4">
          <dt
            class="text-cyan-900 md:text-end text-xl col-span-4 md:col-span-1"
          >
            Site location
          </dt>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            13 Lake View Ave, Blairstown NJ 07825
          </dd>
        </div>
        <div class="grid grid-cols-4 gap-x-5 my-4">
          <dt class="text-cyan-900 md:text-end text-xl">Conforms (Yes/No)</dt>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            Designates whether results conform to State Standards for public
            recreational bathing water quality.
          </dd>
        </div>
        <div class="grid grid-cols-4 gap-x-5 my-4">
          <dt class="text-cyan-900 md:text-end text-xl row-span-4">pH</dt>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            pH results in standard units
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            pH shall be 7.2 to 7.8, ideally 7.4 to 7.6
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            When pH is reported as 6.8 the pH is 6.8 or below. When pH is
            reported as 8.2 the pH is 8.2 or above.
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            <dl>
              <dt class="text-cyan-900">Method</dt>
              <dd>phenol red</dd>
            </dl>
          </dd>
        </div>
        <div class="grid grid-cols-4 gap-x-5 my-4">
          <dt class="text-cyan-900 md:text-end text-xl row-span-4">
            Chlorine/bromine
          </dt>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            Chlorine or bromine results in parts per million, ppm
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            Free Chlorine shall be 1.0 to 10.0 in swimming pools & 2.0 to 10.0
            in whirlpools, hot tubs or spas
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            Bromine shall be 2.0 to 10.0 in swimming pools & whirlpools, hot
            tubs or spas
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            <dl>
              <dt class="text-cyan-900">Method</dt>
              <dd>DPD test kit</dd>
            </dl>
          </dd>
        </div>
        <div class="grid grid-cols-4 gap-x-5 my-4">
          <dt class="text-cyan-900 md:text-end text-xl row-span-2">
            Heterotrophic Plate Count
          </dt>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            results in organisms per ml
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            HPC shall not exceed 200 organisms per ml
          </dd>
        </div>
        <div class="grid grid-cols-4 gap-x-5 my-4">
          <dt class="text-cyan-900 md:text-end text-xl row-span-6">Coliform</dt>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            Total coliform in swimming pools, <i>Pseudomonas aeruginosa</i> in
            whirlpools, hot tubs or spas, <i>E. coli </i> in beaches,
            enterococcus in marine waters
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            Results in organisms per 100 ml
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            Total coliform and <i>Pseudomonas aeruginosa </i> results shall be
            less than 1 organism per 100ml
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            <i>E. coli</i> results shall not exceed 320 organisms per 100 ml
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            Entercoccus results shall not exceed 104 organisms per 100 ml
          </dd>
          <dd class="col-start-1 col-span-4 md:col-start-2 md:col-span-3">
            <dl>
              <dt>Methods</dt>
              <dd>HPC - SM 9215B</dd>
              <dd><i>Pseudomonas aeruginosa </i> - Pseudalert</dd>
              <dd>E. Coli - Colilert 18-04 MPN, entercoccus - USEPA 1600</dd>
              <dd>
                total coliform - If there is an exceedance the local health
                authority should be contacted for information on corrective
                measures, resampling and closures.
              </dd>
            </dl>
          </dd>
        </div>
      </dl>
    </Content>
  </article>
</template>

<script setup>
import { computed } from "vue"
import { format } from "date-fns"
import Content from "~~/components/Content.vue"
import Wave from "~~/components/Wave.vue"
import { getLatestWaterTestResult } from "~~/lib/api"

const preview = usePreview()

const { data: waterTestResult } = await useAsyncData(
  () => {
    return getLatestWaterTestResult(preview.value)
  },
  { watch: [preview] }
)

const date = computed(() =>
  waterTestResult.value?.resultsDate
    ? format(new Date(waterTestResult.value.resultsDate), "MM/dd/yyyy")
    : "Cannot Retrieve Date"
)
const conforms = computed(() =>
  waterTestResult.value?.conforms ? "yes" : "no"
)
</script>

<style scoped laang="scss">
.page-header {
  height: 200px;
  max-height: 100vh;
  background-image: url(~~/assets/images/water-test.jpg);
  background-size: cover;
  filter: grayscale(100%) contrast(200%);
}
dt,
dd {
  min-height: 32px;
}
</style>
