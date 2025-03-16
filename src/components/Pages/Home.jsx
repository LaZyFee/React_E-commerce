import MultiBanner from "@/components/Home/Multibanner";
import Hero from "../Home/Hero";
import NewCollection from "@/components/Home/NewCollection";
import Topbrand from "@/components/Home/Topbrand";
import Benefits from "@/components/Home/Benefits";
import ProductNav from "@/components/Home/ProductNav";
import SlidingProduct from "@/components/Home/SlidingProduct";
import Sidebar from "../Navbar/Sidebar";
import FeedbackCorner from "@/components/Home/FeedbackCorner";

export const Home = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <Hero />
      <Topbrand />
      <div className="flex flex-col md:flex-row">
        <Sidebar className="md:w-1/4" />
        <ProductNav className="md:w-3/4" />
      </div>
      <SlidingProduct />
      <MultiBanner />
      <NewCollection />
      <Benefits />
      <FeedbackCorner />
    </div>
  );
};
