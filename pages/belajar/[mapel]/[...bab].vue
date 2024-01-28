<template>
  <div>
    <ContentDoc>
      <template #not-found>
        <h1>Materi Belum dibuatt, tunggu yaa🥺🥹🙏</h1>
      </template>
    </ContentDoc>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'belajar',
})

</script>

<style>
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.6rem;
}

li {
  list-style-type: disc;
  list-style-position: inside;
}
li>p{
  list-style-position: outside;
}
</style>