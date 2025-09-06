import React, { useEffect, useState } from "react";
import Instance from "../api/axios"; // your axios instance
import Button from "../components/ui/Button";
import productBanner from "../assets/products/product.png";
import { Star } from "../components/ui/Star";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    console.log("Fetching products...");

    try {
      const res = await Instance.get("/products");
      setProducts(res.data);
      console.log(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    }
  };

  return (
    products.length > 0 && (
      <div className="px-4 md:px-16 py-8 bg-gray-50 min-h-screen">
        {/* Banner */}
        <div className="bg-[#f0e5f8] rounded-xl flex flex-col md:flex-row items-center justify-between p-6 md:px-20 mb-8">
          <div className="mb-4 md:mb-0 order-2 md:order-1">
            <h2 className="text-2xl md:text-3xl font-bold">
              Grab Upto 50% Off On <br /> Selected Headphone
            </h2>
            <Button className="mt-4 md:w-1/2  bg-primary">Buy Now</Button>
          </div>
          <img
            src={productBanner}
            alt="Banner"
            className="w-48 md:w-64 order-1 md:order-2 md:-mt-10"
          />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-[#f7f5f7]  rounded-xl shadow-md p-6 relative hover:shadow-lg transition-shadow duration-200"
            >
              {/* Heart Icon */}
              <div className="absolute top-2 right-2 cursor-pointer bg-white w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-red-500">
                &#10084;
              </div>

              {/* Product Image */}
              <img
                src={product.image}
                alt={product.title}
                className="w-full aspect-square object-cover mb-4"
              />

              <div className="flex justify-between">
                <div className="flex flex-col  gap-3">
                  {/* Product Info */}
                  <h3 className=" mb-1 truncate text-baseGray md:text-xl">
                    {product.title.length > 10
                      ? product.title.slice(0, 10) + ".."
                      : product.title}
                  </h3>
                  <p className="text-gray-500/50  mb-2  text-xl">
                    {product.category}
                  </p>
                  <div className="flex items-center mb-2">
                    <Star rating={product.rating.rate} />
                    <span className="ml-3 text-baseGray">
                      ({product.rating.count})
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="text-xl font-bold text-baseBlack mb-4  md:text-xl lg:text-2xl">
                  $ {product.price.toFixed(0)}
                </div>
              </div>
              {/* Buttons */}
              <div className="flex gap-2">
                <Button className="flex-1 text-white bg-blue-700 hover:bg-blue-800">
                  Add To Cart
                </Button>
                <Button className="flex-1" color="baseWhite">
                  Add Shortlist
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  );
};

export default Products;
