import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowProductDetails } from "../slice/ProductDetailsSlice";
import { NavLink } from "react-router-dom";

const FeaturesProduct = () => {
  const dispatch = useDispatch();

  // Ensure this matches the key in your Redux store
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(ShowProductDetails());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-bold">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-bold text-red-500">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <p className="text-sm tracking-widest text-gray-600 uppercase">Check Now</p>
        <h2 className="text-3xl font-bold text-gray-800">Our Feature Services</h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-8 px-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.slice(0, 4).map((product) => (
          <NavLink
            key={product.id}
            state={{ product }}
            to={`/singleProduct/${product.id}`}
            className="overflow-hidden transition-shadow bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl"
          >
            {/* Product Image */}
            <div className="flex items-center justify-center w-full h-40 bg-gray-100">
              <img src={product.image} alt={product.title} className="object-contain max-w-full max-h-full" />
            </div>

            {/* Product Details */}
            <div className="p-4">
              <p className="mb-2 text-xs text-gray-500 uppercase">{product.category}</p>
              <h3 className="text-lg font-medium text-gray-800 line-clamp-2">{product.title}</h3>
              <p className="mt-2 text-sm text-gray-600">${product.price}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default FeaturesProduct;
