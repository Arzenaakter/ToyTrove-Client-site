
import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateToy = () => {
  const UpdateToy = useLoaderData();
  const { toyName,toyPhoto,rating,_id } = UpdateToy;

  const [selectedCategory, setSelectedCategory] = useState([]);


  const handleSelectCategory = event =>{
    setSelectedCategory(event.target.value)
    //  console.log(event.target.value);
  }
  

  const handleUpdateToy = (event) => {
    event.preventDefault();

    const form = event.target;
   
    const toyName = form.toyName.value;
    const toyPhoto = form.toyPhoto.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const subCategory = selectedCategory;

    const updatedInfo = { toyName,toyPhoto,price,rating,quantity,description,subCategory };
    // console.log(updatedInfo);

    // update
    fetch(`http://localhost:5000/allToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your Toy Updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          
        }
       
        // console.log(data);
        
      });
  };

  return (
    <div className="my-10 border p-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Update Toy: {toyName}
      </h1>

      <form onSubmit={handleUpdateToy} >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
       
          {/* Toy name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Toy Name</span>
            </label>

            <input
              type="text"
              name="toyName"
              required
             defaultValue={toyName}
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
          defaultValue={toyPhoto}
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
              defaultValue={rating}
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
            <select className="select  input input-bordered" required defaultValue='' onChange={handleSelectCategory}>
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
          
          <input className="btn btn-block bg-red-400 border-none" type="submit" value="Update Toy" />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
