<template>
  <div class="mt-[4rem] py-6">
    <div class="flex items-center gap-3">
      <Icon :name="(curMapel?.icon! as string)" class="size-[8rem]" :style="{ color: curMapel.tailwind_color }"
        v-if="curMapel" />
      <div class="space-y-2">
        <h1 class="text-4xl font-semibold">{{ curMapel?.nama }}</h1>
        <p class="w-10/12">{{ curMapel?.deskripsi }}</p>
      </div>
    </div>
    <div class="flex gap-3 mt-2">
      <button 
        v-for="(i) in kelas" 
        class="px-8 py-1.5 rounded-md bg-slate-100 border"
        :class="{ 'bg-slate-200 border-slate-400': i == curKelas }"
        @click="curKelas = i"
        >
        kelas {{ i }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Database } from '~/types/database.types'
const route = useRoute()
const client = useSupabaseClient<Database>()

const curMapel = ref<Mapel | undefined>()

const getDetailMapel = async () => {
  try {
    const { data, error } = await client.from('mata_pelajaran').select().eq('nama', route.params.mapel).limit(1).single()
    if (error) throw error
    return data
  } catch (error) {
    console.log(error)
  }
}

const kelas = [
  10, 11, 12
]

const curKelas = ref<number>(10)

onMounted(async () => {
  const data = await getDetailMapel()
  curMapel.value = data

  useHead({
    title: curMapel?.value?.nama + ' | Males'
  })
})

interface Mapel {
  deskripsi: string;
  icon: string | null;
  id: number;
  nama: string;
  tailwind_color: string;
}


</script>