import useTitle from "../../../Hook/useTitle";
import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";


const Home = () => {
    useTitle('ToyTrove || Home')
    return (
        <div>
          <Banner></Banner>
          <Gallary></Gallary>
          
        </div>
    );
};

export default Home;