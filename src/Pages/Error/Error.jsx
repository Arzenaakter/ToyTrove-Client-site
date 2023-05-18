import { Link } from "react-router-dom";
import error from "../../assets/error.avif";

const Error = () => {
  return (
    <div className=" m-auto my-10">
      <img src={error} alt="" className="m-auto" />

      <div className="flex justify-center">
        <Link className="btn btn-outline " to="/">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
