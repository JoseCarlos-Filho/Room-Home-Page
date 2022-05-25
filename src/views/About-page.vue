<template>
    <main>
        <section class="container-top">
            <div>
                <img class="img-hero-1" src="../assets/desktop-image-hero-3.jpg">
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
            tituloInfo: "Manufactured with the best materials",
            conteudo: "Our modern furniture store provide a high level of quality. Our company\n" +
                      "has invested in advanced technology to ensure that every product is made\n" + 
                      "as perfect and as consistent as possible. With three decades of experience\n" +
                      "in this industry, we understand what customers want for their home and office."
        }
    },
    
    components: {
        ConteudoRoom,
        // ConteudoImagem,
        BotoesNavegacao,
    },

    
}

</script>

<style lang="scss">

@import '../StylesSass/styleAllPages.scss';

</style>