<template>
    <div style="height: 800px; width: 100%">
        <Carousel :per-page="1" :mouse-drag="false" :autoplay="true" :paginationEnabled="false" :autoplayTimeout=1000>
            <Slide :style="{backgroundImage: `url(${require('@/assets/slider-img/krossovki_3.jpg')})`}" style="width: 1920px; height: 800px">

            </Slide>
            <Slide :style="{backgroundImage: `url(${require('@/assets/slider-img/krossovki_2.jpg')})`}" style="width: 1920px; height: 800px">

            </Slide>
            <Slide :style="{backgroundImage: `url(${require('@/assets/slider-img/krossovki_1.jpg')})`}" style="width: 1920px; height: 800px">

            </Slide>
        </Carousel>
    </div>
</template>

<script>
    import {Carousel, Slide} from 'vue-carousel'
    export default {
        components:{
                Carousel,
                Slide
        }
    }
</script>