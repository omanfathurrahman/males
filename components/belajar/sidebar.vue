<template>
  <div class="flex flex-col bg-slate-100 px-8 py-3">
    <h1>{{ curMapel?.nama }}</h1>
    <div class="">
      <h3 class="font-semibold">Kelas 10</h3>
      <div class="flex flex-col" v-if="babPerKelas['10']">  
        <a class="text-lg" href="" v-for="bab in babPerKelas['10']">{{ bab.judul }}</a>
      </div>
    </div>
    <div class="">
      <h3 class="font-semibold">Kelas 11</h3>
      <div class="flex flex-col" v-if="babPerKelas['11']">
        <a class="text-lg" href="" v-for="bab in babPerKelas['11']">{{ bab.judul }}</a>
      </div>
    </div>
    <div class="">
      <h3 class="font-semibold">Kelas 12</h3>
      <div class="flex flex-col" v-if="babPerKelas">
        <a class="text-lg" href="" v-for="bab in babPerKelas['12']">{{ bab.judul }}</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Database } from '~/types/database.types'
const route = useRoute()
const client = useSupabaseClient<Database>()

const semuaBab = ref<Bab[] | undefined>()
const curMapel = ref<Mapel | undefined>()
// Membuat grup berdasarkan kelas
const babPerKelas: globalThis.Ref<{
    [kelas: string]: Bab[];
}> = ref<{ [kelas: string]: Bab[] }>({});

watch(semuaBab, () => {
  semuaBab.value?.forEach((item) => {
    if (!babPerKelas.value[item.kelas]) {
      babPerKelas.value[item.kelas] = [];
    }
    babPerKelas.value[item.kelas].push(item);
  });
})
const getDetailMapel = async () => {
  try {
    const { data, error } = await client.from('mata_pelajaran').select().eq('nama', route.params.mapel).limit(1).single()
    if (error) throw error
    curMapel.value = data
  } catch (error) {
    console.log(error)
  }
}
const getBab = async (mataPelajaranId: Number) => {
  try {
    const { data, error } = await client
      .from('bab')
      .select(`
        id,
        judul,
        kelas,
        mata_pelajaran_id,
        sub_bab (
          judul
        )
      `)
    if (error) throw error
    semuaBab.value = data
  } catch (error) {
    console.log(error)
  }
}

const kelas = [
  10, 11, 12
]

const curKelas = ref<number>(10)

onMounted(async () => {
  await getDetailMapel()
  await getBab(curMapel.value?.id!)
  
})

interface Mapel {
  deskripsi: string;
  icon: string | null;
  id: number;
  nama: string;
  tailwind_color: string;
}
interface Bab {
  id: any;
  judul: any;
  kelas: any;
  mata_pelajaran_id: any;
  sub_bab: {
    judul: string;
  }[];
}
</script>