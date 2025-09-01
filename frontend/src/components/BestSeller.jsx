import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const { products } = useContext(ShopContext); // Fetching products from context
    const [bestSeller, setBestSeller] = useState([]); // State to hold best sellers

    // Effect to filter out best sellers from the products
    useEffect(() => {
        const bestProduct = products.filter((item) => item.bestseller); // Filtering best sellers
        setBestSeller(bestProduct.slice(0, 5)); // Limiting to 5 best sellers
    }, [products]);

    return (
        <div className="my-10">
           <div className="text-center text-3xl py-8">
  <Title text1={'BEST'} text2={'SELLERS'} />
  <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
    Explore our best-selling watches—handpicked by thousands for their unmatched style, craftsmanship, and performance. These are the timepieces our customers love the most.
  </p>
</div>


            {/* Grid layout for displaying best-selling products */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                {bestSeller.map((item, index) => (
                    <ProductItem
                        key={index}
                        id={item._id}       // Product ID
                        name={item.name}     // Product Name
                        image={item.image}   // Product Image
                        price={item.price}   // Product Price
                    />
                ))}
            </div>
        </div>
    );
};

export default BestSeller;
