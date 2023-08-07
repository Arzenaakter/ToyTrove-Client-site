const Contact = () => {
  return (
    <div className="my-20 px-10 lg:px-0 container  m-auto ">
      <h1 className="my-10 text-center text-3xl font-bold" data-aos="fade-left">
        Contact Us
      </h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold"> Ask Anything</h1>
            <p className="py-6">
              No question is too big or small—our platform connects you with a
              diverse community of knowledgeable individuals ready to provide
              answers and insights. Expand your understanding, quench your
              curiosity, and get solutions from real people at Ask Anything.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form
              action="https://formspree.io/f/xknljwkr"
              method="POST"
              className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <input
                  type="text"
                  placeholder="Message"
                  name="message"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#045b62]">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
