<template>
  <p class="text-4xl font-montserrat font-medium mb-2 text-center mt-12">Uzhavarbumi Milk Meter</p>
  <div class="flex  flex-wrap justify-center gap-14 py-14">
    <div>
      <img src="\src\assets\milk-mater.gif" alt="milk-mater">
      <h2 class="text-center">{{ today }}</h2>
      <h6 class="text-center">Result : <span class="text-[#76A543]"><u>Pure</u></span></h6>
    </div>
    <div class="space-y-10">

      <!-- Milk Composition -->
      <div>
        <!-- Top values -->
        <div
          class="grid grid-cols-3  bg-[#76A543] px-6 py-4 text-white font-montserrat text-2xl font-medium rounded-t-xl">
          <div>
            <h3>5%</h3>
            <p class="text-base font-lato">Fat</p>
          </div>
          <div>
            <h3>8.1%</h3>
            <p class="text-base font-lato">SNF</p>
          </div>
          <div>
            <h3>6.4</h3>
            <p class="text-base font-lato">pH</p>
          </div>
        </div>

        <!-- Test results -->
        <div
          class="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-5 bg-[#f1f1f1] px-4 py-6 font-lato tracking-wide rounded-b-xl text-lg">
          <div>
            <h3>Urea</h3>
            <p class="text-[#76A543]">Negative</p>
          </div>
          <div>
            <h3>Nitrate</h3>
            <p class="text-[#76A543]">Negative</p>
          </div>
          <div>
            <h3>Starch</h3>
            <p class="text-[#76A543]">Negative</p>
          </div>
          <div>
            <h3>Sugar</h3>
            <p class="text-[#76A543]">Negative</p>
          </div>
          <div>
            <h3>Glucose</h3>
            <p class="text-[#76A543]">Negative</p>
          </div>
          <div>
            <h3>Salt</h3>
            <p class="text-[#76A543]">Negative</p>
          </div>
          <div>
            <h3>Neutralizer</h3>
            <p class="text-[#76A543]">Negative</p>
          </div>
          <div>
            <h3>Hydrogen Peroxide</h3>
            <p class="text-[#76A543]">Negative</p>
          </div>
        </div>
      </div>

      <!-- Lab Test Reports -->
      <div class="border border-gray-400 shadow-xl rounded-xl">
        <h4 class="text-xl font-montserrat font-medium text-center py-8">Lab Test Reports</h4>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 py-4">
          <div class="flex flex-col justify-center text-center">
            <p class=" text-gray-500 text-lg leading-relaxed mb-4">UB INTERNAL LAB</p>
            <img src="https://uzhavarbumi.com/images/reports/internal.jpg" alt="Internal Report"
              class="w-full max-w-[300px] rounded-lg shadow-md">
            <a rel="noopener" target="_blank" href="https://uzhavarbumi.com/images/reports/internal.jpg"
              class="text-blue-500 my-5">View</a>
          </div>
          <div class="flex flex-col justify-center text-center">
            <p class=" text-gray-500 text-lg leading-relaxed mb-4">CTL LAB</p>
            <img src="https://uzhavarbumi.s3.ap-south-1.amazonaws.com/website/images/external-milk-reports/report.jpg"
              alt="External Report" class="w-full max-w-[300px] rounded-lg shadow-md">
            <a rel="noopener" target="_blank"
              href="https://uzhavarbumi.s3.ap-south-1.amazonaws.com/website/images/external-milk-reports/report.pdf"
              class="text-blue-500 my-5">View Full Report</a>
          </div>
        </div>
      </div>

    </div>





  </div>

</template>
<script>
export default {
  name: "meter",
  data() {
    return {
      today:""
    }
  },
  mounted(){
    const date=new Date();
    const day=String(date.getDate()).padStart(2,"0");
    const month=String(date.getMonth()+1).padStart(2,"0");
    const year=date.getFullYear();
    this.today=`${day}-${month}-${year}`
  }

}
</script>