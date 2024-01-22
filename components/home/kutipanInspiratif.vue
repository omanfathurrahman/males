<script setup lang="tsx">
const { width, height } = useWindowSize()

console.log(width.value)
watch(width, () => {
  console.log(width.value)
})

</script>

<template>
  <div class="h-[540px]">
    <div class="py-[6rem] h-full flex flex-col-reverse sm:flex-row items-center justify-center md:px-[8rem] px-[1rem] gap-10">
      <div class="h-fit w-full text-center sm:text-end">
        <p class="text-xl">"Pendidikan adalah <span class="text-primary font-semibold">investasi terbaik</span> untuk masa depan bangsa."</p>
        <p class="italic font-semibold text-sm mt-2">- Bacharuddin Jusuf Habibie</p>
      </div>
      <div class="w-2/3 overflow-hidden rounded-3xl shadow-lg">
        <img src="/images/bj_habibie.png" alt="">
      </div>
    </div>
  </div>
</template>
