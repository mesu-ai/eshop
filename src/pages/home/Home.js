import React, { Suspense } from "react";
import HotDeals from "./hotDeals/HotDeals";
import HomeViewPort from "./homeViewPort/HomeViewPort";
import Footer from "../../components/shared/footer/Footer";

const FlashSales = React.lazy(()=> import("./flashSales/FlashSales"));
const Categories = React.lazy(() => import("./categories/Categories"));
const CameraZone = React.lazy(() => import("./cameraZone/CameraZone"));
const AllProducts = React.lazy(() => import("./allproducts/AllProducts"));

const Home = () => {
  return (
    <>
      <HomeViewPort />

      <Suspense fallback={<div>Loading...</div>}>
        <FlashSales />
      </Suspense>

      <HotDeals />
      <Suspense fallback={<div>Loading...</div>}>
        <Categories />
        <CameraZone />
        <AllProducts />
      </Suspense>

      <Footer />
    </>
  );
};

export default Home;
