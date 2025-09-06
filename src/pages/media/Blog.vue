<template>
    <div>
         <h4 class="  font-montserrat text-4xl text-center font-medium mt-16 mb-4 ">Uzhavarbumi Blog | Dairy Diary</h4>
         <p class="text-gray-500 leading-loose text-lg font-lato tracking-wider text-center pb-6">You can find out about the changes in management and technology through the blog.</p>
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-24 lg:px-48 mx-auto mb-10" >
            <div v-for="(blog,index) in blogs" :key="index"
            class=" border border-gray-300 rounded-md shadow-md ">
            <div class="bg-[#f1f1f1] py-4 px-3 min-h-[120px]">
                <h1 class=" font-montserrat font-medium text-xl tracking-wider leading-8" ><a :href="blog.link">{{blog.title}} </a></h1>
                <p class="font-lato text-[13px] tracking-wide  text-gray-600">{{blog.by  }}</p>          
            </div>
            <p class="font-lato text-[16px] tracking-wider leading-7 py-4 px-3 text-gray-500 ">{{blog.content  }}</p>
            </div>
        </div>
    </div>
 
</template>
<script>
import blogs from "../../data/blog.json"
export default{
    name:"blogs",
    data() {
        return {
            blogs
            
        }
    },
}
</script>