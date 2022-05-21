<template>
    <div class="botoes-nav">
        <!--<button type="button" value="" class="btn" 
                    :class="{ active: mostraVisao}" @click="verVisao">Visão Geral</button>-->
        <input type="button" class="botao-left"
            :class="{ active: mostraConteudo}" @click="verConteudo">

        <input type="button" class="botao-right"
            :class="{ active: mostraConteudo}" @click="verConteudo">
    </div>
</template>

<script>
export default {
   name: 'BotoesNavegacao',

   data() {
       return {
           conteudo: "", 
       }
   }
}
</script>

<style lang="scss">
</style>