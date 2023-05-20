import { Rating } from '@smastrom/react-rating'

const Selling = ({bestData}) => {
    const {img,rating,price,toyname} =bestData
    return (
        <div className='flex gap-6  border-dashed border-gray-400 p-6 border-2'>
            <img src={img} alt=""  className='w-28'/>
            <div>
                <h1 className='font-semibold text-xl'>{toyname}</h1>
                <p className='font-semibold'>Price: ${price}</p>
                <div className='flex gap-4'> <Rating style={{ maxWidth: 100 }} value={rating} readOnly />{rating}</div>
            </div>
            
        </div>
    );
};

export default Selling;