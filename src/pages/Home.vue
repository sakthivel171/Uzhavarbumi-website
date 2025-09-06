<template>
  <section >
    <div class="-mt-14 bg-black/60">
      <img src="../assets/banner image.jpg" alt="banner image" class="w-full h-[400px] md:h-[500px] -z-10 relative  lg:object-cover lg:h-[600px] ">
      <div class="absolute top-44 px-4  text-white  md:px-32  font-montserrat md:w-[720px] lg:w-[1150px] lg:top-60 lg:px-40 ">
        <h4 class="text-[28px]  leading-snug md:text-2xi  mb-2 lg:text-3xl">Uzhavarbumi</h4>
        <h1 class=" text-3xl  md:text-4xl leading-tight font-medium lg:text-6xl">Chennai's Award Winning Milk Service</h1>
        <button class=" border border-black  px-6 py-3 text-lg rounded-md mt-3 bg-[#76a543] font-medium hover:text-black shadow-md ">Buy Sample Now</button>
        <p class="mt-2 text-gray-100 text-lg sm:tracking-widest leading-relaxed">View Purity of our Milk <small>(updated on 31-08-2025)</small></p>
      </div>
    </div>
  </section>
  <section>
    <div class="grid lg:grid-cols-3 gap-8 px-6 pt-14 md:px-12 lg:px-24 pb-24 bg-[#E2E2E2]  mx-auto ">
      <div class=" flex flex-col items-center font-lato text-3xl font-bold  ">
        <img src="/affordable image.png" alt="Affordable" class="" >
        <h3 class="underline ">Affordable </h3>
      </div>
      <div class=" flex flex-col items-center font-lato text-3xl font-bold ">
        <img src="/logistics.png" alt="Accessible" class="">
        <h3 class="underline ">Accessible</h3>
      </div>
      <div class=" flex flex-col items-center font-lato text-3xl font-bold">
        <img src="/benefit.png" alt="Assured" class="">
        <h3 class="underline ">Assured</h3>
      </div>
    </div>
  </section>
  <section class=" m-4 md:px-20 lg:px-72 md:m-9 ">
    <div class="mt-20  bg-[#F5F5F5] p-8 rounded-2xl text-center py-10  lg:p-16  lg:px-20 lg:h-auto  lg:py-16 ">
      <h1 class=" font-montserrat text-xl font-medium leading-4 lg:text-3xl">What is Uzhavarbumi?</h1>
      <p class="my-6 font-lato font-[16px]  leading-8 text-center tracking-wide text-gray-500  ">Uzhavarbumi Agro Products Pvt Ltd, founded in July 2017, is a fresh dairy products company based in Maduranthakam, Chengalpattu, India. UB's prime motive is to establish direct trade between local farmers and consumers. UB provides products including farm-fresh Milk, Ghee, Honey and Palkova. Today UB is one of Tamilnadu's leading brands, merchandising fresh dairy products.</p>
      <router-link  to="/about" class="border-none text-white px-8 py-3 text-lg rounded-md mt-6 bg-[#76a543] font-medium hover:text-black lg:mt-2" >  Know More</router-link>
    </div>
  </section>

  <section class="bg-[#E2E2E2] pb-12 ">
    <h1 class="font-montserrat text-3xl text-center font-medium py-10 ">Our Flagship Products</h1>
    <div class="grid lg:grid-cols-3  gap-8 px-7 md:px-10 pb-16  lg:px-24  ">
      <div class=" border border-gray-200 flex flex-col items-center bg-white rounded-2xl overflow-hidden shadow-md">
        <img src="/milk image.png" alt="Uzhavarbumi's Pure Cow Milk" class="w-52 h-52 "></img>
        <div class="bg-[#f5f5f5] w-full flex  flex-col items-center py-6 px-10 text-center ">
          <h3 class="text-2xl font-lato font-extralight" >Pure Cow Milk</h3>
          <p class="text-gray-500 leading-loose">UB delivers you hygienic, chemical free milk, freshly collected from local farmers.</p>
        </div>
       
      </div>
      <div class=" border border-gray-200 flex flex-col items-center  bg-white rounded-2xl overflow-hidden shadow-md">
        <img src="/ghee.image.jpg" alt="Uzhavarbumi's Pure Cow Ghee" class="w-52 h-52"></img>
          <div class="bg-[#f5f5f5] w-full flex  flex-col items-center py-6  px-10 text-center ">
            <h3 class="text-2xl font-lato font-extralight">Pure Cow Ghee</h3>
                <p class="text-gray-500 leading-loose">UB's ghee / clarified butter is traditionally made from pure cow milk.</p>
          </div>  
      </div>


      <div class=" border border-gray-200 flex flex-col items-center  bg-white rounded-2xl overflow-hidden shadow-md">
        <img src="/honey.jpg" alt="Uzhavarbumi's Natural Honey" class="w-52 h-52"></img>
        <div class="bg-[#f5f5f5] w-full flex  flex-col items-center py-6 px-10 text-center ">
          <h3  class="text-2xl font-lato font-extralight">Natural Honey</h3>
              <p class="text-gray-500 leading-loose">UB's honey is unprocessed, unsweetened and freshly collected from a local farm.</p>
        </div>
      </div>
    </div>
    <div class="flex justify-center  mt-4 ">
      <button class="border-none text-white px-8 py-3 justify-center text-lg rounded-md  bg-[#76a543] font-medium hover:text-black " >Know More</button>
    </div>
  </section>

