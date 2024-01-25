<template>
  <div class="flex flex-col overflow-hidden">
    <div class="flex flex-col md:flex-row min-h-screen">
      <div class="w-screen md:w-fit">
        <BelajarSidebar class="md:w-[18rem] sticky top-0 w-screen" />
      </div>
      <!-- <div class="w-full">p</div> -->
      <div class="w-full px-[2rem] py-[1rem] min-h-[92vh]">
        <slot />
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts" setup>

</script>