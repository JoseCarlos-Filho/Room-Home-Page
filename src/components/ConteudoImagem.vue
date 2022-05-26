<template>
    <div>
        <!--<img :src="require(`${srcImagem}`)">-->
        <img :src="require(`@/assets/${srcImagem}`)" class="img-hero-1">
    </div>
</template>

<script>

// import { defineComponent } from 'vue'

 export default {
     name: 'ConteudoImagem',
     props: {
         srcImagem: {
             type: String,
        }
    }
 }
 

    

</script>

<style lang="scss">
</style>