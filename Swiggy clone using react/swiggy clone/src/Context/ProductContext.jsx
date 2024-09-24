

import { createContext } from "react";
import { Restaurant_data } from "../Data/productdata";
import { useState } from "react";

export const productContext = createContext([]);

export const ProductContextProvider = ({ children }) => {
    const [restaurant, setRestaurant] = useState(Restaurant_data);
    console.log(restaurant)



    const Filterproducts = (category) => {
        console.log("Filtering for category:", category);
        if (category) {
            const filteredProducts = Restaurant_data.filter(product => product.category === category);

            if (filteredProducts.length !== restaurant.length || !filteredProducts.every((item, index) => item.id === restaurant[index]?.id)) {
                setRestaurant(filteredProducts);
            }
        } else {
            if (restaurant.length !== Restaurant_data.length) {
                setRestaurant(Restaurant_data);
            }
        }
    

    }

    




    return (
        <productContext.Provider value={{ restaurant, Filterproducts }}>
            {children}
        </productContext.Provider>
    );
};
