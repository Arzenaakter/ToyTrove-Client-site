
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hook/useTitle";
import MyToyRow from "./MyToyRow";


const MyToys = () => {

    const {user} = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
   
    useTitle('ToyTrove || MyToys')

useEffect(()=>{
    fetch(`http://localhost:5000/myToys/${user?.email}`)
    .then(res=>res.json())
    .then(data=>setMyToys(data))

},[user])



    return (
        <div >
            <div className="text-center mt-10 text-2xl font-bold">
               
              <h1>User: {user?.displayName}</h1>
              <h1>Email: {user?.email}</h1>
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
              <MyToyRow key={toy._id} toy={toy}></MyToyRow>
            ))}
          </tbody>
        </table>
      </div>
           
        </div>
    );
};

export default MyToys;