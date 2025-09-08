<template>
    <nav class="flex items-center justify-between px-4  mb-16 lg:hidden ">
    <div>
      <Logo />
    </div>
    <button @click="isOpen=!isOpen" class="p-2 text-4xl rounded text-slate-600 hover:text-red-600"> ☰</button>
</nav>
   <div v-if="isOpen"
    class="lg:hidden   flex flex-col gap-4 px-6 py-4 bg-white shadow-md ">
     <Navlink to="/about"  @click="closeMenu" class="relative group">About Us
        <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-20"></span>
     </Navlink>
     <Navlink to="/recipes" @click="closeMenu"  class="relative group">Recipes
       <sup  class="bg-green-500 inline-block  px-1 py-[0.20em] text-[60%] font-bold leading-none text-center   rounded text-white">NEW</sup>
       <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-20"></span>
     </Navlink>
     <Navlink to="/products" @click="closeMenu"  class="relative group">Products
        <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-20"></span>
     </Navlink>
     <Navlink to="/meter"@click="closeMenu"  class="relative group">Milk Meter
        <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-20"></span>
     </Navlink>
     <Navlink to="/FAQ" @click="closeMenu"  class="relative group">FAQ
        <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-10"></span>
     </Navlink>
     <Navlink to="/contact" @click="closeMenu"  class="relative group">Contact Us
        <span class="absolute left-0 -bottom-2 h-[3px] w-0 bg-lime-500 transition-all duration-700 group-hover:w-20"></span>
     </Navlink>  
   </div>
    <nav class=" hidden lg:flex items-center font-montserrat font-medium mb-6  -mt-4  justify-between px-2 text-slate-600 leading-4">
        <div class=" flex gap-8 lg:px-8 lg:gap-12">
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
        <div class=" lg:relative lg:z-50 lg:hover:opacity-70">
            <logo  />  
        </div>
          <div class="flex gap-8 lg:px-8 lg:gap-12">
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
    },
        data() {
            return {
                isOpen:false
                
            }
        },
        methods: {
            closemenu(){
                this.isOpen=false
            }
        },
    
}
</script>