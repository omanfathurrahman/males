<template>
  <div>
    <h3>Tabel konten</h3>
    <div class="pl-4 flex flex-col items-start">
      <button 
        v-for="({id, nama}, index) in listBagian" 
        :key="index"
        @click="goTo(id)"
        >{{ nama }}</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits<{
  goTo: [bagian: string]
}>()

const listBagian = [
  {id: 'bagian-1', nama: 'Bagian 1'},
  {id: 'bagian-2', nama: 'Bagian 2'},
  {id: 'bagian-3', nama: 'Bagian 3'},
  {id: 'bagian-4', nama: 'Bagian 4'},
  {id: 'bagian-5', nama: 'Bagian 5'},
]

const goTo = (bagian: string) => {
  emit('goTo', bagian)
}
</script>