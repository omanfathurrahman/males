<script setup lang="ts">

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
    <div class=" w-[90%] md:w-[45%] lg:w-[35%] transition-all text-center sm:text-start">
      <h2 class="text-3xl">Daftar Mata Pelajaran</h2>
      <p>Apa yang kamu sukai? Apakah kamu tertarik pada ilmu alam, matematika, bahasa, seni, atau olahraga?</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 z-40 p-5 whitespace-nowrap">
      <div 
        class="border bg-white flex flex-col w-full items-center shadow-m rounded-2xl px-5 py-3 cursor-pointer transition-shadow duration-300 hover:shadow-md" 
        v-for="mapel of semuaMapel" 
        :key="mapel.id" 
        @click="navigateTo(`/daftar-mata-pelajaran/${replaceSpacesWithDash(mapel.nama.toLowerCase())}`)"
        >
        <Icon :name="mapel.icon!" class="text-4xl mb-1" :style="{ 'color': mapel.tailwind_color! }" />
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
  animation-timing-function: ease-in;
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
