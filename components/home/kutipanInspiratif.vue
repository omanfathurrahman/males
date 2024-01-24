<template>
  <div class="h-[580px]">

    <div 
    data-hs-carousel='{
      "loadingClasses": "opacity-0",
      "speed": 10000,
      "isAutoPlay": true
    }' 
    class="relative"
    >
      <div class="hs-carousel relative overflow-hidden w-full min-h-[560px] bg-white rounded-lg">
        <div
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 *:*:px-[1rem] opacity-0">
          <div class="hs-carousel-slide">
            <div
              class="py-[6rem] h-full flex flex-col-reverse sm:flex-row items-center justify-center gap-10">
              <div class="h-fit w-full text-center sm:text-end">
                <p class="text-xl">"Pendidikan adalah <span class="text-primary font-semibold">investasi terbaik</span>
                  untuk masa depan bangsa."</p>
                <p class="italic font-semibold text-sm mt-2">- Bacharuddin Jusuf Habibie</p>
              </div>
              <div class="w-2/3 overflow-hidden rounded-3xl shadow-lg">
                <img src="/images/bj_habibie.png" alt="" class="aspect-[7/5] object-cover object-center h-full">
              </div>
            </div>
          </div>
          <div class="hs-carousel-slide">
            <div
              class="py-[6rem] h-full flex flex-col-reverse sm:flex-row items-center justify-center gap-10">
              <div class="h-fit w-full text-center sm:text-end">
                <p class="text-xl">"Pendidikan adalah <span class="text-primary">proses yang berkelanjutan</span>. Ia
                  bukanlah <br>persiapan untuk hidup, melainkan <span class="text-primary">hidup itu sendiri</span>."</p>
                <p class="italic font-semibold text-sm mt-2">- John Dewey</p>
              </div>
              <div class="w-2/3 overflow-hidden rounded-3xl shadow-lg">
                <img src="/images/john_dewey.jpg" alt="" class="aspect-[7/5] object-cover object-center">
              </div>
            </div>
          </div>
          <div class="hs-carousel-slide">
            <div
              class="py-[6rem] h-full flex flex-col-reverse sm:flex-row items-center justify-center gap-10">
              <div class="h-fit w-full text-center sm:text-end">
                <p class="text-xl">"Tujuan pendidikan itu untuk mempertajam kecerdasan, memperkukuh kemauan serta
                  memperhalus perasaan."</p>
                <p class="italic font-semibold text-sm mt-2">- Tan Malaka</p>
              </div>
              <div class="w-2/3 overflow-hidden rounded-3xl shadow-lg">
                <img src="/images/tanmalaka.jpg" alt="" class="aspect-[7/5] object-cover object-center">
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</template>
