import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// import required modules
import { Autoplay } from "swiper";
import { IoSearchSharp } from "react-icons/io5";
import product_1 from "../../img/product/products_1.png";
import "./ShowProducts.css";

const dataPromotion = [
  {
    Title: "ร้านเชียงใหม่ท่อพัก ลดราคาลง 10% ฉลองปี 2022",
  },
  {
    Title: "โปรโมชั่นหม้อเลสสายซิ่งเริ่มที่ 2,500-3,200",
  },
  {
    Title: "เอาใจสายไทเทเนียมเริ่มต้นที่ 3,300-3,800",
  },
  {
    Title: "พักกลางเลสเน้นเก็บเสียงราคาอยู่ที่ 2,500",
  },
];

const ShowProduct = () => {
  return (
    <div className="page__products">
      <div className="container-fluid page__products_promotion">
        <h5>โปรโมชั่น</h5>
        <div className="container">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {dataPromotion.map((data) => {
              return (
                <SwiperSlide className="products_promotion ">
                  <span>{data.Title}</span>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
      <div className="container main__search">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="products__search">
              <input type="text" placeholder="ค้นหาสินค้า . . . " />
              <button>
                <IoSearchSharp />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container main__show__product">
        <div className="row ">
          <div className="col-md-4 select__btn__products">
            <button type="" className="focus">
              สินค้าทั้งหมด
            </button>
            <button type="">ปลายท่อ</button>
            <button type="">หม้อพัก</button>
            <button type="">ชุดท่อคู่</button>
          </div>
          <div className="col-md-8 display__grid">
            <div className="product__card">
              <img src={product_1} alt="" />
              <div className="product__detail">
                <p>ชื่อสินค้า</p>
                <p>Lorem Ipsum has been the industry's standard</p>
                <p>ราคาค 3,000 บาท</p>
              </div>
            </div>

            <div className="product__card">
              <img src={product_1} alt="" />
              <div className="product__detail">
                <p>ชื่อสินค้า</p>
                <p>Lorem Ipsum has been the industry's standard</p>
                <p>ราคาค 3,000 บาท</p>
              </div>
            </div>

            <div className="product__card">
              <img src={product_1} alt="" />
              <div className="product__detail">
                <p>ชื่อสินค้า</p>
                <p>Lorem Ipsum has been the industry's standard</p>
                <p>ราคาค 3,000 บาท</p>
              </div>
            </div>

            <div className="product__card">
              <img src={product_1} alt="" />
              <div className="product__detail">
                <p>ชื่อสินค้า</p>
                <p>Lorem Ipsum has been the industry's standard</p>
                <p>ราคาค 3,000 บาท</p>
              </div>
            </div>

            <div className="product__card">
              <img src={product_1} alt="" />
              <div className="product__detail">
                <p>ชื่อสินค้า</p>
                <p>Lorem Ipsum has been the industry's standard</p>
                <p>ราคาค 3,000 บาท</p>
              </div>
            </div>

            <div className="product__card">
              <img src={product_1} alt="" />
              <div className="product__detail">
                <p>ชื่อสินค้า</p>
                <p>Lorem Ipsum has been the industry's standard</p>
                <p>ราคาค 3,000 บาท</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
