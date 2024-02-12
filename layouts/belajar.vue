<template>
  <div class="flex flex-col overflow-hidden">
    <div class="flex flex-col md:flex-row lg:overflow-auto lg:max-h-screen-[calc(100vh+8rem)]">
      <div class="w-screen md:w-fit sticky top-0">
        <BelajarSidebar class="md:w-[18rem] sticky top-0 w-screen" />
      </div>
      <!-- <div class="w-full">p</div> -->
      <div class="w-full">
        <slot />
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script lang="ts" setup>

</script>