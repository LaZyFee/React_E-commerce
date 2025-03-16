import React from "react";
import img1 from "@/assets/Products/jacket.jpg";
import img2 from "@/assets/hero/sunglass.webp";
import img3 from "@/assets/hero/bag.jpg";
import img4 from "@/assets/hero/iphone15.jpg";
import img5 from "@/assets/hero/laptop.jpg";
import img6 from "@/assets/hero/smartwatch.webp";
import img7 from "@/assets/hero/headphones.jpg";
import img8 from "@/assets/hero/sneakers.webp";
import img9 from "@/assets/hero/backpack.jpg";
import img10 from "@/assets/hero/bluetoothspeaker.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SlidingProduct = () => {
  const products = [
    {
      id: 1,
      name: "Jacket",
      image: img1,
      price: 129.99,
      description:
        "A high-quality jacket made with premium materials for warmth and durability. Perfect for the cold seasons, offering both comfort and style.",
    },
    {
      id: 2,
      name: "Sunglass",
      image: img2,
      price: 199.99,
      description:
        "Stylish sunglasses designed to offer 100% UV protection while adding a sleek look to your outfits. Perfect for sunny days or a bold fashion statement.",
    },
    {
      id: 3,
      name: "Bag",
      image: img3,
      price: 89.99,
      description:
        "A spacious and durable bag made for daily use. With multiple compartments and a sleek design, it keeps your belongings organized and easy to access.",
    },
    {
      id: 4,
      name: "Phone",
      image: img4,
      price: 29.99,
      description:
        "A compact and affordable phone designed for essential use. It offers basic functions like calling, texting, and browsing, perfect for anyone on a budget.",
    },
    {
      id: 5,
      name: "Laptop",
      image: img5,
      price: 799.99,
      description:
        "A high-performance laptop with a fast processor, large storage, and long battery life. Ideal for both work and play, perfect for professionals and students.",
    },
    {
      id: 6,
      name: "Smartwatch",
      image: img6,
      price: 249.99,
      description:
        "A stylish smartwatch with fitness tracking, heart rate monitoring, and customizable watch faces. Keep track of your health and notifications with ease.",
    },
    {
      id: 7,
      name: "Headphones",
      image: img7,
      price: 149.99,
      description:
        "High-quality wireless headphones with noise-canceling features. Enjoy clear, immersive sound with a comfortable fit, perfect for listening to music or taking calls.",
    },
    {
      id: 8,
      name: "Sneakers",
      image: img8,
      price: 89.99,
      description:
        "Comfortable and stylish sneakers designed for both fashion and function. Made with breathable materials for all-day comfort and support during active moments.",
    },
    {
      id: 9,
      name: "Backpack",
      image: img9,
      price: 49.99,
      description:
        "Durable and spacious backpack with multiple compartments. Perfect for carrying your daily essentials to school, work, or travel, with a modern, sleek design.",
    },
    {
      id: 10,
      name: "Bluetooth Speaker",
      image: img10,
      price: 69.99,
      description:
        "Portable Bluetooth speaker with excellent sound quality and long battery life. Ideal for outdoor adventures, parties, or simply enjoying music on the go.",
    },
  ];

  return (
    <div className="m-4">
      <h2 className="text-primary text-center font-bold text-3xl md:text-4xl my-8">
        Trending Products
      </h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          480: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className="w-full"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="transition duration-300 hover:shadow-lg hover:scale-105 p-4">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-fit rounded-md mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900 text-center">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 text-center my-2">
                {product.description}
              </p>
              <p className="text-xl font-bold text-blue-600 text-center">
                ${product.price}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default SlidingProduct;
