<template>
    <div>
        <div v-for="(item, index) of itens" 
        :key= "index" v-show="selecionado===index">
            <p>
                {{ item.img }}
            </p>
            <h1>
                {{ item.content }}
            </h1>
        </div>
        <a v-on:click="paFrente">frente</a>
        <a v-on:click="paTras">tras</a>
    </div>

    
</template>

<script>

export default {
    data() {
        return{
            itens: [
                {img: "teste", content: "oi"}, 
                {img: "teste1", content: "cu"},
                {img: "teste2", content: "ja"},

            ],
            selecionado:0
        }
    },
    methods: {
        paFrente() {
            console.log(this.selecionado)
            if (this.selecionado+1 === this.itens.length) {
                this.selecionado = 0
            } else {
                this.selecionado++
            }
            
        },
        paTras() {
            console.log(this.selecionado)
            if (this.selecionado == 0) {
                console.log("entrou no if")
                
                this.selecionado = this.itens.length-1
            } else {
                console.log("entrou no else")
                this.selecionado--
            }
            
        }

    },
    mounted() {
        
    }
}
</script>

<style scoped> 
p {
    color: black;
}
h1 {
    color: black;
}

a {
    color: black;
    font-size: 20px;
}
</style>