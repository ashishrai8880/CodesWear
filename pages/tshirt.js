import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const TShirt = ({products}) => {

  useEffect(() => {
    
    document.title = 'TShirt Page'

  }, [])
  

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* <Link href={'/product/this-is-my-tshirt'}> */}

            {products.map((product)=> (
               
               
              <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <Link legacyBehavior href={`/product/${product._id}`}>
                <a className="block relative  rounded overflow-hidden shadow-lg m-3">
                  <img
                    width={421}
                    height={260}
                    alt="ecommerce"
                    className="hover:scale-110 transition duration-500 w-full h-[50vh] block"
                    src={product.img}
                  />
                </a>
              </Link>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  {product.category}
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                {product.title}
                </h2>
                <p className="mt-1"> {product.price}</p>
                <p className="mt-1"> {product.size}</p>
              </div>
            </div>

            )
            ) }

          </div>
        </div>
      </section>
    </div>
  );
};


export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch('http://localhost:3000/api/getProduct')
  const products = await res.json()
  
  return { props: { products } }
}

export default TShirt;
