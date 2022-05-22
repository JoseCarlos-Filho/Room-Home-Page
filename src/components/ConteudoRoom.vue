<template>
    <div>
        <h1>
            {{ title }}
        </h1>
        <p>
            {{ content }}
        </p>
    </div>
</template>

<script>
    export default {
        name: 'ConteudoRoom',
    
    props: {
        title: {
            type: String
        },

        content: {
            type: String,
        },
    }
}
</script>

<style lang="scss">
</style>