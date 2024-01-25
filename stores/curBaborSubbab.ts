import { defineStore } from 'pinia'

export const useMyCurBaborSubbabStore = defineStore('curBaborSubbab', () => {
  const curBaborSubbab = ref([''])
  
  const gantiBab = (bab: string) => {
    curBaborSubbab.value[0] = bab
  }
  const gantiSubbab = (subbab: string) => {
    curBaborSubbab.value[1] = subbab
  }

  return {
    curBaborSubbab,
    gantiBab,
    gantiSubbab
  }
})
