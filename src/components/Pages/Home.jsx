import MultiBanner from "@/components/Home/Multibanner";
import Hero from "../Home/Hero";
import NewCollection from "@/components/Home/NewCollection";
import Topbrand from "@/components/Home/Topbrand";
import Benefits from "@/components/Home/Benefits";
import AllProducts from "@/components/Home/AllProducts";
import SlidingProduct from "@/components/Home/SlidingProduct";
import Sidebar from "../Navbar/Sidebar";
import FeedbackCorner from "@/components/Home/FeedbackCorner";

export const Home = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <Hero />
      <Topbrand />
      <NewCollection />
      <SlidingProduct />
      <div className="mt-5 py-5">
        <h2 className="text-4xl font-bold tracking-tighter text-gray-900 text-center font-serif">
          Our Products
        </h2>
        <p className="text-center mt-3 md:px-36 font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          optio impedit eligendi voluptas dolorem esse quasi repudianda Lorem
        </p>
        <div className="flex flex-col md:flex-row">
          <Sidebar className="md:w-1/4" />
          <AllProducts className="md:w-3/4" />
        </div>
      </div>
      <MultiBanner />
      <Benefits />
      <FeedbackCorner />
    </div>
  );
};
