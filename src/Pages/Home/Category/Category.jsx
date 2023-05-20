import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import SubCategory from './SubCategory';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Category = () => {
   
  
    const [allToys,setAllToys] = useState([]);
  
    const [selectSubCategory ,setSelectSubCategory] = useState([])
   


    useEffect(()=>{
        fetch('https://toy-trove-server-three.vercel.app/allToys/')
        .then(res=>res.json())
        .then(data=>{
            setAllToys(data);
        })

    },[])



    //sports category 
const handleSoprtsCate = ()=>{


          const categories = ['Roadsters', 'Supercars', 'Electric-Sports-Cars'];
        const SportsCategory = allToys.filter(toy => categories.includes(toy.subCategory));
        setSelectSubCategory(SportsCategory)
        
        
}
// truck category
const handleTruck = ()=>{
 
    const categories = ['Pickup-Trucks', 'SUV-Trucks', 'Heavy-Duty-Trucks'];
    const truckCategory = allToys.filter(toy => categories.includes(toy.subCategory));
    setSelectSubCategory(truckCategory)
    // console.log(truckCategory);

}
// regular car category
const handleRegularCar = ()=>{

    const categories = ['Sedans', 'Hatchbacks', 'SUVs'];
    const RegularCarCategory = allToys.filter(toy => categories.includes(toy.subCategory));
    setSelectSubCategory(RegularCarCategory)
    // console.log(RegularCarCategory);

}




    return (
        <div className='my-20 px-10 lg:px-0 '>
            <h1 className='my-10 text-center text-3xl font-bold'>Shop by Category</h1>
            <Tabs >
    <TabList className='bg-base-200 pt-5 text-center border-b-2 mb-6 '>
                <Tab className='hidden ' ></Tab>
            <Tab onClick={handleSoprtsCate} > <span className='text-red-600 font-bold'>Sports car</span> </Tab>

            <Tab onClick={handleTruck}><span className='text-blue-600 font-bold'>Truck</span></Tab>

            <Tab onClick={handleRegularCar}><span className='text-red-600 font-bold'>Regular car</span> </Tab>
    </TabList>



       <TabPanel data-aos="zoom-in" >
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {allToys.slice(0,6).map( subCate => <SubCategory
                        key={subCate._id}
                        subCate={subCate}
                        ></SubCategory>
                        )}
            </div>
        </TabPanel>
    <TabPanel data-aos="zoom-in-up">
            <div>
            
                <div className='flex  my-5  font-bold   justify-center ' data-aos="fade-left">
                        <span className='bg-gray-400 p-2 '>Super cars</span>
                        <span className='bg-gray-300 p-2'>Electric Sports car</span>
                        <span className='bg-gray-400 p-2'>Roadsters</span>
                        
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        selectSubCategory.map(subCate => <SubCategory
                        key={subCate._id}
                        subCate={subCate}
                        ></SubCategory>)
                    }
                
                </div>
        
            </div>
    </TabPanel>
    <TabPanel data-aos="flip-left">
            <div>
            <div className='flex  my-5  font-bold   justify-center ' data-aos="fade-right">
                        <span className='bg-gray-400 p-2 '>Pickup Trucks</span>
                        <span className='bg-gray-300 p-2 '>Suv Trucks</span>
                        <span className='bg-gray-400 p-2 '>Heavy Duty Truck</span>
                        
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        selectSubCategory.map(subCate => <SubCategory
                        key={subCate._id}
                        subCate={subCate}
                        ></SubCategory>)
                    }
                
                </div>
            </div>
    </TabPanel>
    <TabPanel data-aos="zoom-out">
    <div>
            <div className='flex  my-5  font-bold   justify-center ' data-aos="fade-left">
                        <span className='bg-gray-400 p-2 '>Sedans</span>
                        <span className='bg-gray-300 p-2 '>HatchBacks</span>
                        <span className='bg-gray-400 p-2 '>Suvs</span>
                        
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                    {
                        selectSubCategory.map(subCate => <SubCategory
                        key={subCate._id}
                        subCate={subCate}
                        ></SubCategory>)
                    }
                
                </div>
            </div>
    </TabPanel>
      
  </Tabs>

        </div>
    );
};

export default Category;