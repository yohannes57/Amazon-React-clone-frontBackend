import React from "react";
import "./Home.css";
import homeimage from "../../Assets/img/home-page.jpg";
import product5 from "../../Assets/img/products/speaker.jpg";
import Product from "../Product/Product";
function Home() {
  return (
    <div className="home">
      <div className="home_image">
        <img className="home_img_img" src={homeimage} alt="amazon" />
        <div className="home_row">
          <Product
            id="123321"
            title="this is the title i a have right now but
            i will change it laterthis is the title i a have right now but
"
            price={70.86}
            rating={5}
            images={
              "https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/DiscoTec/2022/HOL22/GW/QuadCards/DT/HOL22_GW_DT_QuadCard_1_EverydayEssentials_1x._SY116_CB608882941_.jpg"
            }
            addtobasket="add to cart"
          />
          <Product
            id="12"
            title="this is the title i a have right now but
            i will change it later this is the title i a have right now but
           "
            price={5.86}
            rating={4}
            images="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AMAZON_FASHION/2022/PTBYB/NOV_22/GW/EDITORIAL_QUAD_CARD/DT/W/PTBYB_QC_1x_NW._SY116_CB605609812_.jpg"
            addtobasket="shop now"
          />
          <Product
            id="5"
            title="this is the title i a have right now but
            i will change it later this is the title i a have right now but
           "
            price={55.86}
            rating={3}
            images="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AMAZON_FASHION/2022/PTBYB/OCT_22/QUAD_EDITORIAL_CARDS/DESKTOP/PTBYB_W_QC_1x_NE._SY116_CB609197337_.jpg"
            addtobasket="add to cart"
          />
          <Product
            id="6"
            title="for all age with differen size and price ,enjoy the price and be fassioned
           "
            price={189.86}
            rating={5}
            images="https://images-na.ssl-images-amazon.com/images/W/WEBP_402378-T1/images/G/01/AMAZON_FASHION/2022/PTBYB/NOV_22/GW/EDITORIAL_QUAD_CARD/DT/W/PTBYB_QC_1x_NE._SY116_CB605609812_.jpg"
            addtobasket="add to cart"
          />
        </div>
        <div className="home_row">
          <Product
            id="7"
            title="Improved speaker quality - Better speaker quality than Echo Dot Gen 2 for richer and louder sound. Pair with a second Echo Dot for stereo sound.
           "
            price={105.86}
            rating={5}
            images={product5}
            addtobasket="add to cart"
          />
          <Product
            id="8"
            title="All-New Echo Dot (5th Gen, 2022 release) with clock | Smart speaker with clock and Alexa | Glacier White
           "
            price={58.86}
            rating={4}
            images="https://images-na.ssl-images-amazon.com/images/I/51bOhkEmteL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
            addtobasket="add to cart"
          />
        </div>
        <div className="home_row">
          <Product
            id="9"
            title="Portable Wireless Charger for Apple Watch,HUOTO【Upgraded Version】 iWatch Charger 1400mAh Smart Keychain Power Bank,Portable Magnetic iWatch Charger for Apple Watch Series 8/UItra/7/6/SE/5/4/3/2/1
           "
            price={169.86}
            rating={5}
            images="https://images-na.ssl-images-amazon.com/images/I/41cppSnEt9L._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
            addtobasket="add to cart"
          />

          <Product
            id="10"
            title="The Light We Carry ,ONE OF TIME’S 100 MUST-READ BOOKS OF 2022 • In an inspiring follow-up to her critically acclaimed, former First Lady Michelle Obama shares practical wisdom and powerful strategies for staying hopeful and balanced in today’s highly uncertain world.ut
           "
            price={16.86}
            rating={3}
            images="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/91MowzF+WZL._AC_SY200_.jpg"
            addtobasket="add to cart"
          />
          <Product
            id="11"
            title="Belkin MagSafe 3-in-1 Wireless Charging Stand - 2ND GEN w/ 33% Faster Wireless Charging for Apple Watch - iPhone 14, 13 & 12 series & AirPods - MagSafe Charging Station For Multiple Devices - White
           "
            price={5.86}
            rating={4}
            images="https://images-na.ssl-images-amazon.com/images/I/41-obwDRKhL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
            addtobasket="add to cart"
          />
        </div>
        <div className="home_row">
          <Product
            id="12"
            title="Kindle Paperwhite – Now with a 6.8” display and thinner borders, adjustable warm light, up to 10 weeks of battery life, and 20% faster page turns.
           "
            price={109.86}
            rating={3}
            images="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41P5MVcp1GL._AC_SY200_.jpg"
            addtobasket="add to cart"
          />
          <Product
            id="13"
            title="A Certified Refurbished Fire HD 10 <tablet> is refurbished, tested, and certified to look and work like new and comes with the same limited warranty as a new device. Certified Refurbished Amazon devices may be packaged in generic Amazon-branded boxes"
            price={155.86}
            rating={2}
            images="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41dw1g4jtnS._AC_SY200_.jpg"
            addtobasket="add to cart"
          />
          <Product
            id="13"
            title="Zulay Milk Frother for Coffee with Upgraded Titanium Motor - Handheld Frother Electric Whisk, Milk Foamer, Mini Mixer and Coffee Blender Frother for Frappe, Latte, Matcha, No Stand - Silver
           "
            price={8.86}
            rating={4}
            images="https://images-na.ssl-images-amazon.com/images/I/511Kvl63JxL._SX240_QL100_AC_SCLZZZZZZZ_.jpg"
            addtobasket="add to cart"
          />
        </div>
        <div className="home_row">
          <Product
            id={77}
            title="GameSir G4 Pro Wireless Switch Game Controller for PC/iPhone/Android Phone, Dual Vibrators USB Mobile Gamepad for Arcade MFi Games, Cloud Gaming Controller (Removable ABXY and Screenshot)"
            price={39}
            rating={5}
            images="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61T2RHj+OHL._AC_SL1000_.jpg"
            addtobasket="add to cart"
          />
          <Product
            id={77}
            title="Wireless Keyboard and Mouse Ultra Slim Combo, TopMate 2.4G Silent Compact USB Mouse and Scissor Switch Keyboard Set with Cover, 2 AA and 2 AAA Batteries, for PC/Laptop/Windows/Mac - White"
            price={29}
            rating={4}
            images="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71wyySRjQyL._AC_SL1500_.jpg"
            addtobasket="add to cart"
          />
          {/* https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/71wyySRjQyL._AC_SL1500_.jpg */}
        </div>
      </div>
    </div>
  );
}
export default Home;
//locally imported images
// import product1 from "../../Assets/img/products/product-1.jpg";
// import product2 from "../../Assets/img/products/hat.jpg";
// import product3 from "../../Assets/img/products/kmix.jpg";
// import product4 from "../../Assets/img/products/lean.jpg";
// import product6 from "../../Assets/img/products/sweater.jpg";
// import product7 from "../../Assets/img/products/tablet.jpg";
// import product8 from "../../Assets/img/products/toys.jpg";
// import product9 from "../../Assets/img/products/watch.jpg";
// import product10 from "../../Assets/img/products/computer.jpg";
