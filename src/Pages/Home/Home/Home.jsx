import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { RotatingLines } from "react-loader-spinner";
import useTitle from "../../../Hook/useTitle";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Gallary from "../Gallary/Gallary";
import NewArrival from "../NewArrival/NewArrival";
import BestSelling from "../BestSelling/BestSelling";
import About from "../About/About";

const Home = () => {
  const { loading } = useContext(AuthContext);
  useTitle("ToyTrove || Home");

  if (loading) {
    return (
      <div className="flex justify-center">
        <RotatingLines
          strokeColor="red"
          strokeWidth="5"
          animationDuration="0.75"
          width="96"
          visible={true}
        />
      </div>
    );
  }

  return (
    <div>
      <Banner></Banner>
      <Gallary></Gallary>
      <Category></Category>
      <NewArrival></NewArrival>
      <BestSelling></BestSelling>
      <About></About>
    </div>
  );
};

export default Home;
