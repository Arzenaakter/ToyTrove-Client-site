import { Link } from "react-router-dom";

const AllToyRow = ({ toy }) => {
  const { sellerName, toyName, price, quantity, subCategory,_id } = toy;
  return (
    <tr>
      

      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/singleToy/${_id}`} className="btn btn-outline">
            <button >View details</button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToyRow;
