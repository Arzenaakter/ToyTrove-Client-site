import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../AuthProvider/AuthProvider';

const SubCategory = ({subCate}) => {
    const {user} = useContext(AuthContext)
  
    const {toyName,rating,price,toyPhoto,subCategory, _id} = subCate;

   const handleView = ()=>{
    if(!user){
        Swal.fire({
            position: 'top-center',
            icon: 'error',
            title: 'You have to log in first to view details',
            showConfirmButton: false,
            timer: 3000
          })
    }
   }


    // console.log(subCate);
    return (
        <div className="card w-full bg-base-100 shadow-xl">
  <figure><img src={toyPhoto} alt="Toy Photo" className="h-48 w-full" /></figure>
  <div className="card-body">
        <h2 className="card-title text-xl">
        <span className="font-bold">Toy Name: </span>
        {toyName}
        
        </h2>
        <h3>
          <span className="font-bold"> Sub Category:</span>  {subCategory}
        </h3>
    
        <p ><span className="font-bold">Price:</span> ${price}</p>

            <div className='flex gap-2'>
            <Rating style={{ maxWidth: 120 }} value={rating} readOnly />
           <p> {rating}</p>
                 
            </div>
  
       
   
    <div className="card-actions justify-end">
     
          <Link to={`/singleToy/${_id}`} >
            <button className="badge badge-outline" onClick={handleView}>View details</button>
        </Link>

    </div>
  </div>
</div>
    );
};

export default SubCategory;