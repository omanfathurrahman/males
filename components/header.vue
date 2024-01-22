<script setup lang="ts">
const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

const useShowNav = useMyShowNavStore()

const { showNav } = storeToRefs(useShowNav);

const target = ref(null)
const targetIgnore = ref(null)

const { toggleNav, closeNav } = useShowNav

onClickOutside(target, () => {
  closeNav();
}, {ignore: [targetIgnore]})
</script>

<template>
  <div class="flex justify-between items-center gap-24 px-[2rem] md:px-[6rem] border h-[4rem] w-full backdrop-blur-sm bg-opacity-50 fixed z-20 bg-white">
    <img src="/logo.svg" alt="">

    <div class="relative" v-show="isMobile">
      <button class="flex flex-col gap-1" @click="toggleNav()" ref="targetIgnore">
        <div class="w-[1.5rem] h-[3px] bg-black rounded-md"></div>
        <div class="w-[1.5rem] h-[3px] bg-black rounded-md"></div>
        <div class="w-[1.5rem] h-[3px] bg-black rounded-md"></div>
      </button>
      <div class="flex flex-col absolute bg-white space-y-1 w-[12rem] shadow-lg rounded-md overflow-hidden py-2 px-2 transition-all duration-300 ease-in-out top-14" :class="showNav? 'right-1':'right-[-20rem]'" ref="target">
        <button @click="navigateTo('/')" class="text-center py-2 w-full hover:bg-slate-100 rounded-md">Home</button>
        <button @click="navigateTo('/mata-pelajaran')" class="text-center py-2 w-full hover:bg-slate-100 rounded-md">Mapel</button>
        <button @click="navigateTo('/latihan-soal')" class="text-center py-2 w-full hover:bg-slate-100 rounded-md">Latihan Soal</button>
        <button @click="navigateTo('/tentang-kami')" class="text-center py-2 w-full hover:bg-slate-100 rounded-md">Tentang kami</button>
      </div>
    </div>

    <div class="flex gap-8" v-show="!isMobile">
      <a href="#">Home</a>
      <a href="#">Mapel</a>
      <a href="#">Latihan Soal</a>
      <a href="#">Tentang Kami</a>
    </div>
  </div>
</template>