<template>
  <div class="flex flex-col items-center justify-center h-screen relative">
    <div class="bg-default h-[103vh] absolute w-screen -z-10"></div>
    <div class="flex flex-col w-3/5 items-center gap-[2rem]">
      <div class="flex flex-col gap-3 w-fit">
        <img src="/logo.svg" alt="">
        <h2 class="text-3xl"><span class="text-primary font-semibold">Ma</span>teri Pe<span
            class="text-primary font-semibold">le</span>ngkap <span class="text-primary font-semibold">S</span>ekolah</h2>
      </div>
      <p class="text-center text-lg">Kami adalah platform belajar online yang didedikasikan untuk membantu Anda mencapai
        potensi belajar maksimal. Dengan fokus pada filosofi "Belajar Lebih Baik", kami menyediakan lingkungan belajar
        yang interaktif, mendalam, dan menyenangkan untuk meningkatkan pemahaman dan prestasi Anda.</p>
    </div>
  </div>
</template>

<style scoped>
.bg-default {
  background-color: #ffffff;
  opacity: 0.05;
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #ffffff 16px), repeating-linear-gradient(#6A65FF55, #6A65FF);
}

</style>