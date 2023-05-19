import { Link } from "react-router-dom";

const AllToyRow = ({ toy }) => {
  const { sellerName, toyName, price, quantity, subCategory } = toy;
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>

      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to='/singleToy' className="btn btn-outline">
            <button>View details</button>
        </Link>
      </td>
    </tr>
  );
};

export default AllToyRow;
