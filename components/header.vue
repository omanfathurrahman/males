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
}, { ignore: [targetIgnore] })

const { x, y } = useWindowScroll({ behavior: 'smooth' })

watch(y, () => {
  closeNav()
})
</script>

<template>
  <div
    class="flex justify-between items-center gap-24 px-[2rem] md:px-[6rem] border h-[4rem] w-full backdrop-blur-sm bg-opacity-20 fixed top-0 z-50 bg-white">
    <img src="/logo.svg" alt="">

    <div class="relative" v-show="isMobile">
      <button class="flex flex-col gap-1" @click="toggleNav()" ref="targetIgnore">
        <div class="w-[1.5rem] h-[3px] bg-black rounded-md"></div>
        <div class="w-[1.5rem] h-[3px] bg-black rounded-md"></div>
        <div class="w-[1.5rem] h-[3px] bg-black rounded-md"></div>
      </button>
      <div
        class="flex flex-col absolute bg-white space-y-1 w-[12rem] shadow-lg rounded-md overflow-hidden py-2 px-2 transition-all duration-300 ease-in-out top-14"
        :class="showNav ? 'right-1' : 'right-[-20rem]'" ref="target">
        <button @click="[navigateTo('/'), closeNav()]" class="text-center py-2 w-full hover:bg-slate-100 rounded-md">Home</button>
        <button @click="[navigateTo('/daftar-mata-pelajaran'), closeNav()]"
          class="text-center py-2 w-full hover:bg-slate-100 rounded-md">Mapel</button>
        <button @click="[navigateTo('/latihan-soal'), closeNav()]" class="text-center py-2 w-full hover:bg-slate-100 rounded-md">Latihan
          Soal</button>
        <button @click="[navigateTo('/tentang-kami'), closeNav()]" class="text-center py-2 w-full hover:bg-slate-100 rounded-md">Tentang
          kami</button>
      </div>
    </div>

    <div class="flex gap-8" v-show="!isMobile">
      <button @click="navigateTo('/')">Home</button>
      <button @click="navigateTo('/daftar-mata-pelajaran')">Mapel</button>
      <button @click="navigateTo('/latihan-soal')">Latihan Soal</button>
      <button @click="navigateTo('/tentang-kami')">Tentang Kami</button>
    </div>
  </div>
</template>