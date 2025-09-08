<template>
    <div class="mx-6 md:mx-44 lg:mx-80  leading-8 justify-center tracking-wide md:leading-9 mb-20">
        <h1 class="text-center font-montserrat font-medium text-4xl" >Get Your Milk Sample</h1>
        <p class="font-lato text-[16px] tracking-wide    text-gray-500 mt-4">Get a Sample of our <b>Fresh Cow Milk</b> , delivered to your Home anywhere in Chennai.</p>
     <div class="flex flex-col  mt-4">
      <!-- Label -->
      <p class="font-lato text-[16px] tracking-wide text-gray-500 mb-2">
        Enter Phone Number
      </p>

      <!-- Input + Button -->
      <div class="flex w-full max-w-xl">
        <input type="number" name="mobile" placeholder="Without +91 or 0 prefix" pattern="[0-9]{10}"
          maxlength="10"
          required
          class="border border-gray-400 w-full px-4 py-2 text-lg rounded-l-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button
          class="bg-lime-600 text-white px-6 py-3 text-lg rounded-r-md font-medium hover:bg-lime-700 transition w-48 " >
          GET OTP
        </button>
      </div>
     </div>
     <p class="font-lato text-[16px] tracking-wide    text-gray-500 mt-1">Our Samples are  <b>NOT FREE </b>.</p>
     <p class="font-lato text-[16px] tracking-wide    text-gray-500 mt-1">You will be charged <b>₹44 / 500ml</b>and <b> ₹78 / 1Litre</b>.</p>
     <p class="font-lato text-[16px] tracking-wide    text-gray-500 mt-1">*For <b>Chengalpattu Customers</b> ,price will be shown on the App .</p>
     <p class="font-lato text-[16px] tracking-wide    text-gray-500 mt-1">Please wait till we forward your Sample to our Dealer near you, usually takes a few hours.</p>
    </div>

</template>
<script>
export default{
    name:"sample"
}
</script>