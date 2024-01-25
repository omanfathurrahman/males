<template>
  <div class="flex flex-col bg-slate-100 px-8 py-3 divide-y-2 space-y-4 z-10" :class="{'h-full': (showNavBelajar || !isMobile) }">
    <div class="flex md:flex-col flex-col gap-5 mt-3 md:mt-6">
      <NuxtLink>
        <img src="/logo.svg" />
      </NuxtLink>
      <div class="flex gap-5 items-center">
        <button class="" @click="showNavBelajar = !showNavBelajar" v-if="isMobile">
          <Icon name="ci:hamburger-lg" class="text-lg" />
        </button>
        <div class="flex items-center gap-1">
          <h1 class="text-xl font-semibold">{{ curMapel?.nama }}</h1>
          <p>/</p>
          <h2>{{  }}</h2>
        </div>
      </div>
    </div>
    <div class="divide-y-2 space-y-3" v-show="(showNavBelajar || !isMobile)">
      <div class="">
        <h3 class="font-light">Kelas 10</h3>
        <div class="flex flex-col gap-2" v-if="babPerKelas['10']">
          <div class="" v-for="bab in babPerKelas['10']">
            <button @click="[navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}`), showNavBelajar = false]"
              class="hover:text-primary text-lg font-medium" :class="{'text-primary': route.params.bab[0] == replaceSpacesWithDash(bab!.judul.toLowerCase()) && route.params.bab.length == 1}">{{ bab.judul }}</button>
            <div class="ml-2 flex flex-col mt-0.5 gap-1">
              <button
                class="hover:text-primary text-start" 
                :class="{'text-primary': route.params.bab[1] == replaceSpacesWithDash(subbab.judul.toLowerCase())}" 
                @click="[navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}/${replaceSpacesWithDash(subbab.judul.toLowerCase())}`), showNavBelajar = false]" 
                v-for="subbab in bab.sub_bab" 
                :key="subbab.judul"
                >
                {{ subbab.judul}}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <h3 class="font-light">Kelas 11</h3>
        <div class="flex flex-col gap-2" v-if="babPerKelas['11']">
          <div class="" v-for="bab in babPerKelas['11']">
            <button @click="[navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}`), showNavBelajar = false]"
              class="hover:text-primary text-lg font-medium" :class="{'text-primary': route.params.bab[0] == replaceSpacesWithDash(bab!.judul.toLowerCase()) && route.params.bab.length == 1}">{{ bab.judul }}</button>
            <div class="ml-2 flex flex-col mt-0.5 gap-1">
              <button
                class="hover:text-primary text-start" 
                :class="{'text-primary': route.params.bab[1] == replaceSpacesWithDash(subbab.judul.toLowerCase())}" 
                @click="[navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}/${replaceSpacesWithDash(subbab.judul.toLowerCase())}`), showNavBelajar = false]" 
                v-for="subbab in bab.sub_bab" 
                :key="subbab.judul"
                >
                {{ subbab.judul}}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="">
        <h3 class="font-light">Kelas 12</h3>
        <div class="flex flex-col gap-2" v-if="babPerKelas['12']">
          <div class="" v-for="bab in babPerKelas['12']">
            <button @click="[navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}`), showNavBelajar = false]"
              class="hover:text-primary text-lg font-medium" :class="{'text-primary': route.params.bab[0] == replaceSpacesWithDash(bab!.judul.toLowerCase()) && route.params.bab.length == 1}">{{ bab.judul }}</button>
            <div class="ml-2 flex flex-col mt-0.5 gap-1">
              <button
                class="hover:text-primary text-start" 
                :class="{'text-primary': route.params.bab[1] == replaceSpacesWithDash(subbab.judul.toLowerCase())}" 
                @click="[navigateTo(`/belajar/${replaceSpacesWithDash(curMapel!.nama.toLowerCase())}/${replaceSpacesWithDash(bab.judul.toLowerCase())}/${replaceSpacesWithDash(subbab.judul.toLowerCase())}`), showNavBelajar = false]" 
                v-for="subbab in bab.sub_bab" 
                :key="subbab.judul"
                >
                {{ subbab.judul}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Database } from '~/types/database.types'
import { capitalizeFirstLetter } from '~/utils/capitalizeFirstLetter';
import { replaceSpacesWithDash } from '~/utils/replaceSpacesWithDash';
const route = useRoute()
const client = useSupabaseClient<Database>()

const semuaBab = ref<Bab[] | undefined>()
const curMapel = ref<Mapel | undefined>()
const curBaborSubbab = ref('')
const showNavBelajar = ref(false)
const { width } = useWindowSize()
const isMobile = computed(() => width.value < 768)

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
    const { data, error } = await client.from('mata_pelajaran').select().eq('nama', capitalizeFirstLetter(route.params.mapel as string)).limit(1).single()
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
      `).eq('mata_pelajaran_id', mataPelajaranId)
    if (error) throw error
    semuaBab.value = data
    console.log(semuaBab.value)
  } catch (error) {
    console.log(error)
  }
}

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
  id: number;
  judul: string;
  kelas: "10" | "11" | "12";
  mata_pelajaran_id: number;
  sub_bab: {
    judul: string;
  }[];
}

</script>