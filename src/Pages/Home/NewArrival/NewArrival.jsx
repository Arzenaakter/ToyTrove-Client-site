import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const NewArrival = () => {
  return (
    <div className="my-20 px-10 lg:px-0 ">
      <h1 className="my-10 text-center text-3xl font-bold">
        <span className="italic text-gray-400" data-aos="fade-right">
          New Arrivals
        </span>
        <br />
        <span data-aos="fade-left">Check out the Latest</span>
      </h1>

      <div className="bg-red-400 ">


      <div className="carousel w-full h-52 ">
            {/* slide 1 */}
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src='https://i.ibb.co/Tm8F3SF/download-3.jpg'
              className="w-96 h-full"
            />
            <img
              src='https://i.ibb.co/stZhZ8y/download-4.jpg'
              className="w-96 h-full"
            />
            <img
              src='https://i.ibb.co/YB4gZy8/download-5.jpg'
              className="w-96 h-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="text-3xl text-white ">
                ❮
              </a>
              <a href="#slide2" className="text-3xl text-white">
                ❯
              </a>
            </div>
          </div>
          {/* slide 1 end */}

            {/* slide 2 */}
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src='https://i.ibb.co/wB1bw2f/images.jpg'
              className="w-96 h-full"
            />
            <img
              src='https://i.ibb.co/y8krNns/images-2.jpg'
              className="w-96 h-full"
            />
            <img
              src='https://i.ibb.co/MBZKvYK/images-1.jpg'
              className="w-96 h-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="text-3xl text-white ">
                ❮
              </a>
              <a href="#slide3" className="text-3xl text-white">
                ❯
              </a>
            </div>
          </div>
          {/* slide 2 end */}
            {/* slide 3 */}
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src='https://i.ibb.co/6XD4hDC/images-3.jpg'
              className="w-96 h-full"
            />
            <img
              src='https://i.ibb.co/hBFqCtT/images-4.jpg'
              className="w-96 h-full"
            />
            <img
              src='https://i.ibb.co/2352d3X/images-5.jpg'
              className="w-96 h-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="text-3xl text-white ">
                ❮
              </a>
              <a href="#slide1" className="text-3xl text-white">
                ❯
              </a>
            </div>
          </div>
          {/* slide 3 end */}
            

          
         

        </div>


      </div>
    </div>
  );
};

export default NewArrival;
