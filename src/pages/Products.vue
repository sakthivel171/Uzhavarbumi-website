<template>

  <section>
    <h1 class="text-4xl font-montserrat font-medium mb-4 mt-16 text-center">Our Products</h1>
    <div v-for="(product, index) in products" :key="index"
      class="flex flex-wrap px-6 justify-center gap-10 lg:gap-32  items-center  py-10  ">
      <div
        class="px-2 py-2 rounded-2xl overflow-hidden shadow-xl transition-all border border-gray-300 min-h-[200px] min-w-[200px]  ">
        <img :src="product.image" :alt="product.name" class="w-[170px] h-[170px] object-cover">
      </div>
      <div class="flex flex-col items-center lg:items-start w-[600px] ">
        <h2 class="text-3xl font-lato font-extralight mb-2 leading-relaxed tracking-wide ">{{ product.name }}</h2>
        <p class="mt-2 text-gray-500 text-lg leading-relaxed">{{ product.content }}</p>
        <a :href="product.link" class="text-lime-600 font-montserrat text-xl py-2 tracking-normal ">Know more about our
          Milk</a>
      </div>
    </div>
    <div class="">
      <h2 class="text-3xl font-montserrat font-medium mb-4 mt-16 text-center ">Brands We Work With</h2>
      <div
        class="flex flex-col  items-center justify-center gap-6 my-14 md:grid grid-cols-3 px-10 place-items-center lg:grid-cols-6">
        <div class="">
          <img src="https://uzhavarbumi.com/images/other-brand-logo/milky_mist.jpg" alt="Milky Mist"
            style="max-height:100px ">
        </div>
        <div class="">
          <img src="https://uzhavarbumi.com/images/other-brand-logo/asal.jpg" alt="Asal Milky Mist"
            style="max-height: 100px">
        </div>
        <div class="">
          <img src="https://uzhavarbumi.com/images/other-brand-logo/Somemore-Logo.jpg" alt="Some More Foods"
            style="max-height: 100px">
        </div>
        <div class="">
          <img src="https://uzhavarbumi.com/images/other-brand-logo/millet_mill.png" alt="Millet Mill">
        </div>
        <div class="">
          <img src="https://uzhavarbumi.com/images/other-brand-logo/dhaanays.png" alt="Dhaanyas">
        </div>
        <div class="">
          <img src="https://uzhavarbumi.com/images/other-brand-logo/raja_farms.jpg" alt="Raja Farms">
        </div>
      </div>
    </div>

    <div class="my-20 mb-32">
      <h3 class="text-3xl font-montserrat font-medium my-8 mt-16 text-center ">Lab Reports</h3>
      <div class="flex flex-wrap justify-center gap-10 lg:gap-32 text-center">
        <div>
          <p class=" text-gray-500 text-lg leading-relaxed my-4">UB INTERNAL LAB</p>
          <img style="max-width: 300px" src="https://uzhavarbumi.com/images/reports/internal.jpg"
            alt="Uzhavarbumi Milk's Test Report">
          <br>
          <a target="_blank" href="https://uzhavarbumi.com/images/reports/internal.jpg" class="text-blue-500">View</a>
        </div>
        <div>
          <p class=" text-gray-500 text-lg leading-relaxed my-4">CTL LAB</p>
          <img style="max-width: 300px"
            src="https://uzhavarbumi.s3.ap-south-1.amazonaws.com/website/images/external-milk-reports/report.jpg"
            alt="Uzhavarbumi Milk's Test Report">
          <br>
          <a target="_blank"
            href="https://uzhavarbumi.s3.ap-south-1.amazonaws.com/website/images/external-milk-reports/report.pdf"
            class="text-blue-500">View Full Report</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import products from "../data/product.json"
export default {
  name: "products",
  data() {
    return {
      products

    }
  },
}
</script>