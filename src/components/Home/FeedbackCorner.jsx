import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Emily Wilson",
    feedback:
      "The customer experience was exceptional from start to finish. The website is user-friendly, the checkout process was smooth, and the clothes I ordered fit perfectly. I’m beyond satisfied!",
  },
  {
    name: "Sarah Thompson",
    feedback:
      "I absolutely love the quality and style of the clothing I purchased from this website. Customer service was outstanding, and I received my order quickly. Highly recommended!",
  },
  {
    name: "Olivia Martinez",
    feedback:
      "I had a great experience shopping on this website. The clothes I bought are fashionable and comfortable. Highly satisfied!",
  },
  {
    name: "Michael Brown",
    feedback:
      "Fast delivery and amazing quality! I will definitely order again.",
  },
  {
    name: "Sophia Williams",
    feedback:
      "Very professional service and excellent product quality. Highly recommend!",
  },
];

const FeedbackCorner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else {
        setVisibleCards(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - visibleCards : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev >= testimonials.length - visibleCards ? 0 : prev + 1
    );
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 md:px-10 w-full">
      <h2 className="text-3xl font-bold text-green-900 mb-8 text-center">
        Feedback Corner
      </h2>

      {/* Testimonial Cards Container */}
      <div className="overflow-hidden w-full flex justify-center">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="px-2 sm:px-4 flex-shrink-0 w-full sm:w-3/4 lg:w-1/3"
              style={{ flex: `0 0 ${100 / visibleCards}%` }}
            >
              <div className="p-6 bg-white rounded-xl shadow-lg h-full flex flex-col justify-between">
                <p className="text-4xl text-green-800 font-bold mb-2">“</p>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={handlePrev}
          className="p-3 bg-white shadow-md rounded-full hover:bg-gray-100 transition"
        >
          <FaChevronLeft className="text-green-700 text-lg" />
        </button>
        <button
          onClick={handleNext}
          className="p-3 bg-green-200 shadow-md rounded-full hover:bg-green-300 transition"
        >
          <FaChevronRight className="text-green-700 text-lg" />
        </button>
      </div>
    </div>
  );
};

export default FeedbackCorner;
