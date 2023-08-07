import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useState } from "react";
import { useEffect } from "react";
import Selling from "./Selling";
// ..
AOS.init();

const BestSelling = () => {
  const [bestsellData, setBestSellData] = useState([]);
  const [seeMore, setSeeMore] = useState(false);

  const handleSeeMore = () => {
    setSeeMore(true);
  };

  useEffect(() => {
    fetch("https://toy-trove-server-three.vercel.app/bestSelling")
      .then((res) => res.json())
      .then((data) => {
        setBestSellData(data);
      });
  }, []);

  return (
    <div className="mt-20 px-10 lg:px-0 container  m-auto">
      <h1 className="my-10 text-center text-3xl font-bold" data-aos="fade-left">
        Best Selling
      </h1>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seeMore
          ? bestsellData.map((bestData) => (
              <Selling key={bestData._id} bestData={bestData}></Selling>
            ))
          : bestsellData
              .slice(0, 6)
              .map((bestData) => (
                <Selling key={bestData._id} bestData={bestData}></Selling>
              ))}
      </div>
      <div className="text-center pb-10 my-10">
        {seeMore || bestsellData.length <= 6 ? (
          " "
        ) : (
          <button
            className="btn bg-[#045b62] text-white"
            onClick={handleSeeMore}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default BestSelling;
