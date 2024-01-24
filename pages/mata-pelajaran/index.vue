<script setup lang="ts">
useHead({
  title: 'Mata Pelajaran | Males',
})
import type { Database, Tables, Enums } from '~/types/database.types'
import randomColorTailwind from '~/utils/random-color-tailwind'
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
const warna = randomColorTailwind()
const semuaMapel = await semuaMataPelajaran()

</script>

<template>
  <div class="flex flex-col py-[1rem] gap-4 px-[1rem] sm:px-[8rem] mt-[4rem] min-h-[83vh]">
    <div class="">
      <h2 class="text-2xl mb-2">Daftar Mata Pelajaran</h2>
      <p>Pilih mata pelajaran yang menarik dan bermanfaat untuk masa depanmu!</p>
    </div>
    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-3">
      <div class="border shadow-m rounded-2xl px-5 py-3 cursor-pointer" v-for="mapel of semuaMapel" :key="mapel.id" @click="navigateTo(`/mata-pelajaran/${mapel.nama.toLowerCase()}`)">
        <Icon :name="mapel.icon!" class="text-4xl mb-1" :style="{'color': mapel.tailwind_color!}" />
        <h4 class="text-xl font-medium">{{ mapel.nama }}</h4>
        <p class="text-sm">{{ mapel.deskripsi }}</p>
      </div>
    </div>
  </div>
</template>