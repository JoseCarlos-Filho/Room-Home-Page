<template>
    <main>
        <section class="container-top">
            <div>
                <img class="img-hero-1" src="../assets/desktop-image-hero-1.jpg">
            </div>      
            <div>
                <ConteudoRoom 
                    :title = tituloInfo
                    :content = conteudo
                />
                <h4>SHOP NOW ></h4>  
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
export default {
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
    },
}

</script>

<style lang="scss">

@import '../StylesSass/styleAllPages.scss';

</style>