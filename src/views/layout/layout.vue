<template>
    <div>
        <section class="nav-bar wrapper">
            <div class="nav-top wrapper">
                <div class="top-left wrapper">
                    <div class="num-container wrapper"><i class="fa fa-phone fa-2x"></i>
                        <div class="left-num wrapper">+1 123 456 789</div>
                    </div>
                    <div class="mail-container wrapper"><i class="fa fa-envelope fa-2x"></i>
                        <div class="left-mail wrapper">info@company.com</div>
                    </div>
                </div>
                <div class="top-right wrapper">
                    <i class="fab fa-facebook-f fa-2x"></i>
                    <i class="fab fa-twitter fa-2x"></i>
                    <i class="fab fa-instagram fa-2x"></i>
                    <i class="fab fa-linkedin-in fa-2x"></i>
                    <i class="fab fa-behance fa-2x"></i>
                </div>
            </div>

            <div class="nav-down wrapper">
                <div ref="logo" class="down-open-menu" @click="$refs.menu.classList.toggle('show-menu'), $refs.icons.classList.toggle('show-icons')"><i class="fa fa-bars fa-2x"></i></div>
                <div class="down-logo wrapper">RENOSHOP
                    <div class="word-continue">BEE</div>
                </div>
                <div ref="menu" class="down-menu wrapper">
                    <router-link to="/" class="wrapper">HOME</router-link>
                    <router-link to="/shop-grid-full" class="wrapper">CHECKOUT</router-link>
                    <router-link to="/shop-products-name" class="wrapper">PRODUCT</router-link>
                    <a class="wrapper">KIDS</a>
                    <a class="wrapper">JEWELLERRY</a>
                    <a class="wrapper">ACCESSORIES</a>
                </div>
                <div ref="icons" class="down-icons wrapper">
                    <router-link to="/shop-cart">
                        <i class="fa fa-shopping-cart fa-2x"></i>
                    </router-link>
                    <i class="fa fa-search fa-2x"></i>
                    <i class="fab fa-accessible-icon fa-2x"></i>
                </div>
            </div>
        </section>

        <router-view/>

        <section class="footer wrapper">
            <div class="footer-icons wrapper">
                <div class="icons-text">We're confident we've provided all the best for you. Stay connect with us</div>
                <div class="icons-small wrapper"><i class="fab fa-facebook-f fa-2x"></i><i class="fab fa-twitter fa-2x"></i><i class="fab fa-instagram fa-2x"></i><i class="fab fa-linkedin-in fa-2x"></i><i class="fab fa-behance fa-2x"></i></div>
            </div>
            <div class="footer-content wrapper">
                <div class="content-information wrapper">
                    <div class="information-topic">INFORMATION</div>
                    <div class="information-list">
                        <ul>
                            <li>Delivery information</li>
                            <li>Discount</li>
                            <li>Sitemap</li>
                            <li>Privacy Policy</li>
                            <li>My account</li>
                        </ul>
                    </div>
                </div>

                <div class="content-account wrapper">
                    <div class="account-topic">MY ACCOUNT</div>
                    <div class="account-list">
                        <ul>
                            <li>Sign In</li>
                            <li>View Cart</li>
                            <li>My Wishlist</li>
                            <li>Check Out</li>
                            <li>Track my order</li>
                        </ul>
                    </div>
                </div>

                <div class="content-help wrapper">
                    <div class="help-topic">HELP</div>
                    <div class="help-list">
                        <ul>
                            <li>F.A.Q.</li>
                            <li>Shipping</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
                </div>

                <div class="content-info wrapper">
                    <div class="info-topic">CONTACT INFO</div>
                    <div class="info-list">
                        <ul>
                            <li class="wrapper">
                                <div class="globe"><i class="fa fa-globe"></i></div>
                                <div class="text">1234 Your Adress, Country</div>
                            </li>
                            <li class="wrapper">
                                <div class="phone"><i class="fa fa-phone"></i></div>
                                <div class="text">+ 1 123 5678 9999</div>
                            </li>
                            <li class="wrapper">
                                <div class="envelope"><i class="fa fa-envelope"></i></div>
                                <div class="text">mail@domain.com</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="footer-requisites wrapper">
                <div class="requisites-content wrapper">
                    <div class="requisites-text wrapper">Copyright 2017 RenoshopBee all right reserved - Design by BeeStudios</div>
                    <div class="requisites-cards wrapper"><i class="fab fa-cc-visa fa-3x"></i><i class="fab fa-cc-paypal fa-3x"></i><i class="fab fa-cc-amazon-pay fa-3x"></i><i class="fab fa-cc-mastercard fa-3x"></i><i class="fab fa-cc-amex fa-3x"></i></div>
                </div>
            </div>
        </section>
    </div>
</template>
