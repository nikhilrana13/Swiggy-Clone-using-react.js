
import React, { useContext } from 'react'
import { productContext } from '../Context/ProductContext'
import { FaRegStar } from "react-icons/fa";
import { product_categories } from '../Data/productdata';
import { NavLink } from 'react-router-dom';
import { Top_Restaurant } from '../Data/productdata';
import biryaniimg from '/images/biryani.avif'
import Pizzaimg from '/images/pizza.avif'
import pureveg from '/images/pureveg.avif'
import north from '/images/Northindian.avif'
import burgers from '/images/Burgers.avif'
import rolls from '/images/Rolls.avif'
import dessert from '/images/Desserts.avif'
import parantha from '/images/paratha.avif'
import noodles from '/images/noodles.avif'
import cakes from '/images/cakesss.avif'
import { useState } from 'react';



function Product() {
    const {restaurant} = useContext(productContext)
   

  

    const isActive = (element)=>{
        return element?.isActive ? 'text-[#ff5200]': ''
    }
    

    if (!restaurant || restaurant.length === 0) {
        return <div>Loading restaurants...</div>;
      }
  return (
    
    
    <div className='flex flex-col gap-5  py-2 w-full h-full justify-center px-[20rem] bg-[#FFFFFF] '>
        <div className='flex flex-col gap-1 p-1'>
            <h1 className='text-[1.5rem] font-[700] p-1 mt-1'>What's on your mind?</h1>
            <div className='mind flex  w-[100%] h-[100%]  gap-15 justify-center'>
              <NavLink to='/' className='w-[200px]'>
                <img src={pureveg} className='w-full h-[180px] object-contain' alt="pure veg" />
              </NavLink>
              <NavLink to='/' className='w-[200px]'>
                <img src={Pizzaimg} className='w-full h-[180px] object-contain' alt="pizza" />
              </NavLink>
              <NavLink to='/' className='w-[200px]'>
                <img src={north} className='w-full h-[180px] object-contain' alt="North indian" />
              </NavLink>
               <NavLink to='/' className='w-[200px]'>
                <img src={burgers} className='w-full h-[180px] object-contain' alt="Burgers" />
              </NavLink>
              <NavLink to='/' className='w-[200px]'>
                <img src={rolls} className='w-full h-[180px] object-contain' alt="Rolls" />
              </NavLink>
              <NavLink to='/' className='w-[200px]'>
                <img src={dessert} className='w-full h-[180px] object-contain' alt="Desserts" />
              </NavLink>
              <NavLink t0='/' className='w-[200px]'>
                <img src={biryaniimg} className='w-full h-[180px] object-contain' alt="Biryani" />
              </NavLink>
              <NavLink to='/' className='w-[200px]'>
                <img src={parantha} className='w-full h-[180px] object-contain' alt="Paratha" />
              </NavLink>
         
            


              
              

            </div>

        </div>

        <hr className='w-[115%]'></hr>
        <div className='Top flex flex-col gap-5'>
            <h1  className='text-[1.5rem] font-[700] p-1 mt-1'>Top Restaurants Chains in Chandigarh</h1>
            <div className='flex gap-2'>
                {
                  Top_Restaurant.map((item) =>{
                    return(
                        <div key={item.id} className='flex flex-col gap-2  border-slate-950 p-2 transition-transform duration-300 hover:scale-105 cursor-pointer ' >

                        <div className=' relative rounded-md overflow-hidden' style={{ 
                            backgroundImage : `url(${item.Backimage})`,
                            backgroundSize: 'cover', // Ensures the image covers the div properly
                            backgroundPosition: 'center',
                            width:'100%',
                            height:'100px',
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
                      
                      
                    )
                  })
                 
                }
             
             </div>
        </div>
             
        <hr className='w-[115%]'></hr>
         <div className='Restaurants  flex flex-col gap-5' >
            <h1 className='text-[1.5rem] font-[700] p-2 mt-2'>Restaurants with online food delivery in Chandigarh</h1>
              <div className='flex gap-2'>
                {
                  product_categories.map((category) =>{
                    return(
                        <li key={category.value} className='flex p-[1rem] w-50 items-center h-10  border rounded-[50px] '>
                          <NavLink to={`/${category.value}`} className={`text-black font-xm font-[500] ${isActive}`} >{category.label}</NavLink>
                        </li>
                    )
                  })
                }
                
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  items-center">
            {
              restaurant.map((item) =>{
                return(
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
                )
              })
            }
        
        </div>

         </div>
      
        
    </div>
  

    
  )
}

export default Product

