<template>
  <div>
    <section class="slider wrapper">
      <div class="slider-show">
        <Carousel :per-page="1" :mouse-drag="false" :autoplay="true" :paginationEnabled="false" :autoplayTimeout=3000 :loop="true" style="height: 100%;">
          <Slide :style="{backgroundImage: `url(http://larka/storage/slider-img/krossovki_3.jpg)`}"  class="slides" style="width: 1920px; height: 800px"></Slide>
          <Slide :style="{backgroundImage: `url(http://larka/storage/slider-img/krossovki_2.jpg)`}"  class="slides" style="width: 1920px; height: 800px"></Slide>
          <Slide :style="{backgroundImage: `url(http://larka/storage/slider-img/krossovki_1.jpg)`}"  class="slides" style="width: 1920px; height: 800px"></Slide>
        </Carousel>
      </div>
      <div class="slider-content wrapper">
        <div class="content-topic wrapper">
          <div class="topic-start">THE BEST</div>
          <div class="topic-continue">WOOCOMMERCE</div>
        </div>
        <div class="content-text wrapper">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        <div class="content-btn">
          <button>BUY NOW</button>
        </div>
      </div>
    </section>

    <section class="sellers wrapper">
      <div class="sellers-best wrapper">
        <div class="best-topic">BEST SELLERS</div>
        <div class="best-sentence">The best production from us</div>
        <div class="best-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
      </div>

      <div class="sellers-first wrapper" v-for="product in catalog" v-bind:key="product.id">
        <div :style="{backgroundImage: `url(http://larka/storage/product/${product.img})`}" class="first-img wrapper">
          <div class="first-icons wrapper">
            <div class="shopping wrapper"><i class="fa fa-shopping-cart fa-2x"></i></div>
            <div class="heart wrapper"><i class="fa fa-heart fa-2x"></i></div>
            <div class="refresh wrapper"><i class="fas fa-retweet fa-2x"></i></div>
          </div>
        </div>
        <router-link :to="'/shop-products-name/' + product.id" class="first-title">{{product.title}}</router-link>
        <div class="first-price">${{product.price}}</div>
        <div class="first-stars">
          <i class="fa fa-star" v-for="stars in product.stars" v-bind:key="stars.id"></i>
        </div>
      </div>
    </section>

    <section class="static-blocks wrapper">
      <div class="block-special wrapper">
        <div class="special-img"><i class="fas fa-gem fa-3x"></i></div>
        <div class="special-topic">SPECIAL OFFERS</div>
        <div class="special-text">Shop Big Save Big</div>
      </div>

      <div class="block-free wrapper">
        <div class="free-img"><i class="fab fa-telegram-plane fa-3x"></i></div>
        <div class="free-topic">FREE DELIVERY</div>
        <div class="free-text">On Orders Above $99</div>
      </div>

      <div class="block-return wrapper">
        <div class="return-img"><i class="fas fa-retweet fa-3x"></i></div>
        <div class="return-topic">30 DAYS RETURN</div>
        <div class="return-text">Policy We Offers</div>
      </div>

      <div class="block-shipping wrapper">
        <div class="shipping-img"><i class="fas fa-rocket fa-3x"></i></div>
        <div class="shipping-topic">FASTEST SHIPPING</div>
        <div class="shipping-text">2 Day Express</div>
      </div>
    </section>

    <section class="categories wrapper">
      <div class="first-cantainer wrapper">
        <div class="container-content wrapper">
          <div class="content wrapper">
            <div class="categorie">FASHION</div>
            <div class="topic">SUMMER & AUTUMN</div>
            <div class="collection">WINTER COLLECTION</div>
          </div>
        </div>
      </div>

      <div class="second-cantainer wrapper">
        <div class="container-content wrapper">
          <div class="content wrapper">
            <div class="categorie">FASHION FOR MEN</div>
            <div class="topic">30% OFF</div>
            <div class="collection">WINTER COLLECTION</div>
          </div>
        </div>
      </div>

      <div class="third-cantainer wrapper">
        <div class="container-content wrapper">
          <div class="content wrapper">
            <div class="categorie">FASHION</div>
            <div class="topic">NEW FASHION STYLES</div>
            <div class="collection">WINTER COLLECTION</div>
          </div>
        </div>
      </div>
    </section>

    <section class="products wrapper">
      <div class="products-title wrapper">
        <div class="title">FEATURED PRODUCTS</div>
        <div class="sentence">Newest trends from top brends</div>
      </div>

      <div class="products-container wrapper">
        <div class="product" v-for="product in products" :key="product.id">
          <div :style="{backgroundImage: `url(http://larka/storage/product/${product.img})`}" class="product-img"></div>
          <router-link :to="'/shop-products-name/' + product.id" class="product-title">{{product.title}}</router-link>
          <div class="product-price">${{product.price}}</div>
          <div class="product-stars">
            <i class="fa fa-star" v-for="stars in product.stars" :key="stars"></i>
          </div>
        </div>
      </div>
    </section>

    <section class="subscribe-clients wrapper">
      <section class="subscribe wrapper" :style="{ backgroundImage: `url(http://larka/storage/bg.jpg)`}">
        <div class="subscripe-topic">Get Out Special Discount</div>
        <div class="subscribe-text">Donec eu tristique felis. Duis augue mi, auctor ut purus et, dignissim aliquet quam. register your email for news and special offers</div>
        <div class="subscribe-form wrapper">
          <input placeholder="E-mail adress..."/>
          <button>GET COUPON NOW</button>
        </div>
      </section>

      <section class="clients wrapper">
        <div :style="{backgroundImage: `url(http://larka/storage/brand/brand-logo-4a.png)`}" class="client-first wrapper"></div>
        <div :style="{backgroundImage: `url(http://larka/storage/brand/brand-logo-1a.png)`}" class="client-second wrapper"></div>
        <div :style="{backgroundImage: `url(http://larka/storage/brand/brand-logo-2a.png)`}" class="client-third wrapper"></div>
        <div :style="{backgroundImage: `url(http://larka/storage/brand/brand-logo-3a.png)`}" class="client-fourth wrapper"></div>
      </section>
    </section>
  </div>
</template>

<script>
  import { Carousel, Slide } from 'vue-carousel'


  export default {
    data() {
      return {
        catalog:[],
        products:[]
      };
    },
    components:{
      Carousel,
      Slide
    },
    mounted(){
      this.getCatalog();
      this.getProducts();
    },
    methods: {
      getCatalog() {
        this.axios.get('http://larka/api/products/catalog').then(response => {
          this.catalog = response.data.catalog;
        });
      },
      getProducts(){
        this.axios.get('http://larka/api/product').then(response => {
          this.products = response.data.products;
        });
      }
    }
  }
</script>
