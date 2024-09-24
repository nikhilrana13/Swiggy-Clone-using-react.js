// 

import React, { useContext,useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { productContext } from '../../Context/ProductContext';
import { FaRegStar } from "react-icons/fa";




function Search() {
  const { restaurant } = useContext(productContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);


  const handleSearchChange = (e)=>{
    const term = e.target.value
    setSearchTerm(term)
    // Filter the restaurants based on the search term
    if(term){
        const filtered = restaurant?.filter(item=>
            item?.name.toLowerCase().includes(term.toLowerCase())
        );
        setfilteredrestaurants(filtered);
    } else {
        setfilteredrestaurants([]);
    }
  };
 

  

    
  return (
    <div className='flex flex-col gap-5  w-full  items-center justify-center p-2 '>
      <div className='relative flex gap-2 justify-center items-center w-full p-5'>
        <input
          type="text"
          className='w-full max-w-[500px] pr-[50px] p-[15px] mt-2 border rounded-md border-gray-200'
          placeholder='Search for restaurant, cuisine or a dish'
          value={searchTerm}
          onChange={handleSearchChange}
        />
     <CiSearch className='text-3xl text-slate-500 font-bold relative -left-12 top-1' />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  items-center  '>
        {
        filteredrestaurants.length > 0 ? (
            filteredrestaurants?.map((item) => (
                <div key={item.id} className=' flex flex-col gap-2  border-slate-950 p-2 transition-transform duration-300 hover:scale-105 cursor-pointer ' >
    
                <div className=' relative rounded-md overflow-hidden' style={{ 
                backgroundImage : `url(${item.Backimage})`,
                    backgroundSize: 'cover', // Ensures the image covers the div properly
                    backgroundPosition: 'center',
                    width:'100%',
                    height:'150px',
                    position: 'relative'
                    }}>
                         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
                        <span className='absolute bottom-2 left-2 p-1 text-sm font-[800] text-[#f3fefe]'>{item.Discount}</span>
                    </div>
                
                <div className='flex flex-col gap-0 p-3  '>
                <span className='font-[700] text-lg'>{item.name}</span>
                <div className='flex gap-2'>
                <span className='flex gap-1 items-center font-[500]'> <FaRegStar className='text-green-700' />{item.rating}</span>
                .
                <span className='font-[700]'>{item.time}</span>
                </div>
                <span className='font-[500] text-[#a5a6a8]'>{item.Type}</span>
                <span className='font-[500] text-[#a5a6a8]'>{item.location}</span>
                </div>
               
              </div>
              ))

        ):(
            searchTerm && 
            <h1 className='text-1xl font-bold'>No Restaurant Found</h1>
             
        )
         
        }
      </div>
    </div>
  );
}

export default Search;
