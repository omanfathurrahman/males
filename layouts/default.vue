<script setup lang="ts">

const el = ref<HTMLElement | null>(null)
const { x, y } = useScroll(el)

</script>

<template>
  <div class="overflow-hidden relative">
    <Header />
    <slot ref="el" />
    <Footer />
  </div>
</template>