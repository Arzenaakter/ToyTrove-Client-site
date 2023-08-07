import toy2 from "../../../assets/toy9.avif";
import toy3 from "../../../assets/toy3.avif";
import toy4 from "../../../assets/toy4.avif";

const Banner = () => {
  return (
    <div className=" h-[450px]  px-10 lg:px-0">
      <div className="carousel w-full h-full">
        <div id="item1" className="carousel-item w-full relative">
          <img
            src="https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8268.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
            className="w-full"
          />

          {/*  */}

          <div className="absolute h-full flex  items-center left-0 top-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div className="text-white  space-y-7 lg:w-1/2 px-6  lg:pl-12">
              <h2 className=" lg:text-6xl text-xl ">
                Explore and Discover Playtime Magic
              </h2>
              <p className="text-sm  text-base-300 ">
                Get ready to embark on an adventure like no other. With ToyTrove
                as your guide, you will uncover a treasure trove of toys that
                will bring joy, laughter, and hours of entertainment to children
                of all ages. From classic favorites to the latest innovations,
                there is something for everyone here.
              </p>

              <div className="">
                <button className="btn bg-[#045b62] text-white mr-5">
                  Explore More
                </button>
              </div>
            </div>
          </div>

          {/*  */}
        </div>

        <div id="item2" className="carousel-item w-full relative ">
          <img src={toy2} className="w-full" />
          {/*  */}

          <div className="absolute h-full flex  items-center left-0 top-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div className="text-white  space-y-7 lg:w-1/2 px-6  lg:pl-12">
              <h2 className="lg:text-6xl text-xl">
                Find Your Perfect Playmate
              </h2>
              <p className="text-sm text-base-300">
                At ToyTrove, we believe in the power of play to nurture
                creativity and inspire young minds. Explore our curated
                selection of toys, carefully chosen to spark curiosity,
                encourage active play, and create unforgettable childhood
                memories.
              </p>

              <div className="">
                <button className="btn bg-[#045b62] text-white mr-5">
                  Explore More
                </button>
              </div>
            </div>
          </div>

          {/*  */}
        </div>

        <div id="item3" className="carousel-item w-full relative">
          <img src={toy3} className="w-full" />
          {/*  */}

          <div className="absolute h-full flex  items-center left-0 top-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div className="text-white  space-y-7 lg:w-1/2 px-6  lg:pl-12">
              <h2 className="lg:text-6xl text-xl ">A Treasure Trove of Toys</h2>
              <p className="text-sm text-base-300">
                Our mission at ToyTrove is to provide a magical experience for
                children and adults alike. We handpick toys from trusted brands
                and designers who share our passion for quality, safety, and
                educational value. Let your imagination soar as you browse
                through our captivating selection.
              </p>

              <div className="">
                <button className="btn bg-[#045b62] text-white mr-5">
                  Explore More
                </button>
              </div>
            </div>
          </div>

          {/*  */}
        </div>

        <div id="item4" className="carousel-item w-full  relative">
          <img src={toy4} className="w-full" />
          {/*  */}

          <div className="absolute h-full flex  items-center left-0 top-0 rounded-lg bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] ">
            <div className="text-white  space-y-7 lg:w-1/2 px-6  lg:pl-12">
              <h2 className="lg:text-6xl text-xl ">Embrace the Joy of Toys</h2>
              <p className="text-sm text-base-300">
                Prepare to be captivated by the wonders of playtime at ToyTrove.
                Step into a world where toys come to life, and dreams take
                flight. Discover the magic of childhood through our carefully
                curated collection, and embark on a journey of endless
                exploration and joy.
              </p>

              <div className="">
                <button className="btn bg-[#045b62] text-white mr-5">
                  Explore More
                </button>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="w-16">
          <img
            src="https://img.freepik.com/premium-photo/car-crash-accident-traffic-road-insurance-claim-concept_39768-8268.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=ais"
            alt=""
          />
        </a>
        <a href="#item2" className="w-16">
          <img src={toy2} alt="" />
        </a>
        <a href="#item3" className="w-16">
          <img src={toy3} alt="" />
        </a>
        <a href="#item4" className="w-16">
          <img src={toy4} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
