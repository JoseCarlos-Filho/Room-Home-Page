<template>
    <main>
        <section class="container-top">
            <div>
                <img class="img-hero-1" src="../assets/desktop-image-hero-1.jpg">
            </div>
            
            <!--<ConteudoImagem
                   
                   v-bind:srcImagem="require('../assets/desktop-image-hero-1.jpg')"
                  
            />-->       
            <div>
                <ConteudoRoom 
                    :title = tituloInfo
                    :content = conteudo
                />
                <h4>SHOP NOW ></h4>
                <div class="botoes-nav">
                    <input type="button" class="botao-left"
                    :class="{ active: mostraConteudo}" @click="verConteudo">

                    <input type="button" class="botao-right"
                    :class="{ active: mostraConteudo}" @click="verConteudo">
                </div>  
            </div>
        </section>

        <section class="container-bottom">
            <div>
                <img src="../assets/image-about-dark.jpg" class="img-dark-about">
            </div>
            <div>
                <h2>ABOUT OUR FURNITURE</h2>
                <p>Our multifunctional collection blends design and function to suit your individual
                   taste. Make each room unique, or pick a cohesive theme that best express your
                   interests and what inspires you. Find the furniture pieces you need, from 
                   traditional to contemporary styles or anything in between. Product specialists
                   are available to help you create your dream space.
                </p>
            </div>
            <div>
                <img src="../assets/image-about-light.jpg" class="img-light-about">
            </div>
        </section>
    </main>
</template>

<script>
import ConteudoRoom from '../components/ConteudoRoom'
// import ConteudoImagem from '../components/ConteudoImagem'
// import BotoesNavegacao from '../components/BotoesNavegacao'
export default {
    // name: 'Home-page',
    data () {
        return {
            tituloInfo: "Discovery innovative ways to decorate",
            conteudo:   "We provide unmatched quality, comfort, and style for property \n" +
                        "owners across the country. Our experts combine from and \n" + 
                        "function in bringing your vision to life. Create a room in your own \n" +
                        "style with our collection and make your property a reflection of \n" +
                        "you and what you love."
        }
    },
    
    components: {
        ConteudoRoom,
        // ConteudoImagem,
        // BotoesNavegacao,
    },

    // methods: {
    //     verHome() {
           
    //       this.tituloInfo =  "Discovery innovative ways to decorate"
    //       this.conteudo = "We provide unmatched quality, comfort, and style for property \n" +
    //                       "owners across the country. Our experts combine from and \n" + 
    //                       "function in bringing your vision to life. Create a room in your own \n" +
    //                       "style with our collection and make your property a reflection of \n" +
    //                       "you and what you love."

    //     },

    //     verShop() {
    //         this.tituloInfo =  "We are available all across the globe"
    //         this.conteudo = "With stores all over the world, it's easy for you to find furniture\n" +
    //                         "for your home or place of business. Locally, we’re in most major cities\n" +
    //                         "throughout the country. Find the branch nearest you using our store locator.\n" +
    //                         "Any questions? Don't hesitate to contact us today."
    //     },

    //     verAbout() {
    //          this.tituloInfo =  "Manufactured with the best materials"
    //         this.conteudo = "Our modern furniture store provide a high level of quality. Our company\n" +
    //                         "has invested in advanced technology to ensure that every product is made\n" + 
    //                         "as perfect and as consistent as possible. With three decades of experience\n" +
    //                         "in this industry, we understand what customers want for their home and office."
    //     }
    // }
}

</script>

<style lang="scss">

@import '../StylesSass/styleAllPages.scss';

</style>