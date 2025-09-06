<template>
 <div  class="mx-6 md:mx-20 lg:mx-56 leading-8 tracking-wide md:leading-8 mb-20 my-20">
    <h1 class="text-center font-montserrat font-medium text-4xl my-10" >Our Referral Program</h1>
    <p class="font-lato text-[18px] text-center tracking-widest text-gray-800 mt-2">Take a moment to share your love of <b class="text-black font-bold">Uzhavarbumi's Products</b> with your friends & family.</p>
     <div class="flex flex-col items-start mt-6 max-w-md mx-auto w-full">
   <label for="" class="font-lato text-[16px] tracking-wide text-gray-500 mb-2">Who do you usually buy milk for?</label>
     <select name="" id="" class="border border-gray-300 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:focus:ring-cyan-400"> 
     <option value="" disabled selected> Choose the option that best fits you</option>
     <option value=""> My family with kids</option>
    <option value="">My family with parents or elders</option>
     <option value="">Myself &amp; my partner</option>
      <option value="">stay in a hostel/shared room</option>
      <option value="">Just me</option>

  </select>
      <p class="font-lato text-[16px] tracking-wide text-gray-500 mb-2">Enter your registered mobile number</p>   
     <input type="number" name="mobile" placeholder="Without +91 or 0 prefix" pattern="[0-9]{10}"
          maxlength="10"
          required
          class="border border-gray-400 w-full px-4 py-2 text-lg rounded-md focus:outline-none focus:ring-2  focus:ring-cyan-400"
        />
        <button class="bg-lime-600 mx-auto text-white  py-3 text-lg rounded-md font-medium mt-6 hover:bg-lime-700 transition w-40 " >
          Get Image
        </button>
    </div>
    
</div>
</template>
<script>
export default{
    
}
</script>