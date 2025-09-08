<template>
  <whatsapp class="whatsapp-icon" />  
  <Navbar/>
  <main>
    <router-view/>
  </main>
  <Footer/>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import whatsapp from './components/whatsapp.vue';

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
    whatsapp
  }
}
</script>

<style>
.whatsapp-icon {
  position: fixed;
  right: 20px;      
  top: 87%;          
  z-index: 1000;     
  cursor: pointer;
}
</style>
