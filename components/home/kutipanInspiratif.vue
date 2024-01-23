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
          class="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div class="hs-carousel-slide">
            <div
              class="py-[6rem] h-full flex flex-col-reverse sm:flex-row items-center justify-center md:px-[8rem] px-[1rem] gap-10">
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
              class="py-[6rem] h-full flex flex-col-reverse sm:flex-row items-center justify-center md:px-[8rem] px-[1rem] gap-10">
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
              class="py-[6rem] h-full flex flex-col-reverse sm:flex-row items-center justify-center md:px-[8rem] px-[1rem] gap-10">
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

      <!-- <button type="button"
        class="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
        <span class="text-2xl" aria-hidden="true">
          <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </span>
        <span class="sr-only">Previous</span>
      </button>
      <button type="button"
        class="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/[.1]">
        <span class="sr-only">Next</span>
        <span class="text-2xl" aria-hidden="true">
          <svg class="flex-shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
            fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </button> -->

      <!-- <div class="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
        <span
          class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span
          class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
        <span
          class="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 w-3 h-3 border border-gray-400 rounded-full cursor-pointer"></span>
      </div> -->
    </div>
  </div>
</template>
