import React, { useEffect, useState } from "react";
import { useFilter } from "@/Context/FilterContext";
import { Tally3 } from "lucide-react";
import { Link } from "react-router-dom";

const AllProducts = ({ className }) => {
  const { searchQuery, selectedCategory, minPrice, maxPrice, keyword } =
    useFilter();
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const query = searchQuery || keyword;
        const url = query
          ? `https://dummyjson.com/products/search?q=${query}&limit=${itemsPerPage}&skip=${
              (currentPage - 1) * itemsPerPage
            }`
          : `https://dummyjson.com/products?limit=${itemsPerPage}&skip=${
              (currentPage - 1) * itemsPerPage
            }`;

        const response = await fetch(url);
        const data = await response.json();

        setProducts(data.products || []);

        // Dynamically set totalPages
        if (data.total) {
          setTotalPages(Math.ceil(data.total / itemsPerPage));
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, [itemsPerPage, searchQuery, keyword, currentPage]);

  const getFilteredProducts = () => {
    let filtered = [...products];
    if (selectedCategory)
      filtered = filtered.filter((p) => p.category === selectedCategory);
    if (minPrice !== undefined)
      filtered = filtered.filter((p) => p.price >= minPrice);
    if (maxPrice !== undefined)
      filtered = filtered.filter((p) => p.price <= maxPrice);
    if (searchQuery)
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return filter === "cheap"
      ? filtered.sort((a, b) => a.price - b.price)
      : filter === "expensive"
      ? filtered.sort((a, b) => b.price - a.price)
      : filter === "popular"
      ? filtered.sort((a, b) => b.rating - a.rating)
      : filtered;
  };

  // Pagination handler
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className={`max-w-6xl mx-auto p-5 ${className}`}>
      {/* Featured Tag */}
      <div className="flex items-center gap-2 mb-4 ">
        <span className="w-2 h-6 bg-red-500 rounded"></span>
        <p className="text-red-500 font-semibold">Our Products</p>
      </div>

      {/* Section Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">
        Explore Our Products
      </h2>
      {/* Filter Button */}
      <div className="flex justify-end">
        <div className="mb-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative inline-block">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg flex items-center gap-2 shadow-md hover:bg-blue-600 transition">
              <Tally3 />
              {filter === "all"
                ? "Filter"
                : filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
            <ul className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg hidden group-hover:block">
              {["cheap", "expensive", "popular"].map((f) => (
                <li key={f}>
                  <button
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                    onClick={() => setFilter(f)}
                  >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {getFilteredProducts().map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200"
          >
            <figure className="p-4">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-contain rounded-lg"
              />
            </figure>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.title}
              </h3>
              <p className="text-sm text-gray-600 truncate">
                {product.description}
              </p>
              <p className="text-xl font-bold text-blue-600 mt-2">
                ${product.price}
              </p>
              <div className="flex justify-end mt-4">
                <Link to={`/product/${product.id}`}>
                  {" "}
                  <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-8 space-x-2">
        {/* Prev Button */}
        <button
          className={`px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 transition ${
            currentPage === 1 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {/* First Page (Always Shown) */}
        <button
          onClick={() => handlePageChange(1)}
          className={`px-4 py-2 border border-gray-300 rounded-lg transition ${
            currentPage === 1 ? "bg-blue-500 text-white" : "hover:bg-gray-200"
          }`}
        >
          1
        </button>

        {/* Left Ellipsis */}
        {currentPage > 4 && <span className="px-2">...</span>}

        {/* Middle Pages */}
        {Array.from({ length: totalPages }, (_, index) => index + 1)
          .filter(
            (page) =>
              page !== 1 && // ✅ Exclude first page (already displayed)
              page !== totalPages && // ✅ Exclude last page (will be displayed separately)
              page >= currentPage - 2 &&
              page <= currentPage + 2 // Show pages around current
          )
          .map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 border border-gray-300 rounded-lg transition ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "hover:bg-gray-200"
              }`}
            >
              {page}
            </button>
          ))}

        {/* Right Ellipsis */}
        {currentPage < totalPages - 3 && <span className="px-2">...</span>}

        {/* Last Page (Always Shown) */}
        {totalPages > 1 && (
          <button
            onClick={() => handlePageChange(totalPages)}
            className={`px-4 py-2 border border-gray-300 rounded-lg transition ${
              currentPage === totalPages
                ? "bg-blue-500 text-white"
                : "hover:bg-gray-200"
            }`}
          >
            {totalPages}
          </button>
        )}

        {/* Next Button */}
        <button
          className={`px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 transition ${
            currentPage === totalPages && "opacity-50 cursor-not-allowed"
          }`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default AllProducts;