<section>
  <h1 class="font-montserrat text-3xl text-center font-medium py-10 ">Overview of UB</h1>
  <div class="grid lg:grid-cols-4 gap-8 px-6 pt-14 md:px-12 lg:px-32 pb-24   mx-auto ">
    <div class=" flex flex-col items-center font-lato text-2xl font-light  ">
        <img src="/group.png" alt="Affordable" class="" >
        <h3 class="mt-4">10,000+ Customers </h3>
      </div>
       <div class=" flex flex-col items-center font-lato text-2xl font-light">
        <img src="/trolley.png" alt="Affordable" class="" >
        <h3 class="mt-4">7,000+ Liters</h3>
      </div>
       <div class=" flex flex-col items-center font-lato text-2xl font-light  ">
        <img src="/man.png" alt="Affordable" class="" >
        <h3 class="mt-4">45+ Dealers </h3>
      </div>
      <div class=" flex flex-col items-center font-lato text-2xl font-light  ">
        <img src="/location.png" alt="Affordable" class="" >
        <h3 class="mt-4" >45+ Dealers </h3>
      </div>
    </div>
  </section>
  <section class="pb-12 bg-[#e2e2e2] ">
     <h1 class="font-montserrat text-3xl text-center font-medium pt-10 lg:hidden  ">Try our New App</h1>
   <div class="flex flex-wrap gap-20 lg:gap-32 lg:mt-10 py-12 lg:py-20 px-8 lg:px-32 justify-center">
    <div><a href=""><img src="../assets/appmockup.png" alt="" class="w-full " >
    </a>
  </div>
    <div class="w-[340px] flex flex-col items-center text-justify  ">
      <h4 class=" hidden lg:block font-montserrat text-3xl text-center font-medium mt-16 mb-6 ">Try our New App</h4>
      <p class="text-gray-500 leading-loose text-base">Be up-to date with our latest mobile app. View, Buy, Manage your orders, all within a few clicks.</p>
        <button class="border-none text-white mt-6 px-6 py-3 justify-center text-base rounded-md  bg-[#76a543] font-medium hover:text-black ">Install Now</button><br>
      <a href="" class="text-blue-500 font-lato text-lg tracking-widest">More about our Apps</a>
      <div class="flex justify-center gap-6 mt-3">
        <img src="/play-store-logo.png" alt="">
        <img src="/apple-logo.png" alt="">
      </div>
      <p class="font-montserrat text-2xl text-center font-thin mt-4 lg:mb-6 " >Available Now</p>
    </div>
  </div>
      <div class=" text-center ">
        <a href="https://uzhavarbumi.com/" class="text-lime-600 font-lato text-lg tracking-widest underline ">Get Download Link in SMS</a>
      </div>    
   </section>

   <section class="py-10">
    <div class="grid gap-5 px-14 mx-auto  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 " >
      <div class="border border-gray-300 rounded-xl grid-cols-1 ">
        <div class="px-6 py-10 text-justify">
          <img src="/quotation.png" alt="">
          <p class="text-gray-500 leading-loose mt-4">Dedicated people who delivered milk even during lockdown without a miss.</p>
        </div>
        <div class="flex items-center py-7 gap-4  px-4 bg-[#f1f1f1] rounded-b-xl">
          <img src="/avatar-male.png" alt="">
          <h5 class="font-montserrat text-2xl text-center font-thin  ">Yuva Raj M</h5>
        </div>
      </div>
      <div class="border border-gray-200 rounded-xl ">
        <div class="px-6 py-7 text-justify">
          <img src="/quotation.png" alt="">
          <p class="text-gray-500 leading-loose mt-2">on time delivery..milk quality is very good... usually they deliver milk with 6 to 7 am.</p>
        </div>
        <div class="flex items-center py-7 gap-4  px-4  bg-[#f1f1f1] rounded-b-xl">
          <img src="/avatar-female.png" alt="">
          <h5 class="font-montserrat text-2xl text-center font-thin  ">Priyanka Siva</h5>
        </div>
      </div >
      <div class="border border-gray-200 rounded-xl "> 
        <div class="px-6 py-7 text-justify">
          <img src="/quotation.png" alt="">
          <p class="text-gray-500 leading-loose mt-2">Worth the price and having a smooth payment and order placement in the app too.</p>
        </div>
        <div class="flex items-center py-7 gap-4  px-4  bg-[#f1f1f1] rounded-b-xl">
          <img src="/avatar-male (1).png" alt="">
          <h5 class="font-montserrat text-2xl text-center font-thin ">Vinoth Kumar</h5>
        </div>
      </div >
      <div class="border border-gray-200 rounded-xl ">
        <div class="px-6 py-7 text-justify">
          <img src="/quotation.png" alt="">
          <p class="text-gray-500 leading-loose mt-2">Milk quality is so good, my 2year old baby loves it, it's not smells like other cow milk</p>
        </div>
        <div class="flex items-center py-7 gap-4  px-4 bg-[#f1f1f1] rounded-b-xl ">
          <img src="/avatar-female (1).png" alt="">
          <h5 class="font-montserrat text-2xl text-center font-thin ">Lakshmi</h5>
        </div>
      </div>
     </div>
     <div class=" text-center mt-12">
        <a href="" class="text-blue-500 font-lato text-xl tracking-widest  ">More Reviews</a>
      </div>
   </section>

   <section>
    <div class="py-14" >
      <div class="flex justify-center"><img src="/blog image.png" alt=""></div>
      <div class=" px-8 md:32 lg:px-[350px]">
        <h5 class="text-xl font-lato  mt-4 lg:text-2xl">Latest blog post</h5> 
        <h4 class="text-2xl font-lato font-semibold mt-4 lg:text-4xl">A2 Milk in Chennai: Buzzword or Better Choice?</h4>
        <h6 class="text-base font-lato  mt-4 lg:text-lg"> by Team Uzhavarbumi (29/Aug/25)</h6>
        <button class="border-none text-white px-8 py-3 text-lg rounded-md mt-8 bg-[#76a543] font-medium hover:text-black lg:mt-2">Read Article</button>
      </div>

    </div>
   </section>
  

</template>

<script>
export default {
  name: "Home"
}
</script>

