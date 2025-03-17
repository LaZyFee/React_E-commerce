import axios from "axios";
import { useEffect, useState } from "react";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { LuRefreshCw } from "react-icons/lu";
import { FaRegHeart, FaEye } from "react-icons/fa";
export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://dummyjson.com/products/${id}`)
        .then((response) => {
          setProduct(response.data);
          fetchRelatedProducts(response.data.category); // Fetch related products
        })
        .catch((error) =>
          console.error("Error fetching product details:", error)
        );
    }
  }, [id]);

  // Fetch related products based on the same category
  const fetchRelatedProducts = (category) => {
    axios
      .get(`https://dummyjson.com/products/category/${category}?limit=4`)
      .then((res) => {
        setRelatedProducts(
          res.data.products.filter((item) => item.id !== Number(id))
        ); // Exclude current product
      })
      .catch((error) =>
        console.error("Error fetching related products:", error)
      );
  };

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 pt-24 mb-20">
      {/* Breadcrumbs */}
      <div className="text-sm breadcrumbs mb-4">
        <ul className="flex space-x-2 text-gray-600">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {product.category}
            {/* <Link to={`/products?category=${product.category}`}>
            </Link> */}
          </li>
          <li className="font-semibold text-gray-900">{product.title}</li>
        </ul>
      </div>

      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image & Gallery */}
        <div className="flex flex-col">
          <div className="w-full h-80 md:h-full bg-gray-100 flex justify-center items-center rounded-lg">
            <img
              src={product.images[0]}
              alt={product.title}
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          {/* Thumbnail Images */}
          <div className="flex mt-4 gap-4">
            {product.images.slice(1, 4).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border border-gray-300 hover:border-gray-500"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-yellow-500">⭐ {product.rating}</span>
            <span className="text-gray-600 text-sm">(150 Reviews)</span>
            <span className="text-green-600 font-medium">| In Stock</span>
          </div>
          {/* Price */}
          <p className="text-2xl font-semibold text-gray-900 mt-4">
            ${product.price}
          </p>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <div className="divider"></div>
          {/* Color Options */}
          <div className="mt-4 flex gap-4 items-center">
            <h3 className="font-semibold text-gray-800">Colours:</h3>
            <div className="flex space-x-2 mt-2">
              <span className="w-8 h-8 bg-gray-200 rounded-full cursor-pointer"></span>
              <span className="w-8 h-8 bg-black rounded-full cursor-pointer"></span>
              <span className="w-8 h-8 bg-blue-500 rounded-full cursor-pointer"></span>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mt-4  flex gap-4 items-center">
            <h3 className="font-semibold text-gray-800">Size:</h3>
            <div className="flex space-x-2 mt-2">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-200"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="flex gap-3 items-center mt-3">
            {/* Quantity & Buy */}
            <div className="flex items-center space-x-4 mt-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button className="px-3 py-2 text-lg">-</button>
                <span className="px-4">2</span>
                <button className="px-3 py-2 text-lg">+</button>
              </div>
              <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition">
                Buy Now
              </button>
            </div>

            {/* Add to wishlist */}
            <div className="border place-content-center border-gray-400 rounded-md p-2 mt-4">
              <FaRegHeart className="text-4xl" />
            </div>
          </div>
          {/* Delivery Info */}
          <div className="mt-6">
            <div className="flex items-center gap-4 border-gray-300 border-2 p-5 rounded-t-box">
              <MdOutlineLocalShipping className="text-5xl" />
              <div className="flex flex-col">
                <p className="text-gray-700 font-semibold">Free Delivery</p>
                <p className="text-sm">
                  Enter your postal code for availability
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 border-gray-300 border-2 p-5 rounded-b-box">
              <LuRefreshCw className="text-5xl" />
              <div className="flex flex-col">
                <p className="text-gray-700 font-semibold">Return Delivery</p>
                <p className="text-sm">Free 30 Days Return Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Related Products Section */}
      <div className="mt-16">
        <div className="flex items-center gap-2 mb-4 ">
          <span className="w-2 h-6 bg-red-500 rounded"></span>
          <p className="text-red-500 font-semibold">Related Products</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((item) => (
            <div key={item.id} className="block p-4 rounded-lg group">
              <div className="w-full h-40 flex justify-center items-center rounded-md relative overflow-hidden">
                {/* Product Image */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-full h-full object-contain rounded-md"
                />

                {/* Wishlist and View Icons */}
                <div className="absolute top-2 right-2 flex flex-col space-y-2">
                  <button className="p-2 bg-white shadow-md rounded-full hover:bg-gray-200">
                    <FaRegHeart className="text-gray-600 text-lg hover:text-red-500" />
                  </button>
                  <Link
                    to={`/product/${item.id}`}
                    className="p-2 bg-white shadow-md rounded-full hover:bg-gray-200"
                  >
                    <FaEye className="text-gray-600 text-lg hover:text-red-500" />
                  </Link>
                </div>

                {/* Buy Now Button (Shown on Hover) */}
                <button className="absolute bottom-0 left-0 w-full bg-red-600 text-white font-semibold py-2 rounded-b-md transform translate-y-full group-hover:translate-y-0 transition duration-300 ease-in-out">
                  Buy Now
                </button>
              </div>

              {/* Product Details */}
              <h3 className="mt-4 font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-700">${item.price}</p>
              <span className="text-yellow-500">⭐ {item.rating}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
