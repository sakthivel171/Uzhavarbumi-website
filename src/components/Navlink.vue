<template>
    <router-link :to="to"  class="inline-block  ">
        <slot></slot>
    </router-link>
</template>
<script>
export default{
    name:"NavLink",
    props:{
        to:{
            type:String
        }
    }
}
</script>
