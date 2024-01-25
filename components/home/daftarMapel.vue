<script setup lang="ts">
import { useScroll } from '@vueuse/core'

const el = ref<HTMLElement|null>(null)

const { x, y } = useScroll(el)
const { width, height } = useWindowSize()

const hitungOpacity = computed(() => {
  return width.value > 768 ? ((1 - (x.value / 370)) * 100).toFixed(0): 100
})

watch(x,()=>{
  console.log(x.value)
  console.log(hitungOpacity.value)
},)

import type { Database, Tables, Enums } from '~/types/database.types'
const client = useSupabaseClient<Database>();

const semuaMataPelajaran = async () => {
  try {
    const { data, error } = await client.from('mata_pelajaran').select('*').order('id', { ascending: true });
    if (error) throw error;
    return data
  } catch (error) {
    console.log(error);
  }
}
const semuaMapel = await semuaMataPelajaran()
</script>

<template>
  <div class="py-[10rem] flex flex-col md:flex-row sm:flex-col items-center justify-start relative gap-6">
    <div class="flex items-center space-x-3 absolute lg:left-[37%] md:left-[30%] right-[2rem] md:top-[65%] lg:top-[50%] top-[3rem]" id="slideLeft" :style="{opacity: hitungOpacity + '%'}">
      <Icon name="material-symbols:chevron-left-rounded" />
      <p>Swipe ke kiri</p>
    </div>
    <div class=" w-[90%] md:w-[45%] lg:w-[35%] transition-all text-center sm:text-start" :style="{opacity: hitungOpacity + '%'}">
      <h2 class="text-3xl">Daftar Mata Pelajaran</h2>
      <p>Apa yang kamu sukai? Apakah kamu tertarik pada ilmu alam, matematika, bahasa, seni, atau olahraga?</p>
    </div>
    <div ref="el" class="lg:absolute md:absolute static flex space-x-6 z-40 flex-nowrap overflow-x-scroll p-5 whitespace-nowrap w-[100%] md:pl-[37%] hide-scroll-bar">
      <div class="border bg-white flex flex-col items-center shadow-m rounded-2xl px-5 py-3 cursor-pointer" v-for="mapel of semuaMapel" :key="mapel.id" @click="navigateTo(`/daftar-mata-pelajaran/${mapel.nama}`)">
        <Icon :name="mapel.icon!" class="text-4xl mb-1" :style="{'color': mapel.tailwind_color!}" />
        <h4 class="text-xl font-medium">{{ mapel.nama }}</h4>
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
    transform: translateX(-4px);
  }
  100% {
    transform: translateX(0);    
  }
}
</style>
