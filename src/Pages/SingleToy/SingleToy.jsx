import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const singleToy = useLoaderData();
  const {
    sellerName,
    sellerEmail,
    toyName,
    toyPhoto,
    price,
    rating,
    quantity,
    description,
    subCategory,
  } = singleToy;

  // console.log(singleToy);

  return (
    <div className="my-10 container mx-auto px-10 lg:px-10">
      <div className="hero min-h-screen bg-[#b1b1b1]  rounded-lg mx-auto border ">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img
            src={toyPhoto}
            className="max-w-sm rounded-lg shadow-2xl border-2  "
          />

          <div className="space-y-4 ">
            <h1 className="text-4xl font-bold">Toy Name: {toyName}</h1>
            <h3 className="text-xl ">
              <span className="font-bold">Seller Name:</span> {sellerName}
            </h3>
            <h3 className="text-xl ">
              <span className="font-bold">Seller Email:</span> {sellerEmail}
            </h3>
            <h3 className="text-xl ">
              <span className="font-bold">Toy Price:</span>$ {price}
            </h3>
            <h3 className="text-xl ">
              <span className="font-bold">Rating:</span> {rating}
            </h3>
            <h3 className="text-xl ">
              <span className="font-bold">Quantity:</span> {quantity}
            </h3>
            <h3 className="text-xl ">
              <span className="font-bold">Sub Category: </span> {subCategory}
            </h3>

            <p className="text-xl">
              <span className="font-bold">Description:</span> {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
