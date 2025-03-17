import React from "react";

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
  return (
    <div className="mx-auto max-w-2xl px-4 sm:pt-24 lg:max-w-6xl lg:px-10">
      {/* Featured Tag */}
      <div className="flex items-center gap-2 mb-4">
        <span className="w-2 h-6 bg-red-500 rounded"></span>
        <p className="text-red-500 font-semibold">Feedback Corner</p>
      </div>
      {/* Testimonial Cards Container */}
      <div className="overflow-hidden w-full flex justify-center">
        <div className="flex transition-transform duration-500 ease-in-out">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="px-2 sm:px-4 flex-shrink-0 w-full sm:w-3/4 lg:w-1/3"
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
    </div>
  );
};

export default FeedbackCorner;
