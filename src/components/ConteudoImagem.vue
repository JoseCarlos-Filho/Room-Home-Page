<template>
    <div>
        <!--<img :src="require(`${srcImagem}`)">-->
        <img :src="require(`${srcImagem}`)">
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