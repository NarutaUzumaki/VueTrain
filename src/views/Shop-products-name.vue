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
                <div class="product-gallery wrapper">
                    <div :style="{backgroundImage: `url(${require('@/assets/product/bag4.jpg')})`}" class="gallery-main"></div>
                    <div class="gallery-slider wrapper">
                        <div class="slider-left-btn wrapper">&#171;</div>
                        <div :style="{backgroundImage: `url(${require('@/assets/product/bag3.jpg')})`}" class="slider-img"></div>
                        <div :style="{backgroundImage: `url(${require('@/assets/product/bag2.jpg')})`}" class="slider-img"></div>
                        <div :style="{backgroundImage: `url(${require('@/assets/product/bag1.jpg')})`}" class="slider-img"></div>
                        <div class="slider-right-btn wrapper">&#187;</div>
                    </div>
                </div>

                <div class="product-content">
                    <div class="content-topic">This is Product name</div>
                    <div class="content-price-star wrapper">
                        <div class="price">$250.00</div>
                        <div class="star"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                    </div>
                    <div class="content-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</div>
                    <div class="buy-container">
                        <div class="buy-select wrapper">
                            <select>
                                <option>Select size</option>
                            </select>
                            <select>
                                <option>Select Color</option>
                            </select>
                        </div>
                        <div class="buy-it">
                            <div class="quantity wrapper">
                                <input type="button" value="-" class="btn-minus"/>
                                <input type="number" step="1" value="1" class="quantity-field"/>
                                <input type="button" value="+" class="btn-plus"/>
                            </div>
                            <div class="buy-btns wrapper">
                                <div class="btn-add wrapper">
                                    <div class="add"><i class="fa fa-shopping-cart"></i></div>
                                    <div class="add">ADD TO CARD</div>
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
                    <div class="product" v-for="item in items" v-bind:key="item.id">
                        <div :style="{backgroundImage: `url(${item.bg})`}" class="product-img"></div>
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
    import bg from '@/assets/product/bag1.jpg'
    export default {
        data() {
            return {
                items: [
                    {title: "Cruise Dual Analog", price: "250.00", stars: 5, bg},
                    {title: "Crown summit Backpack", price: "220.00", stars: 3, bg},
                    {title: "Joust Duffle Bag", price: "190.00", stars: 5, bg},
                    {title: "Voyage Yoga Bag", price: "2000.00", stars: 4, bg},
                ]
            };
        }
    };
</script>