import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./ContentSwiper.css";

import { Pagination } from "swiper";

const ContentSwiper = () => {
  const [indexShow, setIndexShow] = useState();

  const Data = [
    {
      img_url: require("../img/product/products_1.png"),
      price: 3000,
    },
    {
      img_url: require("../img/product/products_2.png"),
      price: 5000,
    },
    {
      img_url: require("../img/product/products_3.png"),
      price: 8000,
    },
    {
      img_url: require("../img/product/products_4.png"),
      price: 3500,
    },
  ];

  const ShowBuyEL = (index) => {
    console.log(index);
    setIndexShow(index);
  };

  const [productsList, setProductsList] = useState([]);

  const getProducts = () => {
    axios
      .get("http://localhost:5500/api/products")
      .then((response) => {
        const List = response.data.filter((item) => {
          return item.products_type === "ปลายท่อ";
        });
        setProductsList(List);
        console.log(List);
      })
      .catch(console.log("error"));
  };

  const FilterProducts = (filter) => {
    axios.get("http://localhost:5500/api/products").then((respones) => {
      const newList = respones.data.filter((item) => {
        return item.products_type === filter;
      });
      setProductsList(newList);
    });
  };
  //--- ทดสอบ --- git จาก notebook
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container content-main">
      <div className="content-sec-1">
        <h3>ร้านเชียงใหม่ ท่อพัก</h3>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a
        </p>
      </div>
      <div className="content-sec-2">
        <button type="" onClick={() => FilterProducts("ปลายท่อ")}>
          ปลายท่อ
        </button>
        <button type="" onClick={() => FilterProducts("หม้อพัก")}>
          หม้อพัก
        </button>
        <button type="" onClick={() => FilterProducts("ชุดท่อคู่")}>
          ชุดท่อคู่
        </button>
      </div>
      <div className="content-sec-3">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            280: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            360: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            540: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
            1400: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {productsList.map((data, index) => {
            return (
              <SwiperSlide key={index} className="Swiper-slide">
                <div
                  className="swiper-card"
                  onMouseEnter={() => ShowBuyEL(index)}
                  onMouseLeave={() => ShowBuyEL(10)}
                >
                  <div
                    className={
                      index === indexShow
                        ? "slide-buy slide-buy-show"
                        : "slide-buy"
                    }
                  >
                    <Link to="/">BUY</Link>
                  </div>
                  <div className="swip-img-products">
                    <img
                      src={require(`../img/product/${data.products_img}`)}
                      alt=""
                    />
                  </div>

                  <div className="swiper-detail">
                    <p>{data.products_name}</p>
                    <p>Lorem Ipsum has been the industry's standard</p>
                    <p>ราคา {data.products_price} บาท</p>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="content-sec-4">
        <Link to="/">ดูสินค้าทั้งหมด</Link>
      </div>
    </div>
  );
};

export default ContentSwiper;
