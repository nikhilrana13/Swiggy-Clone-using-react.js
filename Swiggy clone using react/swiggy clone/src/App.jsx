import Navbar from "./Components/Header/Navbar"
import './App.css'
import { Outlet, useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { productContext } from "./Context/ProductContext"



function App() {
  const {Filterproducts} = useContext(productContext)
  const {category} = useParams()

  useEffect(() => {
    console.log("Category from useParams:", category); // Log the category
    Filterproducts(category);
}, [category, Filterproducts]);


  return (
    <>
     <div className="flex flex-col w-full ">
      <Navbar />
      <div className="flex flex-col items-center  w-100% h-full">
        <Outlet />
      </div>
     </div>
    </>
   
    
  )
}

export default App
