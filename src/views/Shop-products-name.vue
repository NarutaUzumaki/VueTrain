<template>
    <div>
        <section class="path wrapper">
            <div class="pages">
                <ol>
                    <li><router-link to="/">Home</router-link></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Shop</a></li>
                    <li>Product</li>
                </ol>
            </div>
        </section>

        <section class="product-view-big wrapper">
            <div class="product wrapper">
                <div class="product-gallery wrapper" v-for="product in product" v-bind:key="product.id">
                    <div :style="{backgroundImage: `url(http://larka/storage/product/${product.img})`}" class="gallery-main"></div>
                    <div class="gallery-slider wrapper">
                        <div class="slider-left-btn wrapper">&#171;</div>
                        <div :style="{backgroundImage: `url(http://larka/storage/product/bag3.jpg)`}" class="slider-img"></div>
                        <div :style="{backgroundImage: `url(http://larka/storage/product/bag2.jpg)`}" class="slider-img"></div>
                        <div :style="{backgroundImage: `url(http://larka/storage/product/bag1.jpg)`}" class="slider-img"></div>
                        <div class="slider-right-btn wrapper">&#187;</div>
                    </div>
                </div>

                <div class="product-content" v-for="product in product" v-bind:key="product.id">
                    <div class="content-topic">{{product.title}}</div>
                    <div class="content-price-star wrapper">
                        <div class="price">${{product.price}}</div>
                        <div class="star">
                            <i class="fa fa-star" v-for="stars in product.stars" v-bind:key="stars"></i>
                        </div>
                    </div>
                    <div class="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
                    <div class="buy-container">
                        <div class="buy-select wrapper">
                            <select v-model="size">
                                <option selected disabled>Select size</option>
                                <option>L</option>
                                <option>XS</option>
                                <option>XL</option>
                            </select>
                            <select v-model="color">
                                <option selected disabled>Select Color</option>
                                <option>Black</option>
                                <option>Dark Blue</option>
                                <option>Light Gray</option>
                            </select>
                        </div>
                        <div class="buy-it">
                            <div class="quantity wrapper">
                                <input type="button" value="-" class="btn-minus" v-on:click="minus"/>
                                <input v-model="quantity" type="number" step="1" value="1" class="quantity-field"/>
                                <input type="button" value="+" class="btn-plus" v-on:click="quantity+=1"/>
                            </div>
                            <div class="buy-btns wrapper">
                                <div class="btn-add wrapper">
                                    <div class="add"><i class="fa fa-shopping-cart"></i></div>
                                    <div class="add" v-on:click="addToCart" style="cursor: pointer">ADD TO CART</div>
                                </div>
                                <div class="btn-like wrapper"><i class="fa fa-heart"></i></div>
                                <div class="btn-refresh wrapper"><i class="fa fa-retweet"></i></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="description-reviews wrapper">
            <div class="description-reviews-container">
                <div class="reclick wrapper">
                    <div class="description wrapper">Description</div>
                    <div class="reviews wrapper">Reviews</div>
                </div>
                <div class="description-txt wrapper">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div class="reviews-container"></div>
            </div>
        </section>

        <section class="related-products wrapper">
            <div class="related-container wrapper">

                <div class="related-top wrapper">
                    <div class="top-topic">Related Products</div>
                    <div class="top-arrows">
                        <div class="left-arrow">
                            <i class="fa fa-arrow-left"></i>
                        </div>
                        <div class="right-arrow">
                            <i class="fa fa-arrow-right"></i>
                        </div>
                    </div>
                </div>

                <div class="related-main wrapper">
                    <div class="product" v-for="item in catalog" v-bind:key="item.id">
                        <div :style="{backgroundImage: `url(http://larka/storage/product/${item.img})`}" class="product-img"></div>
                        <div class="product-title">{{item.title}}</div>
                        <div class="product-price">${{item.price}}</div>
                        <div class="product-stars">
                            <i class="fa fa-star" v-for="stars in item.stars" v-bind:key="stars.id"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                catalog: [],
                product: null,
                size: '',
                color: '',
                quantity: 1
            };
        },
        methods: {
            getProductById(){
                this.axios.get('http://larka/api/product/' + this.$route.params.id).then(response => {
                    this.product = response.data;
                });
            },
            addToCart(){
                let element = {
                  title: this.product.product.title,
                  price: this.product.product.price,
                  stars: this.product.product.stars,
                  img: this.product.product.img,
                  size: this.size,
                  color: this.color,
                  quantity: this.quantity
                };
                this.axios.post('http://larka/api/cart/add', element).then(()=>{
                    alert('Product(s) added');
                })
            },
            getCatalog() {
                this.axios.get('http://larka/api/products/catalog').then(response => {
                    this.catalog = response.data.catalog;
                });
            },
            minus(){
                this.quantity-=1;
                if (this.quantity < 1){
                    this.quantity = 1;
                }
            }
        },
        mounted() {
            this.getProductById();
        },
    };
</script>