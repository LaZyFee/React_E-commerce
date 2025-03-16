import React from "react";
import img1 from "@/assets/hero/sunset-desert-mosque.jpg";
import img3 from "@/assets/hero/perfume.jpg";
import img2 from "@/assets/hero/Shawl.webp";
import img4 from "@/assets/hero/keffiyah.jpg";
import iphone from "@/assets/hero/iphone.webp";
import shawl from "@/assets/hero/shawl.jfif";
import jacket from "@/assets/hero/jacket.webp";
import sunglass from "@/assets/hero/sunglass.jpg";
import perfume from "@/assets/hero/perfume.webp";
import keffiyeh from "@/assets/hero/keffiyah.jfif";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const products = [
    {
      id: 1,
      name: "Online Store",
      description:
        "Discover timeless fragrances, cultural heritage, and premium essentials—all in one place. We offer a curated shopping experience that blends heritage with modern elegance. ",
      image: img1,
    },
    {
      id: 2,
      name: "Luxury Perfume",
      description:
        "A premium long-lasting fragrance with floral and woody notes. Drawing inspiration from Middle Eastern and European perfume-making, it combines luxurious florals and woods for an elegant scent. A fragrance that evolves throughout the day.",
      image: img3,
    },
    {
      id: 3,
      name: "Cashmere Shawl",
      description:
        "Soft and warm cashmere shawl, perfect for winter and elegant styling. Cashmere has been a symbol of luxury for over a thousand years, originating from the Himalayas. This shawl is woven with the finest cashmere, offering warmth, comfort, and timeless beauty, blending traditional craftsmanship with modern elegance.",
      image: img2,
    },
    {
      id: 4,
      name: "Keffiyeh",
      description:
        "Traditional Palestinian keffiyeh made from 100% cotton. Worn as a symbol of resilience and cultural pride, it has deep roots in Middle Eastern heritage. This iconic garment is not only a functional accessory but also a powerful representation of Palestinian identity and unity..",
      image: img4,
    },
  ];

  return (
    <div className="mt-16 lg:mt-18 ">
      {/*  Hero Banner */}
      <div className="flex mb-2">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, Pagination]}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className=" bg-white rounded-xl shadow-cyan-900 transform transition duration-300 ease-in-out">
                <figure className=" ">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="relative w-full h-[350px] lg:h-[550px] bg-cover bg-center flex items-center justify-center "
                  />
                  <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
                    <p className="text-lg md:text-xl font-bold">The Best</p>
                    <h1 className="text-3xl md:text-5xl font-bold">
                      {product.name}
                    </h1>
                    <p className="text-lg md:text-xl mt-2">
                      {product.description}
                    </p>
                    <button className="btn btn-success mt-4 transform transition duration-300 hover:scale-105">
                      Shop Now
                    </button>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/*  Banners */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto">
        {[
          {
            img: iphone,
            title: "Latest iPhones",
            text: "Get Yours Now",
            description:
              "Upgrade to the latest iPhone with cutting-edge technology and stunning design.",
            offer: "Innovation Awaits – Save Up to 15%",
          },
          {
            img: jacket,
            title: "Winter Jackets",
            text: "Stay Warm",
            description:
              "Stay warm and stylish with our premium collection of winter jackets.",
            offer: "Cozy Up in Style – 20% Off This Season",
          },
          {
            img: sunglass,
            title: "Trendy Sunglasses",
            text: "Shop the Look",
            description:
              "Protect your eyes in style with our latest collection of sunglasses.",
            offer: "Shine Bright – Buy 1, Get 1 Free",
          },
          {
            img: shawl,
            title: "Elegant Shawls",
            text: "Wrap Yourself",
            description:
              "Soft, luxurious shawls perfect for every season and occasion.",
            offer: "Timeless Elegance – Flat 25% Off",
          },
          {
            img: perfume,
            title: "Luxury Perfumes",
            text: "Smell Amazing",
            description:
              "Indulge in exquisite fragrances with our collection of premium perfumes.",
            offer: "A Scent of Luxury – Up to 30% Off",
          },
          {
            img: keffiyeh,
            title: "Authentic Keffiyehs",
            text: "Embrace Tradition",
            description:
              "Symbol of heritage and identity, our Keffiyehs are crafted with premium fabric.",
            offer: "Heritage Woven in Threads – 20% Off",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`relative w-full h-60 rounded-lg overflow-hidden shadow-lg group ${
              index <= 3 ? "" : " lg:col-span-2"
            }`}
          >
            <img
              src={item.img}
              alt="Sale"
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0 bg-gray-900/60 flex flex-col items-center justify-center text-white text-center p-4">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="">{item.offer} </p>
              <button className="btn mt-4 transform transition duration-300 hover:scale-105 hover:btn-success hover:text-white hover:shadow-lg">
                {item.text}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
