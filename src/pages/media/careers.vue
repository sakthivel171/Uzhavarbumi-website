<template>
    <div class="py-10 sm:px-8">
        <h1 class="text-center tracking-widest font-montserrat font-medium text-3xl lg:text-4">Welcome to Uzhavarbumi's Career Page!</h1>
        <div class="mb-10 text-center mx-auto max-w-[600px] leading-7 px-6">
               <h4 class="text-center font-montserrat font-semibold text-2xl my-8">Join us & be part of a social-impact Startup</h4>
               <p class="font-lato text-[16px] tracking-wide    text-gray-500 mt-4">We are always looking for talented team members to help us provide a better service to our customers. UB provides equal opportunities to all employees and encourages creativity and growth.</p>
               <p class="font-lato text-[16px] tracking-wide  text-gray-500 mt-4">Scroll below to see the open positions at UB. We can't wait to welcome you to the UB Family!</p>
               <p class="font-lato text-[16px] tracking-wide  text-gray-500 mt-4">And if you really feel you could help us in other departments, drop us an email and we'll get back to you! We look forward to hearing from you!</p>
               <a href="" >
                    <button class=" border border-gray-500 text-white  px-6 py-2 text-lg rounded-md mt-8 bg-lime-600 font-medium  shadow shadow-slate-300 ">View Openings</button>
               </a>
        </div>
        <div class="flex flex-wrap justify-center gap-10 mx-auto">
            <div>
                <div class="mb-10  mx-auto max-w-[640px] leading-7 px-6">
                   <h1 class=" font-montserrat font-medium text-2xl lg:text-4">What do we do?</h1>
                   <h4 class=" font-montserrat font-medium text-xl my-4">We are Chennai's Award-winning Fresh Cow Milk Door-delivery service.</h4>
                   <p class="font-lato text-[16px] tracking-wide    text-gray-500 mt-4">Uzhavarbumi Agro Products Pvt Ltd, founded in July 2017, is a fresh dairy products company based in Maduranthakam, Chengalpattu, India. UB's prime motive is to establish direct trade between local farmers and consumers.</p>
                   <p class="font-lato text-[16px] tracking-wide  text-gray-500 mt-4">Today, UB is one of Tamilnadu's leading brands, merchandising fresh dairy products.</p>
                </div>  
            </div>
            <div class="py-6">
                <img src="\src\assets\careers.png" alt="">

            </div>
        </div>
        <div class="py-14">
            <div class="text-center mx-auto lg:w-[640px]">
                <h4 class=" font-lato font-medium text-3xl my-4">Benefits and Perks</h4>
                <p class="font-lato text-[16px] tracking-wide    text-gray-500 mt-4">Our employees are the pillars of our brand & here's how we take care of their wellbeing!</p>
            </div>

            <div class="grid  lg:grid-cols-3 px-6 md:px-24 lg:px-48 mx-auto gap-14 my-10 ">
                <div>
                    <img src="https://uzhavarbumi.com/images/careers/balance-scale.png" alt="work culture" class="w-11 h-11">
                    <h4 class=" font-montserrat font-medium text-2xl my-4">Work Culture</h4>
                    <p class="font-lato text-[16px] tracking-wide    text-gray-500 mt-4">We provide a workplace for you to learn, explore and skill up. You will be a part of regular meetings with different people from the food & agriculture industry.</p>
                </div>
                <div>
                    <img src="https://uzhavarbumi.com/images/careers/home.png" alt="housing & food"  class="w-11 h-11">
                    <h4 class=" font-montserrat font-medium text-2xl my-4">Housing & Food</h4>
                    <p class="font-lato text-[16px] tracking-wide    text-gray-500 mt-4">we will provide free accommodation if you live far away and cannot travel to work every day. And provide with healthy and homemade food of course!</p>
                </div>
                <div>
                    <img src="https://uzhavarbumi.com/images/careers/handshake.png" alt="other benifits"  class="w-11 h-11">
                    <h4 class=" font-montserrat font-medium text-2xl my-4">Other Benefits</h4>
                    <p class="font-lato text-[16px] tracking-wide    text-gray-500 mt-4">We will open an EPF & ESI account for your provident savings. We will provide insurance coverage for the tenure of your work. Surprise gifts for special occasions!</p>
                </div>
            </div>
        </div>
        <h4 class=" font-lato font-medium text-3xl mb-10 tracking-widest text-center">Current Openings</h4>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-24 lg:px-48 mx-auto mb-10">
            <div v-for="(job,index) in jobs" :key="index"
            class="p-4 border border-gray-300 rounded shadow-sm py-6">
                    <h1 class=" font-montserrat font-medium text-xl ">{{ job.role }}</h1>
                    <p class="font-lato text-[13px] tracking-wide    text-gray-500">{{ job.dept }}</p>
                    <h4 class="font-montserrat font-semibold text-[16px] mt-1 text-gray-500"><span class="font-lato text-[14px] tracking-wide    text-gray-400" >Type :</span> {{ job.type }}</h4>
                    <p class="font-montserrat font-semibold text-[16px]  mt-1 mb-3  text-gray-500"><span class="font-lato text-[14px] tracking-wide    text-gray-400">Location :</span>{{ job.location }}</p>
                    <a :href="job.link"  class="text-blue-500">Apply</a>

            </div>
        </div>
        

    </div>

</template>
<script>
import jobs from "../../data/jobs.json"
export default{
    name:"careers",
    data() {
        return {
            jobs
        }
    },
}
</script>