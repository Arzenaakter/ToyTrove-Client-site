import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllToyRow = ({ toy }) => {
  const { sellerName, toyName, price, quantity, subCategory, _id } = toy;

  const { user } = useContext(AuthContext);

  const handleView = () => {
    if (!user) {
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "You have to log in first to view details",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>{quantity}</td>
      <td>
        <Link
          to={`/singleToy/${_id}`}
          className="btn btn-outline"
          onClick={handleView}>
          <button>View details</button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToyRow;
