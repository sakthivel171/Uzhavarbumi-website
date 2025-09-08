import {createRouter,createWebHistory} from "vue-router"
import Home from "../pages/Home.vue"
import Samplemilk from "../pages/Milk/Samplemilk.vue"
import About from "../pages/About.vue"
import Contact from "../pages/Contact.vue"
import Products from "../pages/Products.vue"
import Ques from "../pages/Question.vue"
import Recipes from "../pages/Recipes.vue"
import Blog from "../pages/media/Blog.vue"
import ourPage from  "../pages/media/ourPage.vue"
import careers from "../pages/media/careers.vue"
import BUlk from "../pages/Milk/Bulk.vue"
import Process from "../pages/Milk/Process.vue"
import  Reviews from "../pages/customer/Reviews.vue"
import Media from "../pages/media/media.vue"
import Terms from "../pages/Terms/Terms.vue"
import Delivery from "../pages/Terms/Delivery.vue"
import Privacy from "../pages/Terms/Privacy.vue"
import Refund from "../pages/Terms/Refund.vue"


import Meter from "../pages/Meter.vue"
import Program from "../pages/customer/Program.vue"
import Policies from "../pages/customer/cusomerPolicies.vue"
import refer from "../pages/customer/refer.vue"
import Referral from "../pages/customer/Referral.vue"
import Areas from "../pages/Milk/Areas.vue"

const routes= [
    {path:"/",component:Home},
    {path:"/about",component:About},
    {path:"/recipes",component:Recipes},
    {path:"/products",component:Products},
    {path:"/meter",component:Meter},
    {path:"/faq",component:Ques},
    {path:"/contact",component:Contact},
    {path:"/blog",component:Blog},
    {path:"/our",component:ourPage},
    {path:"/careers",component:careers,},
    {path:"/bulk",component:BUlk},
    {path:"/process",component:Process},
    {path:"/reviews",component:Reviews},
    {path:"/media",component:Media},
    {path:'/terms',component:Terms},
    {path:'/delivery',component:Delivery},
    {path:"/privacy",component:Privacy},
    {path:'/refund',component:Refund},
    {path:"/Program",component:Program},
    {path:"/policies",component:Policies},
    {path:"/refer",component:refer},
    {path:"/referral",component:Referral},
    {path:"/areas",component:Areas},
    {path:"/sample",component:Samplemilk}

]



export default createRouter({
    history:createWebHistory(),
    routes,
    scrollBehavior(top,from,savedPosition){
        if(savedPosition){
            return savedPosition;
        }else{
            return{

                top:0,
               
            }
        }
    }
   
    
})
