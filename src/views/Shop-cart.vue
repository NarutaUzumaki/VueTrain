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
          <tr>
            <td>
              <div class="product-info wrapper">
                <div :style="{backgroundImage: `url(${require('@/assets/product/bag1.jpg')})`}" class="img"></div>
                <div class="title">Casual men wearing cool shoe</div>
              </div>
            </td>
            <td>Size:XL Color:Black</td>
            <td>
              1
            </td>
            <td>$120</td>
            <td>$120</td>
          </tr>
          <tr>
            <td>
              <div class="product-info wrapper">
                <div :style="{backgroundImage: `url(${require('@/assets/product/bag2.jpg')})`}" class="img"></div>
                <div class="title">Casual men wearing cool shoe</div>
              </div>
            </td>
            <td>Size:XL Color:Black</td>
            <td>
              1
            </td>
            <td>$120</td>
            <td>$120</td>
          </tr>
          <tr>
            <td>
              <div class="product-info wrapper">
                <div :style="{backgroundImage: `url(${require('@/assets/product/bag3.jpg')})`}" class="img"></div>
                <div class="title">Casual men wearing cool shoe</div>
              </div>
            </td>
            <td>Size:XL Color:Black</td>
            <td>
              1
            </td>
            <td>$120</td>
            <td>$120</td>
          </tr>
          <tr>
            <td colspan="5">
              <div class="tbl-footer wrapper">
                <button class="upd">UPDATE CART</button>
                <button class="cont">CONTINUE SHOPPING</button>
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
                <input placeholder="Enter your Last Name here"/>
                <button>Apply</button>
              </div>
            </div>
          </div>
          <div class="shipping wrapper">
            <div class="shipping-topic">SHIPPING AVAILABILITY</div>
            <div class="shipping-input wrapper">
              <div class="country"></div>
              <label>Select country</label>
              <select name="country" class="js-example-basic-single">
                <option>Ukraine</option>
                <option>Viet Nam</option>
              </select>
              <div class="state"></div>
              <label>Select State</label>
              <select>
                <option>TP.HCM</option>
              </select>
              <div class="postcode"></div>
              <label>Postcode/Zip</label>
              <input placeholder="Postcode/Zip"/>
            </div>
          </div>
        </div>

        <div class="info-right wrapper">
          <div class="gift wrapper">
            <div class="gift-topic">WRITE YOUR EMAIL</div>
            <div class="gift-input wrapper">
              <label>Enter Your Email Voucher Here</label>
              <div class="wrapper">
                <form>
                  <input placeholder="Enter your email here" type="email"/>
                  <button type="submit">Apply</button>
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
                  <div>$450</div>
                </div>
                <div class="coupon wrapper">
                  <div>Coupon</div>
                  <div>- $50</div>
                </div>
                <div class="shipping wrapper">
                  <div>Shipping</div>
                  <div>Free Shipping</div>
                </div>
              </div>
              <div class="info-total wrapper">
                <div>Total</div>
                <div>$400</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="info-footer wrapper">
        <button class="upd">UPDATE TOTALS</button>
        <button class="proceed">PROCEED TO CHECKOUT</button>
      </div>
    </section>
  </div>
</template>
