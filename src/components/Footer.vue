<template>
  <footer class="bg-[#1d2124] text-white box-border ">
    <a href="#" onclick=" event.preventDefault();
     window.scrollTo({top: 0, behavior:'smooth'});" class="flex justify-center pt-14 items-center gap-2 text-xl">
      <ion-icon name="arrow-up-outline"></ion-icon>
      Back to Top
    </a>
    <div class=" mx-auto grid grid-cols-1 px-16 py-12  md:grid-cols-2 gap-10 lg:grid-cols-4">
      <!-- About Section -->
      <div>
        <h1 class="text-2xl font-montserrat">About Uzhavarbumi</h1>
        <hr class="my-4 border-0 border-t border-gray-300 ">
        <p class="text-base font-lato text-gray-500 leading-8 tracking-wide ">
          Uzhavarbumi's prime motive is to establish direct trade between
          local farmers and consumers. UB provides fresh dairy products including milk, ghee and honey.
        </p>
      </div>

      <!-- Resource Pages Section -->
      <div>
        <h2 class="text-2xl font-montserrat">Resource Pages</h2>
        <hr class="my-4 border-0 border-t border-gray-300 ">
        <ul class="leading-8">
          <li v-for="link in resourceLinks" :key="link.name" class="hover:text-gray-400">
            <router-link :to="link.path">
              {{ link.name }}
              <sup v-if="link.isNew"
                class="bg-green-500 inline-block  px-1 py-[0.20em] text-[65%] font-bold leading-none text-center whitespace-nowrap  rounded">NEW</sup>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- Know Our Milk Section -->
      <div>
        <h2 class="text-2xl font-montserrat">Know our Milk</h2>
        <hr class="my-4 border-0 border-t border-gray-300 ">
        <ul class="leading-8">
          <li v-for="link in milkLinks" :key="link.name" class="hover:text-gray-400">
            <router-link :to="link.path">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Social Section -->
      <div>
        <h2 class="text-2xl font-montserrat">Connect With Us</h2>
        <hr class="my-4 border-0 border-t border-gray-300 ">
        <div class="flex gap-4 mt-2 ">
          <a href="https://api.whatsapp.com/send?phone=918939989887&text=Hi,%20Uzhavarbumi" target="_blank">
            <img src="/whatsapp logo.jpg" alt="whatsapp" class="rounded-xl ">
          </a>
          <a href="https://www.facebook.com/Uzhavarbumi" target="_blank">
            <img src="/facebook logo.jpg" alt="facebook" class="rounded-xl ">
          </a>
          <a href="https://twitter.com/Uzhavarbumi" target="-blank">
            <img src="/twitter logo.jpg" alt="twitter" class="rounded-xl ">
          </a>
          <a href="https://www.linkedin.com/company/uzhavarbumi/" target="_blank">
            <img src="/linked logo.jpg" alt="linkedin" class="rounded-xl ">
          </a>
          <a href="https://www.instagram.com/uzhavarbumi/" target="_blank">
            <img src="/instagram logo.jpg" alt="instagram" class="rounded-xl ">
          </a>
          <a href="https://www.youtube.com/c/Uzhavarbumi" target=_blank>
            <img src="/youtube logo.jpg" alt="youtube" class="rounded-xl ">
          </a>
        </div>
        <div class="flex gap-8 mt-8 ">
          <a href="https://play.google.com/store/apps/details?id=com.uzhavarbumi.app" target="_blank">
            <img src="\playstore logo.jpg" alt="Uzhavarbumi.com" class="rounded-xl">
          </a>
          <a href="https://apps.apple.com/in/app/1668103339" target="_blank">
            <img src="/ios appstor.jpg" alt="Ulavarbumi" class="rounded-xl">
          </a>
        </div>
      </div>
    </div>

    <p class=" text-center mt-5 mb-5 text-base text-gray-500 leading-[1.9] tracking-[1px]">
      Uzhavarbumi © 2018-25 · All Rights reserved<br />
      Site built and maintained by
    </p>
  </footer>
</template>

<script>
import { resourceLinks, milkLinks, } from "../data/FooterLinks"
export default {
  name: "Footer",
  data() {
    return { resourceLinks, milkLinks }
  }
}
</script>
