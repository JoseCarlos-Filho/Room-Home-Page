<template>
    <main>
        <section class="container-top">
            <div>
                <img class="img-hero-1" src="../assets/desktop-image-hero-2.jpg">
            </div>
            
            <!--<ConteudoImagem
                   :srcImage = imgUrl
                   :clName = className
            />-->       
            <div>
                <ConteudoRoom 
                    :title = tituloInfo
                    :content = conteudo
                />
                <h4>SHOP NOW ></h4>
                <BotoesNavegacao />  
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
import BotoesNavegacao from '../components/BotoesNavegacao'
export default {
    // name: 'Home-page',
    data () {
        return {
            tituloInfo: "We are available all across the globe",
            conteudo: "With stores all over the world, it's easy for you to find furniture\n" +
                      "for your home or place of business. Locally, we’re in most major cities\n" +
                      "throughout the country. Find the branch nearest you using our store locator.\n" +
                      "Any questions? Don't hesitate to contact us today."
        }
    },
    
    components: {
        ConteudoRoom,
        // ConteudoImagem,
        BotoesNavegacao,
    },

    methods: {
        // verContent() {
        //    
        //   this.imgUrl = "desktop-image-hero-1.jpg",
        //   this.className = "img-hero-1"
        //     
        // }
    }
}

</script>

<style lang="scss">

@import '../StylesSass/styleAllPages.scss';

</style>