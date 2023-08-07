import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useTitle from "../../Hook/useTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  useTitle("ToyTrove || AddToy");

  const [selectedCategory, setSelectedCategory] = useState([]);

  const handleSelectCategory = (event) => {
    setSelectedCategory(event.target.value);
    //  console.log(event.target.value);
  };

  const handleAddToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const sellerName = user?.displayName;
    const sellerEmail = user?.email;
    const toyName = form.toyName.value;
    const toyPhoto = form.toyPhoto.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const subCategory = selectedCategory;

    const addedToy = {
      sellerName,
      sellerEmail,
      toyName,
      toyPhoto,
      price,
      rating,
      quantity,
      description,
      subCategory,
    };
    // console.log(addedToy);

    //  connect to server and mongodb
    fetch("https://toy-trove-server-three.vercel.app/allToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Toy added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
        // console.log(data);
      });
  };

  return (
    <div className="my-20 mx-auto container px-10 lg:px-0">
      <h1 className="text-4xl font-bold text-center mb-10">Add A Toy</h1>

      <form onSubmit={handleAddToy}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* seller name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>

            <input
              type="text"
              name="sellerName"
              required
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          {/* seller email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Email</span>
            </label>

            <input
              type="email"
              name="sellerEmail"
              required
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>
          {/* Toy name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>

            <input
              type="text"
              name="toyName"
              required
              className="input input-bordered"
            />
          </div>
          {/* Toy picture */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Photo URL</span>
            </label>

            <input
              type="text"
              name="toyPhoto"
              required
              className="input input-bordered"
            />
          </div>

          {/* Toy price */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Price</span>
            </label>

            <input
              type="text"
              name="price"
              required
              className="input input-bordered"
            />
          </div>
          {/* Toy rating */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Rating </span>
            </label>

            <input
              type="text"
              name="rating"
              required
              className="input input-bordered"
            />
          </div>
          {/* Available Quantity */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Quantity </span>
            </label>

            <input
              type="text"
              name="quantity"
              required
              className="input input-bordered"
            />
          </div>
          {/* Available description */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Description </span>
            </label>

            <input
              type="text"
              name="description"
              required
              className="input input-bordered"
            />
          </div>
          {/* Sub Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text"> Sub Category </span>
            </label>
            <select
              className="select  input input-bordered"
              required
              defaultValue=""
              onChange={handleSelectCategory}>
              <option value="" disabled>
                Pick your favorite sub Category
              </option>
              <option value="Supercars">Supercars</option>
              <option value="Electric-Sports-Cars">Electric Sports Cars</option>
              <option value="Roadsters">Roadsters</option>
              <option value="Pickup-Trucks">Pickup Trucks</option>
              <option value="SUV-Trucks">SUV Trucks</option>
              <option value="Heavy-Duty-Trucks">Heavy-Duty Trucks</option>
              <option value="Sedans">Sedans</option>
              <option value="Hatchbacks">Hatchbacks</option>
              <option value="SUVs">SUVs</option>
            </select>
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-block bg-[#045b62] border-none"
            type="submit"
            value="Add Toy"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToy;
