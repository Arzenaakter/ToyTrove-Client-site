const About = () => {
  return (
    <div className="my-20 px-10 lg:px-0 flex lg:flex-row flex-col justify-center gap-10">
      <div className="lg:w-[50%] w-[100%]">
        <img
          className=""
          src="https://img.freepik.com/free-photo/little-girl-playing-with-toys-living-room_329181-9334.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=sph"
          alt=""
        />
      </div>
      <div className="lg:w-[50%] w-[100%]">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>
        <p className="text-justify text-sm mb-10">
          At TroyTrove, we believe in the power of connection and community. Our
          platform goes beyond just transactions; its a digital hub where dreams
          are nurtured and passions are shared. Embracing diversity and
          innovation, we empower sellers to showcase their unique creations and
          services, while enabling buyers to discover one-of-a-kind treasures
          that resonate with their hearts. Step into a world of endless
          possibilities, where every click brings you closer to extraordinary
          experiences. Join our growing family of visionaries, creators, and
          enthusiasts at Troy Marketplace, and lets redefine the way we shop,
          connect, and thrive together.
        </p>
        <button className="btn btn-error text-white mr-5">Explore More</button>
      </div>
    </div>
  );
};

export default About;
