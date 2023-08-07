import { useContext, useState } from "react";
import { useEffect } from "react";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hook/useTitle";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  useTitle("ToyTrove || MyToys");

  useEffect(() => {
    fetch(`https://toy-trove-server-three.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);

  const handlePrice = (e) => {
    const option = e.target.value;

    fetch(
      `https://toy-trove-server-three.vercel.app/myToys/${user?.email}?sortBy=${option}`
    )
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  };

  return (
    <div className="mx-auto container px-10 lg:px-0">
      <div className="text-center mt-10 text-2xl font-bold">
        <h1>User: {user?.displayName}</h1>
        <h1>Email: {user?.email}</h1>
      </div>

      <div className="text-center mt-10 text-2xl font-bold">
        <select
          className="select  input input-bordered"
          required
          defaultValue=""
          onChange={handlePrice}>
          <option value="" disabled>
            Price
          </option>
          <option value="asc">Ascending </option>
          <option value="desc">Descending</option>
        </select>
      </div>

      <div className="overflow-x-auto w-full my-20 border ">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Toy Photo</th>
              <th>Toy Name</th>
              <th>Sub-category</th>

              <th>description</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Rating</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>

          <tbody>
            {/* row 1 */}
            {myToys.map((toy) => (
              <MyToyRow
                key={toy._id}
                toy={toy}
                myToys={myToys}
                setMyToys={setMyToys}></MyToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
