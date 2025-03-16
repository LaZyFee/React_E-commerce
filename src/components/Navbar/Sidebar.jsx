import { useEffect, useState } from "react";
import { useFilter } from "@/Context/FilterContext";

const Sidebar = ({ className }) => {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    minPrice,
    setMinPrice,
    maxPrice,
    setMaxPrice,
    setKeyword,
  } = useFilter();

  const [categories, setCategories] = useState([]);
  const [keywords] = useState([
    "apple",
    "watch",
    "fashion",
    "trend",
    "shoes",
    "shirts",
  ]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        const uniqueCategories = Array.from(
          new Set(data.products.map((product) => product.category))
        );
        setCategories(uniqueCategories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value ? parseFloat(value) : undefined);
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value ? parseFloat(value) : undefined);
  };

  const handleRadioChangeCategory = (category) => {
    setSelectedCategory(category);
  };

  const handleKeywordClick = (keyword) => {
    setKeyword(keyword);
  };

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setMinPrice(undefined);
    setMaxPrice(undefined);
    setKeyword("");
  };

  return (
    <div className={`w-72 bg-white p-6 rounded-lg  ${className}`}>
      {/* Search Input */}
      <div className="mb-5">
        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          placeholder="🔍 Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Price Range Inputs */}
      <div className="flex gap-3 mb-5">
        <input
          type="number"
          className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          placeholder="Min"
          value={minPrice ?? ""}
          onChange={handleMinPriceChange}
        />
        <input
          type="number"
          className="w-1/2 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          placeholder="Max"
          value={maxPrice ?? ""}
          onChange={handleMaxPriceChange}
        />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Categories</h2>
        {categories.map((category, index) => (
          <label key={index} className="flex items-center mb-2 cursor-pointer">
            <input
              type="radio"
              name="category"
              value={category}
              onChange={() => handleRadioChangeCategory(category)}
              checked={selectedCategory === category}
              className="w-4 h-4 text-blue-500 border-gray-300 focus:ring-blue-400"
            />
            <span className="ml-2 text-gray-700">{category.toUpperCase()}</span>
          </label>
        ))}
      </div>

      {/* Keywords */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Keywords</h2>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword, index) => (
            <button
              key={index}
              className="px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-black hover:text-white transition-all"
              onClick={() => handleKeywordClick(keyword)}
            >
              {keyword.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Reset Filters Button */}
      <button
        className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-black transition-all"
        onClick={handleResetFilters}
      >
        Reset Filters
      </button>
    </div>
  );
};

export default Sidebar;
