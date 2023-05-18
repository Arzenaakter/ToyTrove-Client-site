
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

import g1 from '../../../assets/gallery/g1.avif'
import g2 from '../../../assets/gallery/g2.avif'
import g3 from '../../../assets/gallery/g3.avif'
import g4 from '../../../assets/gallery/g4.avif'
import g5 from '../../../assets/gallery/g8.avif'
import g6 from '../../../assets/gallery/g6.avif'




const Gallary = () => {
    return (
        <div className="mt-40 border px-10 lg:px-0" data-aos="fade-right" >
            <h1 className="text-4xl font-bold text-center " >Toy Gallery</h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>
                <div className=''>
                    <img src={g1} alt="" className=' transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded'/>
                </div>
                <div>
                    <img src={g2} alt="" className=' transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded'/>
                </div>
                <div>
                    <img src={g3} alt="" className=' transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded'/>
                </div>
                <div>
                    <img src={g4} alt="" className=' transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded'/>
                </div>
                <div>
                    <img src={g5} alt="" className=' transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded'/>
                </div>
                <div>
                    <img src={g6} alt="" className=' transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded'/>
                </div>
                

            </div>

            
        </div>
    );
};

export default Gallary;