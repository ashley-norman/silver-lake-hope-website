<template>
  <article class="mb-10">
    <div class="page-header">
      <div
        class="logo bg-cyan-900/50 h-full w-full flex flex-col justify-center items-center"
      >
        <h1
          class="text-xl md:text-5xl text-white mb-0 p-3 bg-black/40 font-sans font-extralight tracking-widest"
        >
          Membership
        </h1>
      </div>
    </div>
    <Content class="bg-cyan-900 text-white pt-7">
      <p>
        During the past almost 90 years, we have expanded our membership to
        include Associate members who live outside of the lake area. Our bylaws
        now allow up to 70 full and associate members, in addition to several
        trial members and lifetime members. Applications are reviewed and voted
        on by the membership or the Executive Committee. Full and Associate
        members have year round access to our “best kept secret” beach facility.
      </p>
    </Content>
    <Wave class="bg-cyan-900" />
    <Content>
      <h2 class="mb-0">Annual Agreement</h2>
      <h3 class="text-xl mb-5">
        To Abide by SLPOA official documents and payment
      </h3>
      <div class="flex flex-col gap-5">
        <p>
          Our family members who belong to this membership have read and
          understand the Bylaws and the Policies and Procedures of the SLPOA. We
          agree to abide by these official documents and understand that failure
          to do so could result in suspension and/or revocation of our
          membership. This is to be acknowledged by all family members who are a
          part of your families’ membership. By submitting your payment via the
          payment portal, you are acknowledging this.
        </p>

        <p style="padding-bottom: 2.25rem">
          Our Association welcomes involvement and participation of members.
          Without member involvement we cannot succeed. If you wish to offer any
          assistance at all, please send an email to
          <a
            href="mailto:patton478@gmail.com"
            class="underline text-cyan-900 hover:no-underline"
          >
            patton478@gmail.com
          </a>
          and list some ways that you might offer to help our Association.
          Suggestions are also welcome.
        </p>
      </div>
    </Content>

    <hr
      class="border-cyan-900/25 w-[98vw] mx-auto"
      style="padding-bottom: 2.25rem"
    />

    <Content>
      <h2 class="mb-0">Membership Payment</h2>
      <h3 class="text-xl mb-5">
        Use the below QR code or button to access the membership payment site.
      </h3>
      <div class="flex flex-col" style="gap: 10px">
        <div class="flex align-middle justify-center">
          <img
            src="~~/assets/images/qrcode.png"
            alt="QR Code to the payment website"
          />
        </div>

        <div class="flex align-middle justify-center pt-2">
          <button
            class="px-4 py-2 font-semibold text-sm bg-cyan-700 enabled:hover:bg-cyan-900 text-white rounded-full shadow-sm"
          >
            <a
              href="https://link.clover.com/urlshortener/NzyVX5"
              target="_blank"
            >
              <fa-icon icon="fa-solid fa-cart-shopping" /> Pay Now
            </a>
          </button>
        </div>
      </div>
    </Content>
  </article>
</template>

<script setup>
import Content from "~~/components/Content.vue"
import Wave from "~~/components/Wave.vue"
</script>

<style scoped>
.page-header {
  height: 200px;
  max-height: 100vh;
  background-image: url(~~/assets/images/silver-lake-2.jpg);
  background-size: cover;
  background-position: 50% 60%;
  filter: grayscale(100%) contrast(200%);
}
</style>
