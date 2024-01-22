<script setup lang="ts">
import { useScroll } from '@vueuse/core'

const el = ref<HTMLElement|null>(null)

const { x, y } = useScroll(el)
const { width, height } = useWindowSize()

const hitungOpacity = computed(() => {
  return width.value > 768 ? ((1 - (x.value / 560)) * 100).toFixed(0): 100
})

watch(x,()=>{
  console.log(x.value)
  console.log(hitungOpacity.value)
},)


// console.log(isMobile.value)
// watch(width, () => {
//   console.log(width.value)
// })

</script>

<template>
  <div class="py-[10rem] flex flex-col md:flex-row sm:flex-col items-center justify-start relative gap-6">
    <div class="flex items-center space-x-3 absolute lg:left-[35%] md:left-[30%] right-[1.5rem] md:top-[65%] lg:top-[73%] top-[-2rem]" id="slideLeft" :style="{opacity: hitungOpacity + '%'}">
      <Icon name="material-symbols:chevron-left-rounded" />
      <p>Swipe ke kiri</p>
    </div>
    <div class="lg:px-[10rem] md:px-[3rem] px-[1rem] w-[90%] md:w-[50%] lg:w-[55%] transition-all text-center sm:text-start" :style="{opacity: hitungOpacity + '%'}">
      <h2 class="text-3xl">Daftar Mata Pelajaran</h2>
      <p>Apa yang kamu sukai? Apakah kamu tertarik pada ilmu alam, matematika, bahasa, seni, atau olahraga? Pilihlah mata pelajaran yang sesuai dengan minatmu agar belajar menjadi lebih menyenangkan.</p>
    </div>
    <div ref="el" class="lg:absolute md:absolute static flex space-x-6 z-40 flex-nowrap overflow-x-scroll p-5 whitespace-nowrap w-[100%] lg:pl-[50%] md:pl-[50%] hide-scroll-bar">
      <div class="flex-shrink-0 w-[14rem] px-4 py-3 shadow-lg rounded-2xl bg-white inline-block" v-for="i in 8" draggable="true">
        <div class="aspect-square w-full overflow-hidden rounded-md shadow-inner">
          <img src="https://www.the74million.org/wp-content/uploads/2023/02/iStock-470493341-copy.jpg" alt="" class="w-full h-full object-cover">
        </div>
        <div class="">
          <h4 class="text-2xl mb-2">Matematika</h4>
          <div class="flex justify-end">
            <button class="px-6 py-1 bg-primary text-white rounded-md">Pelajari</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hide-scroll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.hide-scroll-bar::-webkit-scrollbar {
  display: none;
}

#slideLeft {
  bottom: 15%;
  position: absolute;
  animation: linear infinite;
  animation-name: run;
  animation-duration: 1s;
  animation-timing-function:ease-in ;
}
@keyframes run {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-10px);
  }
  100% {
    transform: translateX(0);    
  }
}
</style>
