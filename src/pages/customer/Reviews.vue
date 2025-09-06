<template>
     <div class="pb-20">
         <h4 class="  font-montserrat text-4xl text-center font-medium mt-16 mb-16 ">Customer Reviews</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-24 lg:px-48 mx-auto mb-10 " >
            <div v-for="(review,index) in reviews" :key="index"
               class=" border border-gray-300 rounded-md shadow-md bg-[#f1f1f1]  px-5 py-5 flex flex-col ">
                <h1 class=" font-montserrat font-medium text-2xl tracking-wider leading-8" >{{ review.name }}</h1>
                <p class="font-lato text-[16px] tracking-wide my-5 leading-7  text-gray-500">{{review.review  }}</p> 
                <div class="flex items-center justify-between mt-auto ">
                    <div class="flex items-center">
                        <p class="font-lato text-[16px] tracking-wider py-4 px-3 text-gray-500 ">{{review.location }}</p>
                         <ion-icon v-for="(n,index) in Array.from({length:review.rating})" :key="'filled-'+ index"
                         name="star"
                         class="text-yellow-400 text-sm"></ion-icon>
                          <ion-icon v-for="(n,index) in Array.from({length:5-review.rating})" :key="'empty-'+ index"
                         name="star"
                         class="text-gray-400 text-sm"></ion-icon>  
                    </div>
                     <div>
                        <img :src="review.platform_logo" :alt="review.platform">
                     </div>    
                </div>         
            </div>
        </div>
    </div>


</template>
<script>
import reviews from "../../data/review.json"
export default{
    name:"reviews",
    data() {
        return {
            reviews
            
        }
    },
}
</script>