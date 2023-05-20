import { useEffect, useState } from "react";
import useTitle from "../../Hook/useTitle";
import AllToyRow from "./AllToyRow";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchName, setSearchName] = useState('');

  useTitle("ToyTrove || All Toys");

  useEffect(() => {
    fetch("https://toy-trove-server-three.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  }, []);

//   console.log(allToys);
const handleSearch =()=>{
  fetch(`https://toy-trove-server-three.vercel.app/toyNameSearch/${searchName}`)
  .then(res=>res.json())
  .then(data =>{
    setAllToys(data)
  })

}



  return (
    <div className="m-auto">
      <h1 className="my-10 text-center text-2xl font-bold">
        Toys : {allToys.length}
      </h1>
      {/* search */}
      <div className="flex justify-center">
      <div className="form-control">
        <div className="input-group">
          <input onChange={(e)=>setSearchName(e.target.value)}
            type="text"
            placeholder="Search Toy Name…"
            className="input input-bordered"
          />
          <button className="btn btn-square" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      </div>
      {/*  */}

      <div className="overflow-x-auto w-full my-20 border">
        <table className="table w-full">
          {/* head */}
          <thead >
            <tr>
             
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Details</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {allToys.map((toy) => (
              <AllToyRow key={toy._id} toy={toy}></AllToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
