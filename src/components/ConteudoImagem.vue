<template>
    <div>
        <img :class=clName :src="require(`../assets/${srcImagem}`)">
    </div>
</template>

<script>
import {defineComponent} from 'vue'
 export default defineComponent({
    name: 'ConteudoImagem',
    props: {
        srcImagem: {
            type: String,
        },
        clName: {
            type: String,
        }

    }
 })

</script>

<style lang="scss">
</style>