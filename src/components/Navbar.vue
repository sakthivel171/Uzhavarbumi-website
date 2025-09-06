<template>
     <nav class="flex items-center font-montserrat font-medium mb-6  -mt-3  justify-between px-2 text-slate-600 leading-4">
        <div class=" flex gap-8 lg:px-16 lg:gap-20">
            <Navlink to="/about" class="relative group">About Us
                <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-full"></span>
            </Navlink>
            <Navlink to="/recipes" class="relative group">Recipes
                  <sup  class="bg-green-500 inline-block  px-1 py-[0.20em] text-[60%] font-bold leading-none text-center   rounded text-white">NEW</sup>
                 <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-full"></span>
            </Navlink>
            <Navlink to="/products" class="relative group">Products
                 <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-full"></span>
            </Navlink>
        </div>
<div class="pr-20">
    <logo  />
    
</div>

  <div class="flex gap-8 lg:p-10 lg:gap-20">
      <Navlink to="/meter" class="relative group">Milk Meter
           <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-full"></span>
      </Navlink>
      <Navlink to="/FAQ" class="relative group">FAQ
           <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-full"></span>
      </Navlink>
      <Navlink to="/contact" class="relative group">Contact Us
           <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-full"></span>
      </Navlink>
  </div>

</nav>
   </template>
<script>
import Navlink from "../components/Navlink.vue"
import Logo from "./Logo.vue";
export default{
    name:"Navbar",
    components:{
        Navlink,Logo
    }
}
</script>