<template>
  <div>
    <section class="path wrapper">
      <div class="pages">
        <ol>
          <li><router-link to="/">Home</router-link></li>
          <li><a href="#">Page</a></li>
          <li><a href="#">Shop</a></li>
          <li>Cart</li>
        </ol>
      </div>
    </section>

    <section class="cart wrapper">
      <div class="tbl-container">
        <table border="1" class="tbl">
          <tr>
            <th>Products</th>
            <th>Color & Size</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          <tr v-for="product in products" v-bind:key="product.id">
            <td>
              <div class="product-info wrapper">
                <div :style="{backgroundImage: `url(${require('@/assets/product/' + product.img)})`}" class="img"></div>
                <div class="title">{{product.title}}</div>
              </div>
            </td>
            <td>Size:{{product.size}} Color:{{product.color}}</td>
            <td>
              {{product.quantity}}
            </td>
            <td>${{product.price}}</td>
            <td>${{product.price * product.quantity}}.00</td>
          </tr>

          <tr>
            <td colspan="5">
              <div class="tbl-footer wrapper">
                <button class="upd" v-on:click="getFromCart">UPDATE CART</button>
                <router-link to="/shop-grid-full"><button class="cont">CONTINUE SHOPPING</button></router-link>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </section>

    <section class="info wrapper">
      <div class="info-container wrapper">
        <div class="info-left wrapper">
          <div class="coupon wrapper">
            <div class="coupon-topic">Write your data</div>
            <div class="coupon-input wrapper">
              <label>Enter Your Last Name</label>
              <div class="wrapper">
                <input placeholder="Enter your Last Name here" v-model="last_name" required/>
                <button>Apply</button>
              </div>
            </div>
          </div>
          <div class="shipping wrapper">
            <div class="shipping-topic">SHIPPING AVAILABILITY</div>
            <div class="shipping-input wrapper">
              <div class="country"></div>
              <label>Select country</label>
              <select name="country" class="js-example-basic-single" v-model="country" required>
                <option selected>Ukraine</option>
                <option>Viet Nam</option>
                <option>USA</option>
              </select>
              <div class="state"></div>
              <label>Select State</label>
              <select v-model="state" required>
                <option>TP.HCM</option>
                <option>California</option>
                <option>Alabama</option>
              </select>
              <div class="postcode"></div>
              <label>Postcode/Zip</label>
              <input type="number" placeholder="Postcode/Zip" v-model="postcode" />
            </div>
          </div>
        </div>

        <div class="info-right wrapper">
          <div class="gift wrapper">
            <div class="gift-topic">WRITE YOUR EMAIL</div>
            <div class="gift-input wrapper">
              <label>Enter Your Email Here</label>
              <div class="wrapper">
                <form>
                  <input placeholder="Enter your email here" type="email" v-model="email" required/>
                  <button>Apply</button>
                </form>
              </div>
            </div>
          </div>

          <div class="shopping wrapper">
            <div class="shopping-topic">SHOPPING CART CALCULATION</div>
            <div class="shopping-info wrapper">
              <div class="info-calculation wrapper">
                <div class="subtotal wrapper">
                  <div>Subtotal</div>
                  <div>{{subtotal}}</div>
                </div>
                <div class="coupon wrapper">
                  <div>Coupon</div>
                  <div>- ${{coupon}}</div>
                </div>
                <div class="shipping wrapper">
                  <div>Shipping</div>
                  <div>Free Shipping</div>
                </div>
              </div>
              <div class="info-total wrapper">
                <div>Total</div>
                <div>${{total}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-footer wrapper">
        <button class="upd" v-on:click="subtotalCalculate">UPDATE TOTALS</button>
        <button class="proceed" v-on:click="addOrder" type="submit">PROCEED TO CHECKOUT</button>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        last_name:'',
        email:'',
        state:'',
        country:'',
        postcode:'',
        products: [],
        subtotal: 0,
        coupon: 50,
        total: 0
      }
    },
    methods:{
      getFromCart(){
        this.axios.get('http://larka/api/cart/get').then(response =>{
          this.products = response.data.products
        });
      },
      async subtotalCalculate(){
        for (let product of this.products){
          this.subtotal += await product.price * product.quantity
        }
        this.total = this.subtotal-this.coupon
      },
      addOrder(){
        let order = {
          last_name: this.last_name,
          email: this.email,
          state: this.state,
          country: this.country,
          postcode: this.postcode,
          total: this.total,
        };
        this.axios.post('http://larka/api/order/add', order).then(() =>{
          alert('Your order are save');
        }).catch((error)=>{
          console.log(error)
        })
      }
    },
    mounted() {
      this.getFromCart();
    }
  }
</script>
