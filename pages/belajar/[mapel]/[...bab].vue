<template>
  <div class="overflow-auto divide-y-2 my-2 h-[calc(100dvh-1rem)] px-[2rem]" ref="el">
    <div class="w-full space-y-1 mb-2 h-[8rem]">
      <h1 class="text-3xl font-semibold text-primary">Judul materi</h1>
      <p class="text-slate-600">Penjelasan singkat tentang materi</p>
      <div class="flex items-center gap-4">
        <NuxtImg class="size-10 rounded-full object-cover object-center" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <div class="">
          <p class="font-semibold">Kamen Rider</p>
          <p class="text-slate-600">Pelajar SMA</p>
        </div>
      </div>
    </div>
    <div class="flex pt-2 gap-6 items-start">
      <BelajarContent @update-list-bagian="updateListBagian" class="w-full" />
      <BelajarTableOfContents @go-to="goTo" class="w-4/12 bg-slate-100 sticky top-[1.5rem] rounded-md px-3 py-1.5" />
    </div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'belajar',
})

const el = ref<HTMLElement | null>(null)
const { y } = useScroll(el, { behavior: 'smooth' })
const listBagian = ref<{ [key: string]: number }>()

// const goTo = () => {
//   y.value = 300
// }

const updateListBagian = (listBagianBaru: {[key: string]: number}) => {
  listBagian.value = listBagianBaru
  console.log(listBagian.value)
}

const goTo = (bagian: string) => {
  if (listBagian.value) {
    y.value = listBagian.value[bagian]
  }
}

</script>
