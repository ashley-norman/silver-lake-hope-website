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
      <div class="flex flex-col gap-5">
        <p>
          SLPOA has the lake treated for weed control and the water tested
          weekly to ensure its suitability for swimming and it regularly tests
          “squeaky clean”.
        </p>
        <p>
          This sample conforms to State Public Recreational Bathing Standards
          for the below analyses.
        </p>
      </div>
    </Content>
    <Wave class="bg-cyan-900" />
    <Content class="pb-7">
      <dl>
        <div class="grid grid-cols-4 gap-x-5 my-4">
          <dt class="text-cyan-900 text-end text-xl">Site location</dt>
          <dd class="col-start-2 col-span-3">
            11 Lakeview Ave, Blairstown NJ 07825
          </dd>
        </div>
        <div class="grid grid-cols-4 gap-x-5 my-4">
          <dt class="text-cyan-900 text-end text-xl">Conforms (Yes/No)</dt>
          <dd class="col-start-2 col-span-3">
            Designates whether results conform to State Standards for public
            recreational bathing water quality.
          </dd>
        </div>
        <div class="grid grid-cols-4 gap-x-5 my-4">
          <dt class="text-cyan-900 text-end text-xl row-span-4">pH</dt>
          <dd class="col-start-2 col-span-3">pH results in standard units</dd>
          <dd class="col-start-2 col-span-3">
            pH shall be 7.2 to 7.8, ideally 7.4 to 7.6
          </dd>
          <dd class="col-start-2 col-span-3">
            When pH is reported as 6.8 the pH is 6.8 or below. When pH is
            reported as 8.2 the pH is 8.2 or above.
          </dd>
          <dd class="col-start-2 col-span-3">
            <dl>
              <dt class="text-cyan-900">Method</dt>
              <dd>phenol red</dd>
            </dl>
          </dd>
        </div>
        <div class="grid grid-cols-4 gap-x-5 my-4">
          <dt class="text-cyan-900 text-end text-xl row-span-4">
            Chlorine/bromine
          </dt>
          <dd class="col-start-2 col-span-3">
            Chlorine or bromine results in parts per million, ppm
          </dd>
          <dd class="col-start-2 col-span-3">
            Free Chlorine shall be 1.0 to 10.0 in swimming pools & 2.0 to 10.0
            in whirlpools, hot tubs or spas
          </dd>
          <dd class="col-start-2 col-span-3">
            Bromine shall be 2.0 to 10.0 in swimming pools & whirlpools, hot
            tubs or spas
          </dd>
          <dd class="col-start-2 col-span-3">
            <dl>
              <dt class="text-cyan-900">Method</dt>
              <dd>DPD test kit</dd>
            </dl>
          </dd>
        </div>
        <div class="grid grid-cols-4 gap-x-5 my-4">
          <dt class="text-cyan-900 text-end text-xl row-span-2">
            Heterotrophic Plate Count
          </dt>
          <dd class="col-start-2 col-span-3">results in organisms per ml</dd>
          <dd class="col-start-2 col-span-3">
            HPC shall not exceed 200 organisms per ml
          </dd>
        </div>
        <div class="grid grid-cols-4 gap-x-5 my-4">
          <dt class="text-cyan-900 text-end text-xl row-span-6">Coliform</dt>
          <dd class="col-start-2 col-span-3">
            Total coliform in swimming pools, <i>Pseudomonas aeruginosa</i> in
            whirlpools, hot tubs or spas, <i>E. coli </i> in beaches,
            enterococcus in marine waters
          </dd>
          <dd class="col-start-2 col-span-3">
            Results in organisms per 100 ml
          </dd>
          <dd class="col-start-2 col-span-3">
            Total coliform and <I>Pseudomonas aeruginosa </I> results shall be
            less than 1 organism per 100ml
          </dd>
          <dd class="col-start-2 col-span-3">
            <i>E. coli</i> results shall not exceed 320 organisms per 100 ml
          </dd>
          <dd class="col-start-2 col-span-3">
            Entercoccus results shall not exceed 104 organisms per 100 ml
          </dd>
          <dd class="col-start-2 col-span-3">
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
import Content from "~~/components/Content.vue"
import Wave from "~~/components/Wave.vue"
</script>

<style scoped laang="scss">
.page-header {
  height: 200px;
  max-height: 100vh;
  background-image: url(~~/assets/images/water-test.jpg);
  background-size: cover;
  filter: grayscale(100%) contrast(200%);
}

/* dd {
  grid-column-start: 2;
}
dl {
  display: block;
}
dl {
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 10px;
} */
dt,
dd {
  min-height: 32px;
}
</style>
