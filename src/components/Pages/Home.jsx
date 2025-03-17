import MultiBanner from "@/components/Home/Multibanner";
import Hero from "../Home/Hero";
import NewCollection from "@/components/Home/NewCollection";
import Topbrand from "@/components/Home/Topbrand";
import Benefits from "@/components/Home/Benefits";
import AllProducts from "@/components/Home/AllProducts";
import SlidingProduct from "@/components/Home/SlidingProduct";
import Sidebar from "../Navbar/Sidebar";
import FeedbackCorner from "@/components/Home/FeedbackCorner";
import NewArrival from "@/components//Home/NewArrival";

export const Home = () => {
  return (
    <div className="flex flex-col gap-4 ">
      <Hero />
      <Topbrand />
      <NewCollection />
      <SlidingProduct />
      <AllProducts />
      <MultiBanner />
      <NewArrival />
      <FeedbackCorner />
      <Benefits />
    </div>
  );
};
