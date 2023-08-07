const Review = () => {
  return (
    <div className="mb-20 mt-30 px-10 lg:px-0 container  m-auto ">
      <h1 className="my-20 text-center text-3xl font-bold" data-aos="fade-left">
        WHAT CLIENTS SAYS
      </h1>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-20">
        <div className="lg:w-[50%] w-[100%] space-y-5">
          <p className="flex gap-4 items-center text-sm text-justify">
            {" "}
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img src="https://img.freepik.com/free-photo/confident-african-businesswoman-smiling-closeup-portrait-jobs-career-campaign_53876-143280.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=sph" />
              </div>
            </div>
            ToyTrove is a treasure trove of joy! From educational toys to
            entertaining games, their vast collection has something for every
            childs interest and age, making it our go-to destination for
            thoughtful gifts.
          </p>
          <p className="flex gap-4 items-center text-sm text-justify">
            {" "}
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img src="https://img.freepik.com/premium-photo/adorable-cosmetologist-with-clear-skin-wearing-black-medical-uniform-posing-indoors-isolated-grey-studio-background_7502-6856.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=sph" />
              </div>
            </div>
            As a parent, I love shopping at ToyTrove because of their commitment
            to safety and quality. Its reassuring to find a variety of trusted
            brands and toys that stimulate my childs imagination while ensuring
            their well-being.
          </p>
          <p className="flex gap-4 items-center text-sm text-justify">
            {" "}
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img src="https://img.freepik.com/premium-photo/young-beautiful-woman-teacher-posing-with-gesture_1258-12099.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=sph" />
              </div>
            </div>
            Wow! ToyTrove `s customer service is outstanding. They went above
            and beyond to help me find the perfect toy for my niece`s birthday,
            and their prompt delivery made her day even more special.
          </p>
          <p className="flex gap-4 items-center text-sm text-justify">
            {" "}
            <div className="avatar">
              <div className="w-20 rounded-full">
                <img src="https://img.freepik.com/free-photo/beautiful-girl-stands-near-walll-with-leaves_8353-5377.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=sph" />
              </div>
            </div>{" "}
            ToyTrove is a haven for nostalgic adults and playful kids alike.
            Their selection of classic toys and modern innovations is
            impressive, making us come back for more delightful surprises every
            time we visit.
          </p>
        </div>
        <div className="lg:w-[50%] w-[100%]">
          <img
            className=""
            src="https://img.freepik.com/free-photo/children-playing-with-blocks_1398-4993.jpg?size=626&ext=jpg&ga=GA1.2.2001766054.1688998742&semt=sph"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
