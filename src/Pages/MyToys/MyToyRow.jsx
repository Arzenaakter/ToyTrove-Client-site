import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyToyRow = ({toy}) => {
    const {_id,toyName,toyPhoto,price,rating,quantity,description,subCategory} =toy
    // const slicedDescription = description && description.split(" ").slice(0, 5).join(" ");


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
            <button ><FaTrashAlt className="text-error text-2xl"/></button>
        </Link>
      </td>
    </tr>
    );
};

export default MyToyRow;