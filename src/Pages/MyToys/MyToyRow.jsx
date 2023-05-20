

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyToyRow = ({toy,myToys,setMyToys}) => {


    const {_id,toyName,toyPhoto,price,rating,quantity,description,subCategory} = toy;

  

    const handleDelete = _id =>{
        // console.log(_id);
        fetch(`https://toy-trove-server-three.vercel.app/allToys/${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            if(data.deletedCount > 0){
                Swal.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Yes, delete it!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Deleted!',
                        'Your toy has been deleted.',
                        'success'
                      )
                    }
                  })
                //   

               
            }
            const remaining = myToys.filter(del => del._id !== _id);
            setMyToys(remaining)
            // console.log(data);
        })
    }


    return (
        <tr>
     
       
      <td>
       <img src={toyPhoto} alt="toyPhoto" className="w-24" />
        </td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td >{description.length>=20 ? description.slice(0,28): description}...</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>
        <Link   to ={`/updateToyInfo/${_id}`} >
            <button ><FaEdit className="text-info text-2xl"/></button>
        </Link>
      </td>
      <td>
        <Link >
            <button onClick={()=> handleDelete(_id)} ><FaTrashAlt className="text-error text-2xl"/></button>
        </Link>
      </td>
    </tr>
    );
};

export default MyToyRow;