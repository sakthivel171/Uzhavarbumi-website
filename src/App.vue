<template>
  <div class="box-border ">
    <Navbar/>
    <main class="flex-1">
      <router-view/>
    </main>
   <Footer></Footer>
      
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
export default{
  name:"app",
  components:{
    Navbar,Footer
  }
}
</script>


