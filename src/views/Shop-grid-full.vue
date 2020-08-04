<template>
    <div class="shop-grid-full">
        <section class="path wrapper">
            <div class="pages">
                <ol>
                    <li><router-link to="/">Home</router-link></li>
                    <li><a href="#">Page</a></li>
                    <li><a href="#">Shop</a></li>
                    <li>Checkout</li>
                </ol>
            </div>
        </section>

        <section class="grid wrapper">
            <div class="grid-filter-container wrapper">
                <div ref="filter" class="grand-filter wrapper">
                    <div class="grand-categories">
                        <div class="categories-topic">CATEGORIES</div>
                        <div class="categories-list">
                            <ul>
                                <li>Accessories(15)</li>
                                <li>Dress(50)</li>
                                <li>Women(150)</li>
                                <li>Men(150)</li>
                                <li>Watch(150)</li>
                                <li>Clothing(150)</li>
                                <li>Bags(150)</li>
                            </ul>
                        </div>
                    </div>

                    <div class="grand-prices">
                        <div class="price-topic">PRICE FILTER</div>
                        <div class="price-selecter">
                            <input type="range"/>
                        </div>
                        <div class="price-nums-selecter wrapper">
                            <input type="number"/>
                            <input type="number"/><i class="fa fa-search wrapper"></i>
                        </div>
                    </div>

                    <div class="grand-size">
                        <div class="size-topic">SIZE</div>
                        <div class="size-categories wrapper">
                            <div>XS</div>
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>SL</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>

                    <div class="grand-color">
                        <div class="color-topic">COLORS</div>
                        <div class="color-selector">
                            <div>
                                <input type="checkbox" value="White" name="White"/>
                            </div>
                            <div>
                                <input type="checkbox" value="White" name="Black"/>
                            </div>
                            <div>
                                <input type="checkbox" value="White" name="Blue"/>
                            </div>
                            <div>
                                <input type="checkbox" value="White" name="Yellow"/>
                            </div>
                        </div>
                    </div>

                    <div class="grand-rated">
                        <div class="rated-topic">TOP RATED</div>
                        <div class="rated-selector wrapper">
                            <div class="wrapper">
                                <div :style="{backgroundImage: `url(${require('@/assets/product/bag2.jpg')})`}" class="img"></div>
                                <div class="content wrapper">
                                    <div class="txt">Casual men wearing cool shoe</div>
                                    <div class="price">$250.00</div>
                                </div>
                            </div>

                            <div class="wrapper">
                                <div :style="{backgroundImage: `url(${require('@/assets/product/bag2.jpg')})`}" class="img"></div>
                                <div class="content wrapper">
                                    <div class="txt">Casual men wearing cool shoe</div>
                                    <div class="price">$250.00</div>
                                </div>
                            </div>

                            <div class="wrapper">
                                <div :style="{backgroundImage: `url(${require('@/assets/product/bag2.jpg')})`}" class="img"></div>
                                <div class="content wrapper">
                                    <div class="txt">Casual men wearing cool shoe</div>
                                    <div class="price">$250.00</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="grand-banner wrapper">
                        <div :style="{backgroundImage: `url(${require('@/assets/relaxed.jpg')})`}" class="banner-container wrapper">
                            <div class="banner-content wrapper">
                                <div class="content-stars"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></div>
                                <div class="content-topic">UP TO 30% OFF</div>
                                <div class="content-delimiter">___</div>
                                <div class="content-txt">Hot & Trendy Clother</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid-main wrapper">
                    <div class="filter wrapper">
                        <div class="filter-text">Showing 1-12 of 44 results</div>
                        <div class="filter-categories">
                            <select>
                                <option>Sort by newest</option>
                                <option>Sort by oldest</option>
                                <option>Sort by popularity</option>
                            </select>
                        </div>
                    </div>

                    <div ref="filter_btn" class="btn-open-filter" @click="$refs.filter.classList.toggle('show-filter')">FILTER</div>
                    <div class="grid-container wrapper" id="list">
                        <router-link to="/shop-products-name" class="product" v-for="item in items" v-bind:key="item.id">
                            <div :style="{backgroundImage: `url(${require('@/assets/product/bag4.jpg')})`}" class="product-img"></div>
                            <div class="product-title">{{item.title}}</div>
                            <div class="product-price">${{item.price}}</div>
                            <div class="product-stars">
                                <i class="fa fa-star" v-for="stars in item.stars" v-bind:key="stars.id"></i>
                            </div>
                        </router-link>
                    </div>

                    <div class="grid-footer wrapper">
                        <div class="footer-nums-pages wrapper"><a href="#">1</a><a href="#">2</a><a href="#">3</a><a href="#">4</a><a href="#">5</a>
                            <p>...</p><a href="#">></a><a href="#">>></a>
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
                items: [
                    {title: "Cruise Dual Analog", price: "250.00", stars: 5},
                    {title: "Crown summit Backpack", price: "220.00", stars: 3},
                    {title: "Joust Duffle Bag", price: "190.00", stars: 5},
                    {title: "Voyage Yoga Bag", price: "2000.00", stars: 4},
                    {title: "Compete Truck Tote", price: "200.00", stars: 4},
                    {title: "Sprite Yoga Companion Kit", price: "200.00", stars: 5},
                    {title: "Strive Shoulder Pack", price: "200.00", stars: 3},
                    {title: "Impulse Duffle", price: "270.00", stars: 4},
                    {title: "Fusion Backpack", price: "250.00", stars: 3},
                ]
            };
        }
    };
</script>