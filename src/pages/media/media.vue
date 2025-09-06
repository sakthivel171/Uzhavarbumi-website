<template>
  <div class="px-4 md:px-6 ">
    <h4 class="  font-montserrat text-4xl text-center font-medium mt-16 mb-4 ">UB on Media</h4>
     <p class="text-gray-700 leading-loose text-[22px] py-8 font-lato tracking-wide text-center pb-6">Uzhavarbumi has been featured on some of the popular media houses in the country. Here are a few selected ones.</p>
     <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-24 lg:px-48 mx-auto mb-10 py-6">
       <div v-for="(media,index) in medias" :key="index" >
          <a :href="media.link" target="_blank"><img :src="media.img" :alt="media.name"></a>
          <h4 class="font-lato text-[18px] tracking-wider leading-7 py-4 px-3 text-gray-500 text-center "><a :href="media.url"></a>{{ media.name }}</h4>
       </div>
     </div>
  </div>
</template>
<script>
export default{
    name :"media",
    data() {
      return {
        medias:[
          {
            img:"https://uzhavarbumi.com/images/media/10.png",
            link:"https://www.vikatan.com/business/startups/start-up-series-that-talks-about-milk-business-by-uzhavar-bumi",
            name:"Vikatan Article - StartUp சாகசம்",
            url:"https://www.vikatan.com/business/startups/start-up-series-that-talks-about-milk-business-by-uzhavar-bumi"  
          },
          {
            img:"https://uzhavarbumi.com/images/media/9.jpg",
            link:"https://yourstory.com/2022/05/startup-bharat-tamil-nadu-milk-delivery-platform-uzhavarbumi-word-of-mouth-marketing/amp",
            name:"YourStory Coverage",
            url:"https://yourstory.com/2022/05/startup-bharat-tamil-nadu-milk-delivery-platform-uzhavarbumi-word-of-mouth-marketing/amp"
          },
          {
            img:"https://uzhavarbumi.com/images/media/3.png",
            link:"https://startup.siliconindia.com/vendor/uzhavarbumi-delivering-farmfresh-products-with-ample-convenience-cid-8651.html",
            name:"Silicon India Magazine",
            url:"https://startup.siliconindia.com/vendor/uzhavarbumi-delivering-farmfresh-products-with-ample-convenience-cid-8651.html"
          },
          {
            img:"https://uzhavarbumi.com/images/media/8.jpg",
            link:"https://timesofindia.indiatimes.com/city/chennai/tech-serves-tamil-nadu-farmers/articleshow/91878145.cms",
            name:"Times of India",
            url:"https://timesofindia.indiatimes.com/city/chennai/tech-serves-tamil-nadu-farmers/articleshow/91878145.cms"
          },
          {
            img:"https://uzhavarbumi.com/images/media/3.jpg",
            link:"https://www.youtube.com/watch?v=2Ht_eCKRRTg",
            name:"Josh Talk Tamil - Youtube Channel",
            url:"https://www.youtube.com/watch?v=2Ht_eCKRRTg"
          },
          {
            img:"https://uzhavarbumi.com/images/media/4.jpg",
            link:"https://www.youtube.com/watch?v=TOlJv4k8ZoY",
            name:"Naveen Uzhavan - Youtube Channel",
            url:"https://www.youtube.com/watch?v=TOlJv4k8ZoY"
          },{
            img:"https://uzhavarbumi.com/images/media/5.jpg",
            link:"https://www.youtube.com/watch?v=KkOfLQnTirg",
            name:"Nakkheeran 360 - Youtube Channel",
            url:"https://www.youtube.com/watch?v=KkOfLQnTirg"
          },{
            img:"https://uzhavarbumi.com/images/media/6.jpg",
            link:"https://www.youtube.com/watch?v=QUzFqaZ9tEE",
            name:"Nakkheeran 360 - Youtube Channel",
            url:"https://www.youtube.com/watch?v=QUzFqaZ9tEE"
          },{
            img:"https://uzhavarbumi.com/images/media/7.jpg",
            link:"https://www.youtube.com/watch?v=2sYfGJIVhtg",
            name:"PuthuYugam TV Interview",
            url:"https://www.youtube.com/watch?v=2sYfGJIVhtg"
          },{
            img:"https://uzhavarbumi.com/images/media/2.jpg",
            link:"https://www.youtube.com/watch?v=ShxRSlc3ZcM",
            name:"Polimer News Coverage",
            url:"https://www.youtube.com/watch?v=ShxRSlc3ZcM"
          },

          {
            img:"https://uzhavarbumi.com/images/media/7.png",
            link:"https://www.financialexpress.com/india-news/techies-come-together-to-form-trust-to-help-agricultural-families/586783/",
            name:"Financial Express",
            url:"https://www.financialexpress.com/india-news/techies-come-together-to-form-trust-to-help-agricultural-families/586783/"
          },{
            img:"https://uzhavarbumi.com/images/media/6.png",
            link:"https://www.indiatoday.in/pti-feed/story/techies-come-together-to-form-trust-to-help-agri-families-890013-2017-03-13",
            name:"India Today",
            url:"https://www.indiatoday.in/pti-feed/story/techies-come-together-to-form-trust-to-help-agri-families-890013-2017-03-13"
          },
          {
            img:"https://uzhavarbumi.com/images/media/5.png",
            link:"https://www.thebetterindia.com/91266/farmer-suicides-tamil-nadu-chennai/",
            name:"BetterIndia Publication",
            url:"https://www.thebetterindia.com/91266/farmer-suicides-tamil-nadu-chennai/"
          },
          {
            img:"https://uzhavarbumi.com/images/media/4.png",
            link:"https://scroll.in/article/864404/we-work-in-it-firms-deliver-milk-every-morning-how-chennai-jallikattu-stir-changed-young-people",
            name:"Scroll Publication",
            url:"https://scroll.in/article/864404/we-work-in-it-firms-deliver-milk-every-morning-how-chennai-jallikattu-stir-changed-young-people"
          },{
            img:"https://uzhavarbumi.com/images/media/1.jpg",
            link:"https://www.youtube.com/watch?v=jO7qzBoSuk0",
            name:"News18 News Coverage",
            url:"https://www.youtube.com/watch?v=jO7qzBoSuk0"
          },

          
        ]
      }
    },
    
}
</script>