<template>
  <div class="hero h-screen">
    <div
      class="logo bg-cyan-900/50 h-full w-full flex flex-col justify-center items-center text-center"
    >
      <h1 class="text-9xl text-white font-sans font-extralight tracking-widest">
        Silver Lake
      </h1>
      <h2 class="text-4xl text-white font-sans font-thin tracking-wide">
        Hope, NJ
      </h2>
    </div>
  </div>
</template>

<style scoped>
.hero {
  /* height: calc(100vh - 56px); */
  background-image: url(~~/assets/images/silver-lake-1.jpg);
  background-size: cover;
  filter: grayscale(100%) contrast(200%);
}
</style>
